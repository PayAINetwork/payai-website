/**
 * Homepage FAQ content.
 *
 * Single source of truth shared by three consumers that must never drift:
 * the rendered accordion (src/components/sections/FAQ.jsx), the FAQPage
 * JSON-LD (src/lib/schema.js), and the Markdown representation served to
 * agents (src/lib/agent/pages.ts).
 */
export type FaqEntry = { question: string; answer: string };
import { AUTHENTICATION_GUIDANCE, ERROR_GUIDANCE, RECOVERY_GUIDANCE, PRICING_GUIDANCE, DISCOVERY_GUIDANCE, AMOUNT_GUIDANCE } from "@/lib/agent/payment-guidance";

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
      "PayAI supports payment kinds across Solana and EVM networks including Base, Polygon, Avalanche, Arbitrum, Sei, X Layer and SKALE. Mainnet/testnet and scheme availability can differ. Call GET https://facilitator.payai.network/supported for the currently advertised combinations. Sponsored Solana payment flows can cover transaction fees for the payer; this does not remove every setup or service cost.",
  },
  {
    question: "What is the minimum payment amount?",
    answer:
      AMOUNT_GUIDANCE,
  },
  {
    question: "How can developers integrate x402 into their app?",
    answer:
      "Configure compatible x402 middleware to use https://facilitator.payai.network. Merchant and client quickstarts are available at https://docs.payai.network/x402/quickstart. Buyers still need a funded wallet and secure signing; merchants configure payment terms, authentication where required, and result/recovery handling. The facilitator handles supported blockchain verification and settlement operations. Pin and test your SDK version; the core API is described at https://payai.network/openapi.json.",
  },
  {
    question: "Do I need an account or API key to use PayAI?",
    answer:
      AUTHENTICATION_GUIDANCE,
  },
  {
    question: "What does PayAI cost?",
    answer:
      PRICING_GUIDANCE,
  },
  {
    question: "What happens if a payment fails or a settlement times out?",
    answer:
      `${ERROR_GUIDANCE} ${RECOVERY_GUIDANCE}`,
  },
  {
    question: "How do agents discover services that accept x402 payments?",
    answer:
      DISCOVERY_GUIDANCE,
  },
  {
    question: "Is x402 secure?",
    answer:
      "Signed authorizations and scheme-specific validation are important controls, not a blanket security guarantee. Keep merchant private keys server-side, verify the advertised terms and network, and distinguish payment verification from settlement. Preserve receipts and reconcile unresolved operations before issuing a new authorization. Channel schemes have their own deposit, payout and recovery lifecycle; review the relevant integration guide.",
  },
];
