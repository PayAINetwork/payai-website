/** Shared public guidance; no authentication or payment execution happens here. */
export const AUTHENTICATION_GUIDANCE =
  "Ordinary exact payments can use the available free tier without merchant credentials. Every batch-settlement verification and settlement request requires merchant authentication, including the first request. Send Authorization: Bearer <jwt>, using a short-lived Ed25519 (EdDSA) JWT signed with your merchant API key secret; never send the raw secret as the bearer token. Keep the private key server-side. Public reads need no token; authenticating GET /supported can select an account-specific fee payer. See https://docs.payai.network/x402/facilitators/authentication and https://docs.payai.network/x402/facilitators/pricing.";

export const RECOVERY_GUIDANCE =
  "settlement_pending means the outcome is unresolved, not a payment failure or success. The transaction field can be empty; an empty field is not proof that nothing was broadcast. Preserve the original payment payload, requirements, receipts and any transaction identifier. Reconcile the same operation with backoff, following the selected scheme's recovery rules; do not create a fresh authorization just because a response was lost. duplicate_settlement can indicate an in-flight operation or a replay marker. Recovery records have bounded, scheme-dependent retention, so keep your own evidence and check chain state if the record is unavailable. See https://docs.payai.network/x402/facilitators/capacity-and-limits and the batch recovery guide at https://docs.payai.network/x402/servers/batch-settlement.";

export const ERROR_GUIDANCE =
  "Application verification errors use isValid, invalidReason and invalidMessage; settlement errors use success, errorReason and errorMessage, with transaction, network and payer when available. Edge failures, timeouts and lost responses may not contain this JSON shape. Check status, content type and body together, handle unknown reason codes, and do not infer a settlement verdict from HTTP status alone.";

export const RATE_LIMIT_GUIDANCE =
  "Edge admission limits and account-wide batch limits are distinct. Limiting can return 429 or 503; inspect the body and respect Retry-After when present. Back off rather than assuming a fixed header budget or treating configured limits as measured settlement throughput. See https://docs.payai.network/x402/facilitators/capacity-and-limits.";

export const PRICING_GUIDANCE =
  "PayAI's published facilitator fee is $0.001 per settlement beyond the applicable free allowance. Ordinary exact payments have a current default allowance of up to 1,000 lifetime settlements per receiving wallet, with shared-pool limits and legacy allowances described in the pricing guide. This is not a monthly reset. Batch authentication, channel deposits and token-account setup are separate requirements. The facilitator fee is not the price your API charges its customers. Review current pricing and your account terms at https://docs.payai.network/x402/facilitators/pricing.";

export const DISCOVERY_GUIDANCE =
  "GET https://facilitator.payai.network/discovery/resources returns the Bazaar catalog, including last-recorded payment terms and seller-declared schemas when available. Entries can persist without refresh; a listing is not proof of current availability, successful settlement or service quality. Inspect lastUpdated, then obtain current requirements from the provider before paying. See https://docs.payai.network/x402/facilitators/bazaar.";

export const AMOUNT_GUIDANCE =
  "There is no single advertised payment range that applies to every PayAI scheme and network. Choose a customer price that satisfies the asset's precision, the advertised requirements and the selected scheme's rules. Batch deposit limits are not the price of each API request, and network costs are distinct from facilitator fees. Check current pricing and scheme guidance before choosing an amount.";
