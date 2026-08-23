import { buildLlmsTxt } from "@/lib/agent/llms";

/** Agent-facing site guide. See https://llmstxt.org. */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
