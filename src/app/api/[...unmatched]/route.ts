import { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site";

/**
 * Catch-all for unmatched `/api/*` paths.
 *
 * API clients and agents cannot parse an HTML error page, so every miss under
 * /api answers with RFC 9457 `application/problem+json` carrying a stable
 * code and a resolution hint.
 */
export const dynamic = "force-dynamic";

function problem(request: NextRequest) {
  const path = request.nextUrl.pathname;

  return new Response(
    JSON.stringify(
      {
        type: "about:blank",
        title: "Endpoint not found",
        status: 404,
        code: "endpoint_not_found",
        detail: `No API endpoint is served at ${path} on ${SITE_URL}.`,
        resolution: `The PayAI x402 Facilitator API is described at ${SITE_URL}/openapi.json and served from https://facilitator.payai.network. See ${SITE_URL}/llms.txt for the full list of machine-readable surfaces.`,
        instance: path,
      },
      null,
      2,
    ),
    {
      status: 404,
      headers: {
        "Content-Type": "application/problem+json; charset=utf-8",
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}

export const GET = problem;
export const POST = problem;
export const PUT = problem;
export const PATCH = problem;
export const DELETE = problem;
export const HEAD = problem;
export const OPTIONS = problem;
