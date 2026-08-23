import { NextRequest } from "next/server";
import { AUTHORED_PAGES, DERIVED_PAGES, notFoundMarkdown } from "@/lib/agent/pages";
import { htmlToMarkdown } from "@/lib/agent/htmlToMarkdown";
import { SITE_URL } from "@/lib/site";

/**
 * Serves the Markdown representation of a page.
 *
 * Reached two ways, both via middleware rewrite: an `Accept: text/markdown`
 * request for a content page, or a request for that page's `.md` path.
 *
 * `Vary: Accept` is mandatory here — without it a CDN can hand the cached HTML
 * variant to an agent that asked for Markdown, or the reverse.
 */
export const dynamic = "force-dynamic";

const MARKDOWN_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  Vary: "Accept",
  "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
  "Access-Control-Allow-Origin": "*",
} as const;

function normalize(path: string | null): string {
  if (!path) return "/";
  const trimmed = path.replace(/\.md$/, "");
  if (trimmed === "" || trimmed === "/") return "/";
  return trimmed.replace(/\/+$/, "");
}

/**
 * Derives Markdown for pages without an authored version by reading back the
 * page's own rendered HTML. Same-origin, so it costs one internal request and
 * stays correct when the page copy changes. Returns null for a path that does
 * not exist, or one too thin to be a useful representation.
 */
async function deriveFromHtml(origin: string, pathname: string): Promise<string | null> {
  try {
    const response = await fetch(`${origin}${pathname}`, {
      headers: { Accept: "text/html" },
      // A redirect means an interstitial, not the page — never derive from it.
      redirect: "manual",
      next: { revalidate: 3600 },
    });
    if (response.status !== 200) return null;
    if (!response.headers.get("content-type")?.includes("text/html")) return null;
    const markdown = htmlToMarkdown(await response.text());
    return markdown.length > 200 ? markdown : null;
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const pathname = normalize(
    request.headers.get("x-markdown-path") ??
      request.nextUrl.searchParams.get("path"),
  );

  const authored = AUTHORED_PAGES[pathname];
  if (authored) {
    return new Response(authored(), { headers: MARKDOWN_HEADERS });
  }

  /*
   * Only pages the sitemap vouches for are derived. Deriving from an arbitrary
   * path meant a login interstitial or error page could be served as though it
   * were site content.
   */
  if (DERIVED_PAGES.has(pathname)) {
    const derived = await deriveFromHtml(request.nextUrl.origin, pathname);
    const body =
      derived ??
      /*
       * The page exists — the sitemap vouches for it — so a failed derivation
       * must not answer 404. Point at the canonical HTML instead, and let the
       * agent decide whether to fetch it.
       */
      `# ${SITE_URL}${pathname}\n\nA Markdown representation of this page could not be generated. Read the canonical HTML version instead: ${SITE_URL}${pathname}`;

    return new Response(
      `${body}\n\n---\n\nCanonical HTML: ${SITE_URL}${pathname}\n`,
      { headers: MARKDOWN_HEADERS },
    );
  }

  return new Response(notFoundMarkdown(pathname), {
    status: 404,
    headers: MARKDOWN_HEADERS,
  });
}
