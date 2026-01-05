/**
 * Same-origin proxy endpoint for Stape sGTM.
 *
 * Stape guide (Vercel): https://stape.io/helpdesk/documentation/how-to-use-same-origin-through-vercel#step-2-deploy-the-changes-and-test-it
 */
const TARGET_ORIGIN = "https://mts.payai.network";
const TARGET_HOST = "mts.payai.network";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const HOP_BY_HOP_HEADERS = new Set([
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
]);

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for") || "";
  return forwardedFor.split(",")[0]?.trim() || "unknown";
}

function buildUpstreamHeaders(req: Request) {
  const clientIp = getClientIp(req);

  const headers = new Headers(req.headers);
  // Avoid forwarding hop-by-hop headers.
  for (const h of HOP_BY_HOP_HEADERS) headers.delete(h);
  // Avoid mismatched host/length; fetch will recompute.
  headers.delete("host");
  headers.delete("content-length");

  // Stape-recommended overrides/additions
  headers.set("x-forwarded-for", clientIp);
  headers.set("x-from-cdn", "cf-stape");
  headers.set("host", TARGET_HOST);
  headers.set("cf-connecting-ip", clientIp);

  return headers;
}

function buildDownstreamHeaders(upstream: Response) {
  const headers = new Headers();
  for (const [key, value] of upstream.headers.entries()) {
    const k = key.toLowerCase();
    if (HOP_BY_HOP_HEADERS.has(k)) continue;
    // Let the platform handle these to avoid mismatches.
    if (k === "content-length") continue;
    headers.set(key, value);
  }
  return headers;
}

async function proxyToStape(req: Request) {
  const url = new URL(req.url);
  const upstreamUrl = new URL(url.pathname + url.search, TARGET_ORIGIN);
  const headers = buildUpstreamHeaders(req);

  const method = req.method.toUpperCase();
  const hasBody = !(method === "GET" || method === "HEAD");

  const upstreamResponse = await fetch(upstreamUrl, {
    method,
    headers,
    body: hasBody ? await req.arrayBuffer() : undefined,
    redirect: "manual",
  });

  return new Response(upstreamResponse.body, {
    status: upstreamResponse.status,
    headers: buildDownstreamHeaders(upstreamResponse),
  });
}

export async function GET(req: Request) {
  return proxyToStape(req);
}
export async function HEAD(req: Request) {
  return proxyToStape(req);
}
export async function POST(req: Request) {
  return proxyToStape(req);
}
export async function PUT(req: Request) {
  return proxyToStape(req);
}
export async function PATCH(req: Request) {
  return proxyToStape(req);
}
export async function DELETE(req: Request) {
  return proxyToStape(req);
}
export async function OPTIONS(req: Request) {
  return proxyToStape(req);
}


