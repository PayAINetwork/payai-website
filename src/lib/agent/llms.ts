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
import { AUTHENTICATION_GUIDANCE, ERROR_GUIDANCE, RECOVERY_GUIDANCE, DISCOVERY_GUIDANCE, PRICING_GUIDANCE } from "@/lib/agent/payment-guidance";

const WHEN_TO_USE = `## When to use PayAI

PayAI is an [x402](${DOCS_URL}/x402/introduction) payment facilitator. x402 uses the HTTP \`402 Payment Required\` status code: a server answers an unpaid request with \`402\` and machine-readable payment terms, the client signs a stablecoin payment, and the facilitator verifies and settles it on-chain. Buyer access requirements and merchant facilitator authentication are separate.

Reach for PayAI when you are doing any of these:

- **Charging for an API, MCP tool, or agent service per request.** Put x402 middleware in front of a route and point it at \`${FACILITATOR_URL}\`. You get paid in USDC per call, with no signup flow for your buyers. Start at ${DOCS_URL}/x402/servers/introduction.
- **Paying for a resource that returned HTTP 402.** Use an x402 client SDK; it reads the payment requirements, signs, and retries. Start at ${DOCS_URL}/x402/clients/introduction.
- **Discovering payment-enabled services.** ${DISCOVERY_GUIDANCE}
- **Settling agent payments on supported networks.** PayAI supports Solana and EVM payment kinds. Sponsored Solana flows can cover the payer's transaction fee; setup and service costs are separate.
- **Checking which chains and schemes are live** before advertising payment terms: \`GET ${FACILITATOR_URL}/supported\`.
- **Testing an x402 integration end to end** against a real merchant that returns 402: ${ECHO_MERCHANT_URL}.

PayAI's facilitator verifies and settles supported stablecoin payment operations. It does not itself provide card acquiring, fiat bank payouts or a subscription scheduler. Human checkout can use x402 too. Channel schemes can involve funded on-chain escrow and a separate payout lifecycle; review their custody and recovery model rather than assuming every operation is an immediate wallet-to-wallet transfer.

${PRICING_GUIDANCE}

## How an agent should call PayAI

1. Read the developer portal at ${SITE_URL}/developers, or the OpenAPI description at ${SITE_URL}/openapi.json for core operations. Use the scheme-specific docs for channel operations.
2. Call \`GET ${FACILITATOR_URL}/supported\` to pick a live network and scheme.
3. Call \`POST ${FACILITATOR_URL}/verify\` to check a signed payment, then \`POST ${FACILITATOR_URL}/settle\` to move funds.
4. ${ERROR_GUIDANCE}

${AUTHENTICATION_GUIDANCE}

An agent can also buy a key without an account: \`POST ${MERCHANT_PORTAL_URL}/api/v1/keys/vend?amount=1\` returns HTTP 402 with x402 payment terms for USDC on Solana, Base, Polygon, Avalanche, Arbitrum One, or X Layer, or PAYAI on Solana at 10% off; all networks are mainnet only, and $1 buys 1,000 credits. Paying those terms returns the API key secret exactly once plus the credits, and the paying wallet is the account; pay again from the same wallet to top up and receive a fresh key. \`GET ${MERCHANT_PORTAL_URL}/api/v1/keys/vend\` returns the machine-readable offer. Recover a key with a wallet signature at ${MERCHANT_PORTAL_URL}/api/v1/keys/recover or an email code at ${MERCHANT_PORTAL_URL}/api/v1/keys/recover/email.

${RECOVERY_GUIDANCE}`;

export function buildLlmsTxt(): string {
  return `# PayAI

> PayAI is an x402 payment facilitator for AI agents and apps. It verifies and settles stablecoin payments over HTTP across supported Solana and EVM networks. Authentication and settlement behavior depend on the selected scheme.

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
- [Agent API keys over x402](${MERCHANT_PORTAL_URL}/api/v1/keys/vend): buy a facilitator key and credits with a USDC payment, no account needed.
- [Agent API key vending guide](${DOCS_URL}/x402/facilitators/agent-api-keys): buy, top up, and recover facilitator API keys as an agent.
- [x402 Echo Merchant](${ECHO_MERCHANT_URL}): live test merchant that returns HTTP 402.
- [GitHub](${GITHUB_URL}): open-source SDKs, integrations, and examples.

## Site pages

- [Home](${SITE_URL}/): what PayAI is, supported networks, and how to integrate.
- [About PayAI](${SITE_URL}/about): what the company builds and who it is for.
- [Contact](${SITE_URL}/contact): support, sales, security, and legal contacts.
- [Developer portal](${SITE_URL}/developers): how to call the PayAI API.
- [Ecosystem](${SITE_URL}/ecosystem): projects building on PayAI and x402.
- [Blog](${BLOG_URL}): product and ecosystem updates.
- [Privacy policy](${SITE_URL}/privacy-policy)
- [Terms of service](${SITE_URL}/terms-of-service)

## Machine-readable surfaces

- [llms-full.txt](${SITE_URL}/llms-full.txt): this guide plus the full text of every page on this site.
- [Sitemap index](${SITE_URL}/sitemap_index.xml): covers payai.network, blog, and docs.
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
