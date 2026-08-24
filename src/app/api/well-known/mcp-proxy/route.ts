import { NextRequest } from "next/server";
import { MCP_URL } from "@/lib/site";

/**
 * Live MCP endpoint on this origin, served at /.well-known/mcp.
 *
 * PayAI's Streamable HTTP MCP server is hosted with the documentation site.
 * Agents that discover PayAI at payai.network should be able to complete the
 * handshake here rather than having to follow the manifest to another host, so
 * this proxies straight through to it.
 *
 * Streaming matters: MCP replies with text/event-stream, so the upstream body
 * is piped rather than buffered.
 */
export const dynamic = "force-dynamic";

const HOP_BY_HOP = new Set([
  "connection",
  "keep-alive",
  "transfer-encoding",
  "upgrade",
  "host",
  "content-length",
]);

async function proxy(request: NextRequest) {
  const headers = new Headers();
  for (const [key, value] of request.headers.entries()) {
    if (!HOP_BY_HOP.has(key.toLowerCase())) headers.set(key, value);
  }

  const method = request.method.toUpperCase();
  const hasBody = method !== "GET" && method !== "HEAD";

  let upstream: Response;
  try {
    upstream = await fetch(MCP_URL, {
      method,
      headers,
      body: hasBody ? await request.arrayBuffer() : undefined,
      redirect: "follow",
      cache: "no-store",
    });
  } catch {
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: { code: -32603, message: `MCP upstream unreachable at ${MCP_URL}` },
        id: null,
      }),
      {
        status: 502,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      },
    );
  }

  const responseHeaders = new Headers();
  for (const [key, value] of upstream.headers.entries()) {
    if (!HOP_BY_HOP.has(key.toLowerCase())) responseHeaders.set(key, value);
  }
  responseHeaders.set("Cache-Control", "no-store");
  responseHeaders.set("Access-Control-Allow-Origin", "*");
  responseHeaders.set(
    "Access-Control-Allow-Headers",
    "content-type, accept, mcp-session-id, mcp-protocol-version, authorization",
  );
  responseHeaders.set("Access-Control-Expose-Headers", "mcp-session-id");
  responseHeaders.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");

  return new Response(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}

export const GET = proxy;
export const POST = proxy;
export const DELETE = proxy;

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "content-type, accept, mcp-session-id, mcp-protocol-version, authorization",
    },
  });
}
