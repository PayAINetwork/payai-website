import { buildLlmsFullTxt } from "@/lib/agent/llms";
import { AUTHORED_PAGES } from "@/lib/agent/pages";

/**
 * The llms.txt guide plus the full Markdown body of every authored page, so an
 * agent can ingest the site in a single request.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  const pages = Object.entries(AUTHORED_PAGES).map(([path, render]) => ({
    path,
    markdown: render(),
  }));

  return new Response(buildLlmsFullTxt(pages), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
