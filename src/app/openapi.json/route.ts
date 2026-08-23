import { buildOpenApiDocument } from "@/lib/agent/openapi";

/**
 * Serves the OpenAPI 3.1 description of the PayAI x402 Facilitator API.
 *
 * Published from the marketing origin so an agent that lands on payai.network
 * can discover the callable product API in one hop.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  return new Response(JSON.stringify(buildOpenApiDocument(), null, 2), {
    headers: {
      "Content-Type": "application/openapi+json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
