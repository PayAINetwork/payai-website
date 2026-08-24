/**
 * Machine-readable site guides for agents: /llms.txt and /llms-full.txt.
 *
 * The "When to use PayAI" section is deliberately concrete about the jobs PayAI
 * is right for — and the ones it is not — because generic marketing copy does
 * not help an agent decide whether to route a task here.
 */
import {
  SITE_URL,
  FACILITATOR_URL,
  DOCS_URL,
  BLOG_URL,
  MERCHANT_PORTAL_URL,
  ECHO_MERCHANT_URL,
  MCP_URL,
  GITHUB_URL,
  DISCORD_URL,
  X_URL,
  INFO_EMAIL,
} from "@/lib/site";

const WHEN_TO_USE = `## When to use PayAI

PayAI is an [x402](${DOCS_URL}/x402/introduction) payment facilitator. x402 revives the HTTP \`402 Payment Required\` status code: a server answers an unpaid request with \`402\` and machine-readable payment terms, the client signs a stablecoin payment, and the facilitator verifies and settles it on-chain. No accounts, no API keys, no card on file, no human in the loop.

Reach for PayAI when you are doing any of these:

- **Charging for an API, MCP tool, or agent service per request.** Put x402 middleware in front of a route and point it at \`${FACILITATOR_URL}\`. You get paid in USDC per call, with no signup flow for your buyers. Start at ${DOCS_URL}/x402/servers/introduction.
- **Paying for a resource that returned HTTP 402.** Use an x402 client SDK; it reads the payment requirements, signs, and retries. Start at ${DOCS_URL}/x402/clients/introduction.
- **Finding services an agent can buy right now.** Query \`GET ${FACILITATOR_URL}/discovery/resources\` for the live catalog of x402-payable HTTP endpoints and MCP tools, including their payment terms and, where published, their input and output schemas.
- **Settling agent payments on Solana.** PayAI is Solana-first and sponsors gas, so the payer needs only USDC — no SOL for fees. It also settles on Base, Polygon, Avalanche, Arbitrum, Sei, X Layer, and SKALE.
- **Checking which chains and schemes are live** before advertising payment terms: \`GET ${FACILITATOR_URL}/supported\`.
- **Testing an x402 integration end to end** against a real merchant that returns 402: ${ECHO_MERCHANT_URL}.

Do not use PayAI for: card payments, fiat payouts, bank transfers, custody of user funds, or subscription billing. PayAI settles stablecoin micropayments over HTTP; it is not a payment processor for consumer checkout and it never holds merchant balances.

## How an agent should call PayAI

1. Read the developer portal at ${SITE_URL}/developers, or the OpenAPI description at ${SITE_URL}/openapi.json — it documents every public facilitator operation with typed request and response schemas.
2. Call \`GET ${FACILITATOR_URL}/supported\` to pick a live network and scheme.
3. Call \`POST ${FACILITATOR_URL}/verify\` to check a signed payment, then \`POST ${FACILITATOR_URL}/settle\` to move funds.
4. Errors are always JSON. \`/verify\` returns \`{ isValid: false, invalidReason, invalidMessage }\`; \`/settle\` returns \`{ success: false, errorReason, errorMessage, transaction, network, payer }\`. Treat \`errorReason: "settlement_pending"\` as unresolved rather than failed, and re-submit the identical body to poll for the outcome.

\`GET\` endpoints need no authentication. \`POST /verify\` and \`POST /settle\` take an optional \`Authorization: Bearer <api-key>\` for credit accounting and dedicated rate lanes; without one you are served on the free tier. Keys come from ${MERCHANT_PORTAL_URL}.`;

export function buildLlmsTxt(): string {
  return `# PayAI

> PayAI is the x402 payment facilitator for AI agents and apps. It verifies and settles stablecoin micropayments over HTTP across Solana, Base, Polygon, Avalanche, Arbitrum, Sei, X Layer, and SKALE — so a service can charge per request and an agent can pay for one, without accounts or API keys.

${WHEN_TO_USE}

## Developer resources

- [PayAI developer portal](${SITE_URL}/developers): endpoints, authentication, error model, versioning, and quickstarts in one page.
- [PayAI OpenAPI description](${SITE_URL}/openapi.json): OpenAPI 3.1 spec for the PayAI x402 Facilitator API — verify, settle, supported networks, and Bazaar discovery.
- [PayAI Facilitator API](${FACILITATOR_URL}): production facilitator endpoint. Point your x402 middleware or client here.
- [PayAI documentation](${DOCS_URL}): quickstarts, protocol reference, and supported networks.
- [PayAI MCP server](${SITE_URL}/mcp): Streamable HTTP MCP server for searching the PayAI docs corpus. No authentication. Also reachable at ${SITE_URL}/.well-known/mcp and on its origin host at ${MCP_URL}.
- [x402 quickstart](${DOCS_URL}/x402/quickstart): fastest path from zero to a paid request.
- [Merchant quickstarts](${DOCS_URL}/x402/servers/introduction): Express, Hono, Next.js, FastAPI, Flask, and Gin.
- [Client quickstarts](${DOCS_URL}/x402/clients/introduction): Axios, Fetch, httpx, requests, and Go net/http.
- [Supported networks](${DOCS_URL}/x402/supported-networks): every chain and asset the facilitator settles.
- [Facilitator pricing](${DOCS_URL}/x402/facilitators/pricing): free tier and per-transaction pricing.
- [Merchant portal](${MERCHANT_PORTAL_URL}): API keys, credits, usage, and auto top-up.
- [x402 Echo Merchant](${ECHO_MERCHANT_URL}): live test merchant that returns HTTP 402.
- [GitHub](${GITHUB_URL}): open-source SDKs, integrations, and examples.

## Site pages

- [Home](${SITE_URL}/): what PayAI is, supported networks, and how to integrate.
- [About PayAI](${SITE_URL}/about): what the company builds and who it is for.
- [Contact](${SITE_URL}/contact): support, sales, security, and legal contacts.
- [Developer portal](${SITE_URL}/developers): how to call the PayAI API.
- [Ecosystem](${SITE_URL}/ecosystem): projects building on PayAI and x402.
- [Blog](${BLOG_URL}): product and ecosystem updates. Every post is listed at ${BLOG_URL}.md and syndicated at ${BLOG_URL}/rss.xml.
- [Privacy policy](${SITE_URL}/privacy-policy)
- [Terms of service](${SITE_URL}/terms-of-service)

## Machine-readable surfaces

- [llms-full.txt](${SITE_URL}/llms-full.txt): this guide plus the full text of every page on this site.
- [Sitemap index](${SITE_URL}/sitemap_index.xml): covers payai.network and docs.
- [MCP manifest](${SITE_URL}/.well-known/mcp.json)
- [AI catalog](${SITE_URL}/.well-known/ai-catalog.json)
- [API catalog (RFC 9727)](${SITE_URL}/.well-known/api-catalog)
- [MCP registry manifest](${SITE_URL}/server.json)

Every content page on this site also serves Markdown. Request it with \`Accept: text/markdown\`, or append \`.md\` to the path (for example ${SITE_URL}/about.md).

## Contact

- Email: ${INFO_EMAIL}
- Discord: ${DISCORD_URL}
- X: ${X_URL}
`;
}

/**
 * llms-full.txt — the llms.txt guide plus the complete Markdown body of every
 * page, so an agent can ingest the whole site in one request.
 */
export function buildLlmsFullTxt(pages: Array<{ path: string; markdown: string }>): string {
  const sections = pages
    .map(({ path, markdown }) => `---\n\n# Source: ${SITE_URL}${path}\n\n${markdown.trim()}\n`)
    .join("\n");

  return `${buildLlmsTxt()}
---

# Full page contents

${sections}`;
}
