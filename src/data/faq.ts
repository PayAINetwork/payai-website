/**
 * Homepage FAQ content.
 *
 * Single source of truth shared by three consumers that must never drift:
 * the rendered accordion (src/components/sections/FAQ.jsx), the FAQPage
 * JSON-LD (src/lib/schema.js), and the Markdown representation served to
 * agents (src/lib/agent/pages.ts).
 */
export type FaqEntry = { question: string; answer: string };
import { AUTHENTICATION_GUIDANCE, ERROR_GUIDANCE, RECOVERY_GUIDANCE } from "@/lib/agent/payment-guidance";

export const FAQ_DATA: FaqEntry[] = [
  {
    question: "What is x402?",
    answer:
      "x402 is an open payment standard built on the HTTP 402 Payment Required status code. A server answers an unpaid request with 402 and machine-readable payment terms; the client signs a stablecoin payment and retries; a facilitator verifies and settles it on-chain. Buyer access requirements and merchant facilitator authentication are separate, and depend on the provider and payment scheme.",
  },
  {
    question: "How fast are transactions on x402?",
    answer:
      "Timing depends on the network, payment scheme, confirmation policy and current load; there is no universal sub-second settlement guarantee. Verification does not move funds, and a transaction hash alone does not prove confirmation. A settlement_pending response is unresolved and can have an empty transaction field. For channel schemes, interpret success in the context of the specific operation, not automatically as the final merchant payout.",
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
      AUTHENTICATION_GUIDANCE,
  },
  {
    question: "What does PayAI cost?",
    answer:
      "PayAI has a free tier that covers ordinary integration and testing volume, after which settlement is billed per transaction from a prepaid credit balance rather than as a percentage of the amount moved — a flat per-settlement cost is what makes sub-cent payments viable. Rates vary by network, because the underlying chain fee does. Current rates and free-tier limits are published at https://docs.payai.network/x402/facilitators/pricing, and you can top up credits (or enable automatic top-up) in the merchant portal.",
  },
  {
    question: "What happens if a payment fails or a settlement times out?",
    answer:
      `${ERROR_GUIDANCE} ${RECOVERY_GUIDANCE}`,
  },
  {
    question: "How do agents discover services that accept x402 payments?",
    answer:
      "Query GET https://facilitator.payai.network/discovery/resources. It returns the PayAI Bazaar: a live catalog of HTTP endpoints and MCP tools that accept x402 payments, each with the payment terms an agent needs to construct a payment and, where the seller published them, input and output schemas so the resource can be called as a tool.",
  },
  {
    question: "Is x402 secure?",
    answer:
      "Signed authorizations and scheme-specific validation are important controls, not a blanket security guarantee. Keep merchant private keys server-side, verify the advertised terms and network, and distinguish payment verification from settlement. Preserve receipts and reconcile unresolved operations before issuing a new authorization. Channel schemes have their own deposit, payout and recovery lifecycle; review the relevant integration guide.",
  },
];
