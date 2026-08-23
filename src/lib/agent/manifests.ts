/**
 * Discovery manifests that point agents at PayAI's callable surfaces.
 *
 * Everything referenced here is live: the MCP server is the Streamable HTTP
 * endpoint served by the PayAI documentation site, and the OpenAPI description
 * covers the production facilitator.
 */
import { SITE_URL, DOCS_URL, FACILITATOR_URL, MCP_URL, GITHUB_URL } from "@/lib/site";

const MCP_SERVER_DESCRIPTION =
  "Search and retrieve the PayAI documentation corpus: x402 protocol reference, merchant and client quickstarts, supported networks, and facilitator pricing.";

export function buildMcpManifest() {
  return {
    $schema: "https://modelcontextprotocol.io/schemas/draft/2025-07-09/server.json",
    name: "io.payai/docs",
    title: "PayAI Documentation",
    description: MCP_SERVER_DESCRIPTION,
    version: "1.0.0",
    websiteUrl: SITE_URL,
    repository: { url: `${GITHUB_URL}`, source: "github" },
    remotes: [
      {
        type: "streamable-http",
        url: MCP_URL,
        description: "Streamable HTTP MCP server. No authentication required.",
      },
    ],
  };
}

export function buildAiCatalog() {
  return {
    $schema: "https://modelcontextprotocol.io/schemas/draft/2025-07-09/ai-catalog.json",
    name: "PayAI",
    description:
      "The x402 payment facilitator for AI agents and apps. Verify and settle stablecoin micropayments over HTTP across Solana and EVM networks.",
    url: SITE_URL,
    interfaces: {
      mcp: [
        {
          name: "PayAI Documentation",
          description: MCP_SERVER_DESCRIPTION,
          url: MCP_URL,
          transport: "streamable-http",
          authentication: "none",
        },
      ],
      openapi: [
        {
          name: "PayAI x402 Facilitator API",
          description:
            "Verify and settle x402 payments, list supported networks, and browse the PayAI Bazaar catalog of x402-payable resources.",
          url: `${SITE_URL}/openapi.json`,
          server: FACILITATOR_URL,
        },
      ],
      llmsTxt: [`${SITE_URL}/llms.txt`, `${SITE_URL}/llms-full.txt`],
      documentation: [DOCS_URL],
    },
  };
}

/** RFC 9727 API catalog: a linkset naming every published API description. */
export function buildApiCatalog() {
  return {
    linkset: [
      {
        anchor: SITE_URL,
        "service-desc": [
          {
            href: `${SITE_URL}/openapi.json`,
            type: "application/openapi+json",
            title: "PayAI x402 Facilitator API — OpenAPI 3.1 description",
          },
        ],
        "service-doc": [
          {
            href: `${DOCS_URL}/x402/introduction`,
            type: "text/html",
            title: "PayAI x402 documentation",
          },
        ],
        "service-meta": [
          {
            href: `${SITE_URL}/.well-known/ai-catalog.json`,
            type: "application/json",
            title: "PayAI AI catalog",
          },
        ],
        status: [
          {
            href: `${FACILITATOR_URL}/health`,
            type: "text/plain",
            title: "Facilitator health",
          },
        ],
      },
    ],
  };
}
