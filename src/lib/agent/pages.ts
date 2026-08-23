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
  MCP_URL,
  GITHUB_URL,
  X_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  DISCORD_URL,
  SUPPORT_EMAIL,
  LEGAL_EMAIL,
  SECURITY_EMAIL,
  LEGAL_NAME,
  JURISDICTION,
  PARTNERSHIP_URL,
} from "@/lib/site";
import { FAQ_DATA } from "@/data/faq";
import projects from "@/data/projects.json";

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
- Support: ${SUPPORT_EMAIL}`;

function homeMarkdown(): string {
  const faq = FAQ_DATA.map(
    ({ question, answer }) => `### ${question}\n\n${answer}`,
  ).join("\n\n");

  return `# PayAI — the x402 Facilitator for AI Agents and Apps

Accept agentic payments on every major chain with one integration. Multi-chain micropayments powered by Solana, with no API keys, no accounts, and instant settlement.

## What PayAI does

PayAI is a facilitator for the [x402 payment standard](${DOCS_URL}/x402/introduction). x402 uses the HTTP \`402 Payment Required\` status code to make payment a property of a request: a server answers an unpaid request with \`402\` plus machine-readable payment terms, the client signs a stablecoin payment, and the facilitator verifies and settles it on-chain.

As the facilitator, PayAI takes the blockchain work off both sides. A merchant does not run an RPC node, hold a private key, manage nonces, or reconcile settlements. A buyer does not create an account or hold native gas tokens — PayAI sponsors gas on Solana, so a payer needs only USDC.

- **Pay-per-request pricing.** Charge per request, action, or unit of usage — suited to APIs, AI agents, and real-time services.
- **Instant settlement.** Payments verify and settle in under a second, with no manual reconciliation.
- **Client and agent payments.** The same rail serves human web flows and autonomous agents.
- **x402 standard adoption.** Adopt x402 without handling chain selection, gas, fee logic, or settlement.

Payments range from $0.01 to $1,000,000: microtransactions for AI agents, one-time digital-content sales, and recurring SaaS charges all use the same endpoint.

## Supported networks

PayAI is Solana-first and also settles on Base, Polygon, Avalanche, Arbitrum, Sei, X Layer, and SKALE, on both mainnet and the corresponding testnets. Both x402 v1 short network names (\`base\`, \`solana\`) and x402 v2 CAIP-2 identifiers (\`eip155:8453\`, \`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp\`) are supported.

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

- **x402 Facilitator** — live. Accept payments from $0.01 to $1,000,000 across every supported network.
- **x402 Echo Merchant** — live. Run real x402 transactions against a live merchant for free; test payments are fully refunded and PayAI covers network fees. ${ECHO_MERCHANT_URL}
- **Payment Splitting** — coming soon. Receive payments to one account and distribute to multiple recipients, for marketplaces and multi-party workflows.
- **Token Gateway** — coming soon. Cross-network payments, so buyers can pay from whichever chain they hold funds on.

## Discovery: the PayAI Bazaar

PayAI indexes the services that accept x402 payments. \`GET ${FACILITATOR_URL}/discovery/resources\` returns the live catalog — HTTP endpoints and MCP tools, each with the payment terms needed to call it and, where the seller published them, input and output schemas. \`GET ${FACILITATOR_URL}/discovery/stats\` returns aggregate catalog size, settlement counts, and per-network volume.

## Frequently asked questions

${faq}

${FOOTER}`;
}

function aboutMarkdown(): string {
  return `# About PayAI

PayAI builds payment infrastructure for software that transacts without a human in the loop.

## What we build

PayAI operates a production facilitator for the [x402 protocol](${DOCS_URL}/x402/introduction). x402 turns the long-dormant HTTP \`402 Payment Required\` status code into a working payment handshake: a server answers an unpaid request with \`402\` and machine-readable terms, the client signs a stablecoin payment, and a facilitator verifies and settles it on-chain. The whole exchange is two HTTP round trips, and neither side needs an account with the other.

The facilitator is the part that touches the chain. PayAI verifies signed payment payloads, broadcasts settlements, sponsors gas where the chain allows it, screens for compliance, and returns a structured result — so a merchant integrates payments as middleware rather than as a blockchain project.

## Why this matters

Existing payment rails assume a human: a card to enter, an account to create, a checkout to complete, a chargeback window to wait out. Autonomous software has none of those. It needs to pay for a single API call, immediately, for a fraction of a cent, without onboarding.

That is the gap PayAI fills. An agent that hits a paywalled endpoint can settle in under a second and continue. A service that wants to sell to agents can price per request instead of negotiating contracts.

## How we are different

- **Solana-first, multi-chain in practice.** PayAI settles on Solana, Base, Polygon, Avalanche, Arbitrum, Sei, X Layer, and SKALE. Solana carries the majority of production volume because it is the cheapest and fastest place to settle a sub-cent payment.
- **Gasless for the payer.** On Solana, PayAI sponsors the network fee. A payer holds USDC and nothing else — no native token, no top-up ritual.
- **No accounts on the critical path.** A buyer needs no PayAI relationship to pay a PayAI-backed merchant. An API key is optional, and only affects credit accounting and rate lanes.
- **Open and inspectable.** The SDKs, integrations, and examples are open source at ${GITHUB_URL}, and the facilitator API is fully described at ${SITE_URL}/openapi.json.

## Who it is for

Merchants selling API calls, MCP tools, inference, data, or compute to software buyers. Agent developers whose agents need to pay for things at runtime. Platforms that want usage-based pricing without building settlement infrastructure.

## The company

${LEGAL_NAME} is registered in ${JURISDICTION}. The team works remotely. Reach us at ${SITE_URL}/contact.

${FOOTER}`;
}

function contactMarkdown(): string {
  return `# Contact PayAI

PayAI is operated by ${LEGAL_NAME}, registered in ${JURISDICTION}. We work remotely and answer fastest in Discord.

## Support

Integration help, API questions, and bug reports.

- Email: ${SUPPORT_EMAIL}
- Discord: ${DISCORD_URL} — the fastest route to an engineer
- Documentation: ${DOCS_URL}
- Service health: \`GET ${FACILITATOR_URL}/health\`

Before opening a support request, check the quickstart at ${DOCS_URL}/x402/quickstart and confirm your network is live via \`GET ${FACILITATOR_URL}/supported\`.

## Sales and partnerships

Volume pricing, dedicated throughput, ecosystem listings, and integration partnerships.

- Email: ${SUPPORT_EMAIL}
- Telegram: ${TELEGRAM_URL}
- Partnership enquiry form: ${PARTNERSHIP_URL}
- Ecosystem directory: ${SITE_URL}/ecosystem

## Security

Report a vulnerability privately. Please do not open a public issue.

- Email: ${SECURITY_EMAIL}

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
- Documentation MCP server: ${MCP_URL}

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

For the live, machine-readable catalog of services that currently accept x402 payments — including their payment terms and callable schemas — query \`GET ${FACILITATOR_URL}/discovery/resources\` instead of this page. This page lists ecosystem partners; that endpoint lists everything payable right now.

## Projects

${list}

${FOOTER}`;
}

/** Authored markdown, keyed by pathname (no trailing slash). */
export const AUTHORED_PAGES: Record<string, () => string> = {
  "/": homeMarkdown,
  "/about": aboutMarkdown,
  "/contact": contactMarkdown,
  "/ecosystem": ecosystemMarkdown,
};

/** Pages whose markdown is derived from their rendered HTML at request time. */
export const DERIVED_PAGES = new Set(["/privacy-policy", "/terms-of-service"]);

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
