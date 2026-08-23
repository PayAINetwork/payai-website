/**
 * Homepage FAQ content.
 *
 * Single source of truth shared by three consumers that must never drift:
 * the rendered accordion (src/components/sections/FAQ.jsx), the FAQPage
 * JSON-LD (src/lib/schema.js), and the Markdown representation served to
 * agents (src/lib/agent/pages.ts).
 */
export type FaqEntry = { question: string; answer: string };

export const FAQ_DATA: FaqEntry[] = [
  {
    question: "What is x402?",
    answer:
      "x402 is an open payment standard built on the HTTP 402 Payment Required status code. A server answers an unpaid request with 402 and machine-readable payment terms; the client signs a stablecoin payment and retries; a facilitator verifies and settles it on-chain. It lets AI agents, apps, and platforms send and receive micropayments instantly across multiple blockchains, with no accounts, API keys, or checkout flow.",
  },
  {
    question: "How fast are transactions on x402?",
    answer:
      "Payments are verified and settled in under a second on PayAI's supported networks, which is what makes x402 usable for per-request pricing. Settlement is confirmed on-chain rather than promised, so a merchant can serve the paid resource immediately after PayAI returns success. If a settlement outruns its response budget, PayAI returns the broadcast transaction hash with a settlement_pending status so the payment can be reconciled instead of silently lost.",
  },
  {
    question: "Which chains does x402 support?",
    answer:
      "PayAI settles on Solana, Base, Polygon, Avalanche, Arbitrum, Sei, X Layer, and SKALE, across both mainnet and testnets. Solana carries most production volume because it is the cheapest and fastest place to settle a sub-cent payment, and PayAI sponsors the network fee there so payers need only USDC. Call GET https://facilitator.payai.network/supported for the authoritative live list.",
  },
  {
    question: "What is the minimum payment amount?",
    answer:
      "There is no protocol minimum. PayAI settles amounts from $0.01 to $1,000,000 through the same endpoint, so you can charge a fraction of a cent per API call or thousands of dollars for a one-time purchase. In practice the floor is set by the network fee on your chosen chain, which is why Solana is the default for high-frequency micropayments.",
  },
  {
    question: "How can developers integrate x402 into their app?",
    answer:
      "Point x402 middleware or an x402 client at https://facilitator.payai.network. Merchants add a few lines to an existing route — quickstarts exist for Express, Hono, Next.js, FastAPI, Flask, and Gin. Clients and agents use an x402-aware HTTP client such as Axios, Fetch, httpx, requests, or Go net/http, which reads the 402 response, signs, and retries automatically. You never manage wallets, RPC nodes, gas, or settlement logic. The full API is described at https://payai.network/openapi.json.",
  },
  {
    question: "Do I need an account or API key to use PayAI?",
    answer:
      "No. Verification and settlement work without any PayAI relationship, and buyers never sign up to pay a PayAI-backed merchant. An API key is optional and only affects credit accounting, dedicated throughput lanes, and usage analytics. You can create one in the merchant portal at https://merchant.payai.network when you want those, and keep using the free tier until then.",
  },
  {
    question: "How do agents discover services that accept x402 payments?",
    answer:
      "Query GET https://facilitator.payai.network/discovery/resources. It returns the PayAI Bazaar: a live catalog of HTTP endpoints and MCP tools that accept x402 payments, each with the payment terms an agent needs to construct a payment and, where the seller published them, input and output schemas so the resource can be called as a tool.",
  },
  {
    question: "Is x402 secure?",
    answer:
      "Payments are cryptographically signed by the payer and settled on-chain, so every transaction is verifiable and tamper-resistant, and a facilitator can never move more than the payer authorized. PayAI verifies the signature, the amount, the network, and the payer's balance before settling, screens transactions for compliance, and fails closed rather than settling when a dependency is unavailable. Settlement is idempotent per payment, so a retried request cannot double-charge.",
  },
];
