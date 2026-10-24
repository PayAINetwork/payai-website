/** Shared public guidance; no authentication or payment execution happens here. */
export const AUTHENTICATION_GUIDANCE =
  "Authentication is optional for ordinary exact payments and for batch settlement on the public lanes: Solana's shared lane, and Base when you run your own receiver authorizer. Use a merchant API key for paid usage beyond the 1,000 free credits, account attribution, or an assigned enterprise lane. If you send a credential it must be valid; an invalid, expired or revoked token returns 401 instead of falling back to anonymous access. Send Authorization: Bearer <jwt>, using a short-lived Ed25519 (EdDSA) JWT signed with your merchant API key secret; never send the raw secret as the bearer token. Keep the private key server-side. Public reads need no token; authenticating GET /supported can select an account-specific fee payer. See https://docs.payai.network/x402/facilitators/authentication and https://docs.payai.network/x402/facilitators/pricing.";

/** Plain-language answer for the homepage FAQ. Must agree with AUTHENTICATION_GUIDANCE. */
export const AUTHENTICATION_FAQ =
  "No. You can start without an account or API key. Exact payments and batch settlement on Solana and Base work without credentials, and you start with 1,000 free credits. Sign up at https://merchant.payai.network for an API key when you need paid usage beyond the free credits, usage tracked to your account, or an enterprise lane. See https://docs.payai.network/x402/facilitators/authentication.";

export const RECOVERY_GUIDANCE =
  "settlement_pending means the outcome is unresolved, not a payment failure or success. The transaction field can be empty; an empty field is not proof that nothing was broadcast. Preserve the original payment payload, requirements, receipts and any transaction identifier. Reconcile the same operation with backoff, following the selected scheme's recovery rules; do not create a fresh authorization just because a response was lost. duplicate_settlement can indicate an in-flight operation or a replay marker. Recovery records have bounded, scheme-dependent retention, so keep your own evidence and check chain state if the record is unavailable. See https://docs.payai.network/x402/facilitators/capacity-and-limits and the batch recovery guide at https://docs.payai.network/x402/servers/batch-settlement.";

export const ERROR_GUIDANCE =
  "Application verification errors use isValid, invalidReason and invalidMessage; settlement errors use success, errorReason and errorMessage, with transaction, network and payer when available. Edge failures, timeouts and lost responses may not contain this JSON shape. Check status, content type and body together, handle unknown reason codes, and do not infer a settlement verdict from HTTP status alone.";

export const RATE_LIMIT_GUIDANCE =
  "Edge admission limits and account-wide batch limits are distinct. Limiting can return 429 or 503; inspect the body and respect Retry-After when present. Back off rather than assuming a fixed header budget or treating configured limits as measured settlement throughput. See https://docs.payai.network/x402/facilitators/capacity-and-limits.";

export const PRICING_GUIDANCE =
  "PayAI's facilitator fee is per settlement, never a percentage of the amount moved. You start with 1,000 free credits, counted per receiving wallet. After that, $1 buys 1,000 credits ($0.001 per credit). Each settlement costs the network's on-chain gas plus 30%, paid in credits and refreshed daily from what the facilitator actually pays (usually a fraction of a cent per payment; testnets are free). Beyond the free credits, use an API key with purchased credits. Channel deposits and token-account setup are separate from the facilitator fee, which is not the price your API charges its customers. The live rate table, including any announced change and its effective time, is at https://facilitator.payai.network/pricing; details and account terms at https://docs.payai.network/x402/facilitators/pricing.";

/** Plain-language answer for the homepage FAQ. Must agree with PRICING_GUIDANCE. */
export const PRICING_FAQ =
  "You start with 1,000 free credits. After that, $1 buys 1,000 credits. Each payment PayAI settles costs its network's rate in credits, usually a fraction of a cent. Rates refresh daily, testnets are free, and PayAI never takes a percentage of the payment amount. See live rates at https://facilitator.payai.network/pricing.";

export const DISCOVERY_GUIDANCE =
  "GET https://facilitator.payai.network/discovery/resources returns the Bazaar catalog, including last-recorded payment terms and seller-declared schemas when available. Entries can persist without refresh; a listing is not proof of current availability, successful settlement or service quality. Inspect lastUpdated, then obtain current requirements from the provider before paying. See https://docs.payai.network/x402/facilitators/bazaar.";

export const AMOUNT_GUIDANCE =
  "There is no single advertised payment range that applies to every PayAI scheme and network. Choose a customer price that satisfies the asset's precision, the advertised requirements and the selected scheme's rules. Batch deposit limits are not the price of each API request, and network costs are distinct from facilitator fees. Check current pricing and scheme guidance before choosing an amount.";
