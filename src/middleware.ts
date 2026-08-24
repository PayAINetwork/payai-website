import { NextRequest, NextResponse } from "next/server";
import { isMarkdownPath } from "@/lib/agent/pages";

/**
 * Markdown content negotiation (acceptmarkdown.com) and agent-facing headers.
 *
 * Three jobs:
 *  1. `Accept: text/markdown` on a content page is rewritten to the Markdown
 *     renderer. A `.md` path suffix does the same thing without a header.
 *  2. Every HTML response advertises its Markdown alternate via a `Link` header
 *     and carries `Vary: Accept`, so a CDN cannot serve the wrong variant.
 *  3. A request whose Accept header rejects every representation this origin
 *     serves gets RFC 9457 problem+json, not an HTML error page.
 */

const MARKDOWN_TYPE = "text/markdown";
const SERVED_TYPES = [
  "text/html",
  "text/markdown",
  "text/plain",
  "application/json",
  // Next's own RSC payload type — never 406 the framework's navigations.
  "text/x-component",
];

type AcceptEntry = { type: string; q: number };

function parseAccept(header: string): AcceptEntry[] {
  return header
    .split(",")
    .map((part) => {
      const [rawType, ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.split("=")[1]) : 1;
      return {
        type: rawType.trim().toLowerCase(),
        q: Number.isFinite(q) ? q : 1,
      };
    })
    .filter((entry) => entry.type.length > 0);
}

function qualityFor(entries: AcceptEntry[], type: string): number {
  const [group] = type.split("/");
  let best = 0;
  for (const entry of entries) {
    if (entry.type === type || entry.type === `${group}/*` || entry.type === "*/*") {
      best = Math.max(best, entry.q);
    }
  }
  return best;
}

/** True when the client asked for Markdown at least as strongly as HTML. */
function prefersMarkdown(entries: AcceptEntry[]): boolean {
  const markdown = entries.some((e) => e.type === MARKDOWN_TYPE);
  if (!markdown) return false;
  return qualityFor(entries, MARKDOWN_TYPE) >= qualityFor(entries, "text/html");
}

/** True when the client explicitly rejected everything this origin can serve. */
function acceptsNothing(entries: AcceptEntry[]): boolean {
  if (entries.length === 0) return false;
  return SERVED_TYPES.every((type) => qualityFor(entries, type) === 0);
}

function rewriteToMarkdown(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = "/api/md";
  url.search = "";
  url.searchParams.set("path", pathname);

  /*
   * The renderer reads the header, not the query string: on a middleware
   * rewrite the route handler still sees the *original* request's search
   * params, so the query string alone silently resolves every path to "/".
   */
  const headers = new Headers(request.headers);
  headers.set("x-markdown-path", pathname);

  return NextResponse.rewrite(url, { request: { headers } });
}

function problemJson(status: number, title: string, detail: string, resolution: string) {
  return new NextResponse(
    JSON.stringify({ type: "about:blank", title, status, detail, resolution }, null, 2),
    {
      status,
      headers: {
        "Content-Type": "application/problem+json; charset=utf-8",
        Vary: "Accept",
      },
    },
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accept = parseAccept(request.headers.get("accept") ?? "");

  /*
   * Client-side navigations and prefetches are Next's own traffic on the same
   * pathnames. They must never be negotiated into Markdown or rejected with a
   * 406, or in-app routing breaks.
   */
  const isRscRequest =
    request.headers.has("rsc") || request.headers.has("next-router-prefetch");
  if (isRscRequest) return NextResponse.next();

  // `.md` suffix: an explicit request for the Markdown variant.
  if (pathname.endsWith(".md")) {
    const base = pathname.slice(0, -3) || "/";
    return rewriteToMarkdown(request, base === "/index" ? "/" : base);
  }

  if (acceptsNothing(accept)) {
    return problemJson(
      406,
      "Not Acceptable",
      `This resource can be served as ${SERVED_TYPES.join(", ")}. The request's Accept header rejects all of them.`,
      "Retry with 'Accept: text/html' for the page or 'Accept: text/markdown' for its Markdown representation.",
    );
  }

  /*
   * Every path negotiates Markdown, not just the ones with authored content:
   * the renderer derives Markdown from a page's own HTML, and answers a path
   * that does not exist with a Markdown 404 rather than an HTML error page.
   */
  if (prefersMarkdown(accept)) return rewriteToMarkdown(request, pathname);

  const response = NextResponse.next();

  // Let caches key HTML and Markdown variants separately. Next appends its own
  // RSC tokens to Vary downstream; `append` keeps both sets.
  response.headers.append("Vary", "Accept");

  if (isMarkdownPath(pathname)) {
    const markdownPath = pathname === "/" ? "/index.md" : `${pathname}.md`;
    response.headers.append(
      "Link",
      `<${markdownPath}>; rel="alternate"; type="text/markdown"`,
    );
  }

  return response;
}

export const config = {
  /*
   * Skip Next internals and static assets. The Markdown and Link header logic
   * only ever applies to content pages, and /api/md must not re-enter here.
   */
  matcher: ["/((?!_next/static|_next/image|api/md|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|mp4|woff|woff2|txt|xml|json)$).*)"],
};
