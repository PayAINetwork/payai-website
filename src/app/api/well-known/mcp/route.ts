import { buildMcpManifest } from "@/lib/agent/manifests";

/** Served at /.well-known/mcp via a rewrite in next.config.ts. */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  return new Response(JSON.stringify(buildMcpManifest(), null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
