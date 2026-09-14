/**
 * Markdown representations of PayAI's public pages.
 *
 * Served under `Accept: text/markdown` content negotiation and at the `.md`
 * path suffix. Authored rather than scraped so the agent-facing copy can be
 * denser and more literal than the marketing page — an agent wants the
 * endpoint, the network list, and the decision criteria, not the hero image.
 *
 * Keep in sync with the rendered pages: the facts here (networks, endpoints,
 * pricing posture) must match what the site and docs actually say.
 */
import {
  SITE_URL,
  FACILITATOR_URL,
  DOCS_URL,
  BLOG_URL,
  MERCHANT_PORTAL_URL,
  ECHO_MERCHANT_URL,
  COMMERCE_CHECKOUT_URL,
  GITHUB_URL,
  X_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  DISCORD_URL,
  INFO_EMAIL,
  LEGAL_EMAIL,
  LEGAL_NAME,
  JURISDICTION,
  PARTNERSHIP_URL,
} from "@/lib/site";
import { FAQ_DATA } from "@/data/faq";
import projects from "@/data/projects.json";
import sitemap from "@/app/sitemap";
import { buildOpenApiDocument } from "@/lib/agent/openapi";
import { AUTHENTICATION_GUIDANCE, ERROR_GUIDANCE, RECOVERY_GUIDANCE, RATE_LIMIT_GUIDANCE, PRICING_GUIDANCE, DISCOVERY_GUIDANCE, AMOUNT_GUIDANCE } from "@/lib/agent/payment-guidance";

type ProjectEntry = {
  name: string;
  description: string;
  websiteUrl?: string;
  category?: string;
};

const FOOTER = `## More from PayAI

- Documentation: ${DOCS_URL}
- OpenAPI description: ${SITE_URL}/openapi.json
- Facilitator API: ${FACILITATOR_URL}
- Agent guide: ${SITE_URL}/llms.txt
- Blog: ${BLOG_URL}
- GitHub: ${GITHUB_URL}
- Support: ${INFO_EMAIL}`;

function homeMarkdown(): string {
  const faq = FAQ_DATA.map(
    ({ question, answer }) => `### ${question}\n\n${answer}`,
  ).join("\n\n");

  return `# PayAI — the x402 Facilitator for AI Agents and Apps

Accept stablecoin payments from agents and apps across supported Solana and EVM networks. Ordinary exact payments can start on the available free tier; batch settlement requires merchant authentication.

## What PayAI does

PayAI is a facilitator for the [x402 payment standard](${DOCS_URL}/x402/introduction). x402 uses the HTTP \`402 Payment Required\` status code to make payment a property of a request: a server answers an unpaid request with \`402\` plus machine-readable payment terms, the client signs a stablecoin payment, and the facilitator verifies and settles it on-chain.

PayAI handles supported blockchain verification and settlement operations. Buyers still need a funded wallet and secure signing; merchants configure payment terms, required authentication and recovery handling. Sponsored Solana flows can cover the payer's transaction fee, but setup and service costs are separate.

- **Pay-per-request pricing.** Charge per request, action, or unit of usage — suited to APIs, AI agents, and real-time services.
- **On-chain settlement.** Timing depends on the network, scheme and load. Inspect the operation's result and reconcile unresolved outcomes.
- **Client and agent payments.** The same rail serves human web flows and autonomous agents.
- **x402 standard adoption.** Use compatible middleware and configure supported networks, payment terms and access rules.

${AMOUNT_GUIDANCE}

${PRICING_GUIDANCE}

## Supported networks

PayAI supports payment kinds across Solana and EVM networks including Base, Polygon, Avalanche, Arbitrum, Sei, X Layer and SKALE. Mainnet/testnet and scheme availability can differ. x402 v1 uses short network names (\`base\`, \`solana\`); v2 uses CAIP-2 identifiers (\`eip155:8453\`, \`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp\`).

For the authoritative live list, call \`GET ${FACILITATOR_URL}/supported\` — it returns every (x402 version, scheme, network) combination the facilitator can currently verify and settle. The documented list is at ${DOCS_URL}/x402/supported-networks.

## Integrate

Point x402 middleware or an x402 client at the facilitator:

\`\`\`
${FACILITATOR_URL}
\`\`\`

- Merchants (accept payments): ${DOCS_URL}/x402/servers/introduction — quickstarts for Express, Hono, Next.js, FastAPI, Flask, and Gin.
- Clients and agents (make payments): ${DOCS_URL}/x402/clients/introduction — quickstarts for Axios, Fetch, httpx, requests, and Go net/http.
- Quickstart: ${DOCS_URL}/x402/quickstart
- API reference: ${SITE_URL}/openapi.json

## Products

- **x402 Facilitator** — live. Verify and settle payment operations supported by the selected scheme and network.
- **x402 Echo Merchant** — live. Exercise the payment flow against a demo that advertises test-payment refunds. Review the selected network, terms and refund behavior before using real funds; start on a testnet. ${ECHO_MERCHANT_URL}
- **x402 checkout for Anthropic commerce agents** — live and open source. Add facilitator-neutral SVM and EVM settlement to an agent scaffolded with Anthropic Commerce Builder, while keeping payment URLs and credentials outside the model. ${COMMERCE_CHECKOUT_URL}
- **Payment Splitting** — coming soon. Receive payments to one account and distribute to multiple recipients, for marketplaces and multi-party workflows.
- **Token Gateway** — coming soon. Cross-network payments, so buyers can pay from whichever chain they hold funds on.

## Discovery: the PayAI Bazaar

${DISCOVERY_GUIDANCE}

\`GET ${FACILITATOR_URL}/discovery/stats\` exposes cached catalog and settlement summaries. Catalog hosts, resource URLs and entries are different counts; none is automatically a count of paying companies or active developers.

## Frequently asked questions

${faq}

${FOOTER}`;
}

function aboutMarkdown(): string {
  return `# About PayAI

PayAI builds payment infrastructure for software that transacts without a human in the loop.

## What we build

PayAI operates a production facilitator for the [x402 protocol](${DOCS_URL}/x402/introduction). A server answers an unpaid request with \`402\` and machine-readable terms, the client signs a stablecoin payment, and a facilitator verifies and settles the selected payment operation. Wallet funding, authentication, channel setup and recovery depend on the integration; the full workflow is not always two HTTP round trips.

The facilitator is the part that touches the chain. PayAI verifies signed payment payloads, broadcasts settlements, sponsors gas where the chain allows it, screens for compliance, and returns a structured result — so a merchant integrates payments as middleware rather than as a blockchain project.

## Why this matters

Agents and applications may need to buy a single API response, inference request or unit of compute at runtime. x402 makes the payment terms machine-readable and links payment to the resource request. Other payment systems can also support automation; the integration and economic tradeoffs differ.

PayAI supports that payment flow so a service can price per request. Confirmation time, fees and operational limits depend on the network and payment scheme; verification alone is not payment settlement.

## How we are different

- **Solana and EVM support.** Check \`GET ${FACILITATOR_URL}/supported\` for the currently advertised network, scheme and protocol-version combinations.
- **Sponsored payment flows.** Supported Solana flows can cover the payer's transaction fee. This does not eliminate every setup or service cost.
- **Buyer and merchant credentials are different.** A buyer can pay without a PayAI merchant account. Ordinary exact payments can use the available free tier; batch settlement requires merchant authentication. A resource provider can impose its own access requirements.
- **Inspectable integration guidance.** SDKs, integrations and examples are available at ${GITHUB_URL}; check each repository's license. Core API operations are described at ${SITE_URL}/openapi.json, with scheme-specific guides in the docs.

## Who it is for

Merchants selling API calls, MCP tools, inference, data, or compute to software buyers. Agent developers whose agents need to pay for things at runtime. Platforms that want usage-based pricing without building settlement infrastructure.

## The company

${LEGAL_NAME} is registered in ${JURISDICTION}. The team works remotely. Reach us at ${SITE_URL}/contact.

${FOOTER}`;
}

function contactMarkdown(): string {
  return `# Contact PayAI

PayAI is operated by ${LEGAL_NAME}, registered in ${JURISDICTION}. The team works remotely; ${INFO_EMAIL} reaches us for anything below.

## Support

Integration help, API questions, and bug reports.

- Email: ${INFO_EMAIL}
- Discord: ${DISCORD_URL} — the community channel, and the quickest place to get eyes on an integration problem
- Documentation: ${DOCS_URL}
- Service health: \`GET ${FACILITATOR_URL}/health\`

Before opening a support request, check the quickstart at ${DOCS_URL}/x402/quickstart and confirm your network is live via \`GET ${FACILITATOR_URL}/supported\`.

## Sales and partnerships

Volume pricing, dedicated throughput, ecosystem listings, and integration partnerships.

- Email: ${INFO_EMAIL}
- Telegram: ${TELEGRAM_URL}
- Partnership enquiry form: ${PARTNERSHIP_URL}
- Ecosystem directory: ${SITE_URL}/ecosystem

## Security

Report a vulnerability privately to ${INFO_EMAIL}. Please do not open a public issue. The machine-readable version of this is at ${SITE_URL}/.well-known/security.txt.

## Legal and privacy

Questions about the terms, privacy practices, or data requests.

- Email: ${LEGAL_EMAIL}
- Privacy policy: ${SITE_URL}/privacy-policy
- Terms of service: ${SITE_URL}/terms-of-service

## Elsewhere

- X: ${X_URL}
- LinkedIn: ${LINKEDIN_URL}
- GitHub: ${GITHUB_URL}
- Telegram: ${TELEGRAM_URL}
- Blog: ${BLOG_URL}
- Merchant portal: ${MERCHANT_PORTAL_URL}
- MCP server: ${SITE_URL}/mcp

${FOOTER}`;
}

function ecosystemMarkdown(): string {
  const list = (projects as ProjectEntry[])
    .map((p) => {
      const url = p.websiteUrl ? ` — ${p.websiteUrl}` : "";
      const category = p.category ? ` _(${p.category})_` : "";
      return `- **${p.name}**${category}${url}\n  ${p.description}`;
    })
    .join("\n");

  return `# PayAI Ecosystem

Projects building on PayAI and the x402 protocol: agents that pay, services that charge per request, and infrastructure that connects them.

This page lists ecosystem projects, not a complete or continuously verified service inventory. ${DISCOVERY_GUIDANCE}

## Projects

${list}

${FOOTER}`;
}


function developersMarkdown(): string {
  const spec = buildOpenApiDocument();

  /*
   * The endpoint table is generated from the OpenAPI document rather than
   * retyped, so the portal cannot drift from the spec it points at.
   */
  const operations = Object.entries(spec.paths).flatMap(([path, item]) =>
    Object.entries(item as Record<string, { operationId?: string; summary?: string }>)
      .filter(([method]) => ["get", "post", "put", "patch", "delete"].includes(method))
      .map(([method, op]) => ({
        method: method.toUpperCase(),
        path,
        operationId: op.operationId ?? "",
        summary: op.summary ?? "",
      })),
  );

  const table = [
    "| Method | Path | Operation | What it does |",
    "| --- | --- | --- | --- |",
    ...operations.map(
      (o) => `| ${o.method} | \`${o.path}\` | \`${o.operationId}\` | ${o.summary} |`,
    ),
  ].join("\n");

  return `# PayAI Developer Portal

Start here to charge for a request, pay for one, or discover payment-enabled resources. Public read endpoints and core payment operations are described at [${SITE_URL}/openapi.json](${SITE_URL}/openapi.json); scheme-specific guides remain authoritative for channel operations.

## Base URL

\`\`\`
${FACILITATOR_URL}
\`\`\`

Configure compatible x402 middleware to use that host. Supported testnets use the same facilitator base URL; select the intended network explicitly. [The Echo Merchant](${ECHO_MERCHANT_URL}) offers demo payment endpoints and advertises test-payment refunds. Start on a testnet and review its terms before using real funds.

## Endpoints

${table}

Core request/response envelopes and example failure reasons are in the [OpenAPI 3.1 description](${SITE_URL}/openapi.json). Consult the selected scheme's guide for its complete lifecycle and validation rules.

## Authentication

${AUTHENTICATION_GUIDANCE}

\`\`\`
Authorization: Bearer <jwt>
\`\`\`

Create merchant credentials at [${MERCHANT_PORTAL_URL}](${MERCHANT_PORTAL_URL}). The API key ID and private key secret are inputs to signing, not a token to paste into an HTTP header.

## Error model

${ERROR_GUIDANCE}

- \`POST /verify\` returns \`{ isValid: false, invalidReason, invalidMessage }\`
- \`POST /settle\` returns \`{ success: false, errorReason, errorMessage, transaction, network, payer }\`

Branch on known \`invalidReason\` / \`errorReason\` values and retain unknown reasons for investigation. The message is for humans and may carry field-level validation detail.

${RECOVERY_GUIDANCE}

## Versioning and deprecation

The facilitator is versioned by the x402 protocol version it speaks, not by a URL path segment. Requests carry \`x402Version\` (1 or 2); both are served from the same endpoints, so you pin a version by what you send.

- **x402 v1** uses short network names — \`base\`, \`solana\`
- **x402 v2** uses CAIP-2 identifiers — \`eip155:8453\`, \`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp\`

Call \`GET ${FACILITATOR_URL}/supported\` to see the currently advertised combinations. This is capability discovery, not a promise of advance deprecation notice. Pin and test your SDK/protocol version and review the relevant scheme guide before changing it.

## Rate limits

${RATE_LIMIT_GUIDANCE}

## Machine-readable surfaces

- [OpenAPI 3.1 description](${SITE_URL}/openapi.json)
- [llms.txt](${SITE_URL}/llms.txt) — when to use PayAI and how to call it
- [llms-full.txt](${SITE_URL}/llms-full.txt) — the whole site as one document
- [MCP server](${SITE_URL}/mcp) — Streamable HTTP, no authentication, searches the PayAI docs corpus. Also at \`/.well-known/mcp\`.
- [MCP manifest](${SITE_URL}/.well-known/mcp.json) and [AI catalog](${SITE_URL}/.well-known/ai-catalog.json)
- [API catalog (RFC 9727)](${SITE_URL}/.well-known/api-catalog)

Every page on this site also serves Markdown — send \`Accept: text/markdown\` or append \`.md\` to the path.

## Quickstarts

Accept payments:

- [Express](${DOCS_URL}/x402/servers/typescript/express) · [Hono](${DOCS_URL}/x402/servers/typescript/hono) · [Next.js](${DOCS_URL}/x402/servers/typescript/nextjs)
- [FastAPI](${DOCS_URL}/x402/servers/python/fastapi) · [Flask](${DOCS_URL}/x402/servers/python/flask)
- [Gin](${DOCS_URL}/x402/servers/go/gin)

Make payments:

- [Axios](${DOCS_URL}/x402/clients/typescript/axios) · [Fetch](${DOCS_URL}/x402/clients/typescript/fetch)
- [httpx](${DOCS_URL}/x402/clients/python/httpx) · [requests](${DOCS_URL}/x402/clients/python/requests)
- [Go net/http](${DOCS_URL}/x402/clients/go/http)

Prefer no SDK? The manual flows spell out the raw HTTP exchange: [TypeScript](${DOCS_URL}/x402/clients/typescript/manual-flow) · [Python](${DOCS_URL}/x402/clients/python/manual-flow).

## Discovery

${DISCOVERY_GUIDANCE}

\`GET ${FACILITATOR_URL}/discovery/stats\` returns cached catalog and settlement summaries. Preserve their definitions and windows; do not treat a catalog count as paying-customer attribution.

${FOOTER}`;
}

/** Authored markdown, keyed by pathname (no trailing slash). */
export const AUTHORED_PAGES: Record<string, () => string> = {
  "/": homeMarkdown,
  "/about": aboutMarkdown,
  "/contact": contactMarkdown,
  "/ecosystem": ecosystemMarkdown,
  "/developers": developersMarkdown,
};

/**
 * Pages whose Markdown is derived from their own rendered HTML at request time.
 *
 * Sourced from the sitemap so a new page picks up a Markdown representation
 * automatically, and so this can never list a page that does not exist. The
 * allowlist matters: deriving Markdown from whatever a self-fetch happens to
 * return means an interstitial or an error page can be served as if it were
 * site content.
 */
export const DERIVED_PAGES: Set<string> = new Set(
  sitemap()
    .map((entry) => new URL(entry.url).pathname.replace(/\/+$/, "") || "/")
    .filter((pathname) => !(pathname in AUTHORED_PAGES)),
);

export function isMarkdownPath(pathname: string): boolean {
  return pathname in AUTHORED_PAGES || DERIVED_PAGES.has(pathname);
}

export function allMarkdownPaths(): string[] {
  return [...Object.keys(AUTHORED_PAGES), ...DERIVED_PAGES];
}

/** Markdown body served for any path that does not exist. */
export function notFoundMarkdown(pathname: string): string {
  return `# 404 — Not Found

No page exists at \`${pathname}\` on ${SITE_URL}.

## Where to look instead

- [Home](${SITE_URL}/) — what PayAI is and how to integrate
- [Agent guide (llms.txt)](${SITE_URL}/llms.txt) — start here if you are an agent
- [Full site text (llms-full.txt)](${SITE_URL}/llms-full.txt)
- [Sitemap index](${SITE_URL}/sitemap_index.xml) — every indexable URL across payai.network, blog, and docs
- [OpenAPI description](${SITE_URL}/openapi.json) — the callable facilitator API
- [Documentation](${DOCS_URL}) — quickstarts and protocol reference
- [Contact](${SITE_URL}/contact)

## Pages on this site

${allMarkdownPaths()
  .sort()
  .map((p) => `- ${SITE_URL}${p === "/" ? "/" : p}`)
  .join("\n")}

If you were looking for an API endpoint, the facilitator API lives on a different host: ${FACILITATOR_URL}. See ${SITE_URL}/openapi.json for its operations.
`;
}
