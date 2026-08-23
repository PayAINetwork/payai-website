/**
 * OpenAPI 3.1 description of the public PayAI x402 Facilitator API.
 *
 * Served from https://payai.network/openapi.json so that agents which land on
 * the marketing site can discover and call the real product API without a
 * second discovery hop.
 *
 * The described server is https://facilitator.payai.network. Keep this in sync
 * with apps/api/src/index.ts and apps/api/src/routes/ in the
 * PayAINetwork/payai-x402-facilitator repository — every operation here must
 * exist in production.
 */
import { FACILITATOR_URL, DOCS_URL, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

const PAYMENT_PAYLOAD = {
  type: "object",
  description:
    "A signed x402 payment, produced by an x402 client SDK. The inner `payload` shape is scheme- and chain-specific: EVM `exact` carries an EIP-3009 authorization and signature, Solana `exact` carries a base64 partially-signed transaction.",
  required: ["x402Version", "scheme", "network", "payload"],
  properties: {
    x402Version: {
      type: "integer",
      enum: [1, 2],
      description: "x402 protocol version this payload conforms to.",
    },
    scheme: {
      type: "string",
      description:
        "Payment scheme. `exact` charges a fixed amount; `upto` opens a payment channel that settles up to a ceiling.",
      examples: ["exact", "upto"],
    },
    network: {
      type: "string",
      description:
        "Target network. x402 v1 uses short names (`base`, `solana`); v2 uses CAIP-2 identifiers (`eip155:8453`, `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`).",
      examples: ["base", "eip155:8453", "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"],
    },
    payload: {
      type: "object",
      additionalProperties: true,
      description: "Scheme- and chain-specific signed payment material.",
    },
  },
} as const;

const PAYMENT_REQUIREMENTS = {
  type: "object",
  description:
    "The payment terms a resource server advertises in its HTTP 402 response. The client signs a payment that satisfies these terms.",
  required: ["scheme", "network", "payTo", "asset"],
  properties: {
    scheme: { type: "string", examples: ["exact", "upto"] },
    network: { type: "string", examples: ["base", "eip155:8453"] },
    maxAmountRequired: {
      type: "string",
      description:
        "Maximum chargeable amount in the asset's smallest unit, as a decimal string (USDC has 6 decimals, so `10000` is $0.01).",
      examples: ["10000"],
    },
    amount: {
      type: "string",
      description: "Exact amount in the asset's smallest unit, as a decimal string.",
      examples: ["10000"],
    },
    resource: {
      type: "string",
      format: "uri",
      description: "The URL being paid for.",
    },
    description: { type: "string", description: "Human-readable description of the resource." },
    mimeType: { type: "string", examples: ["application/json"] },
    payTo: {
      type: "string",
      description: "Recipient address on the target network.",
    },
    maxTimeoutSeconds: {
      type: "integer",
      description: "How long the resource server will wait for settlement.",
      examples: [300],
    },
    asset: {
      type: "string",
      description:
        "Token contract address (EVM) or mint address (Solana) of the payment asset. PayAI settles USDC by default.",
      examples: ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"],
    },
    extra: {
      type: "object",
      additionalProperties: true,
      description:
        "Scheme-specific extras, e.g. `feePayer` for Solana gasless settlement or `facilitatorAddress` for `upto` channels.",
    },
  },
} as const;

const VERIFY_SETTLE_REQUEST = {
  type: "object",
  required: ["paymentPayload", "paymentRequirements"],
  properties: {
    x402Version: { type: "integer", enum: [1, 2] },
    paymentPayload: { $ref: "#/components/schemas/PaymentPayload" },
    paymentRequirements: { $ref: "#/components/schemas/PaymentRequirements" },
    serverExtensions: {
      type: "object",
      additionalProperties: true,
      description: "Optional x402 v2 server extensions.",
    },
  },
} as const;

/**
 * Documented failure reasons. Left open (no closed `enum`) because the
 * facilitator adds reasons as new schemes and chains ship; these are the values
 * an integration should handle explicitly today.
 */
const INVALID_REASONS = [
  "invalid_payment_requirements",
  "invalid_payload",
  "invalid_network",
  "invalid_scheme",
  "insufficient_funds",
  "insufficient_balance",
  "missing_fee_payer",
  "missing_facilitator_address",
  "fee_payer_not_managed_by_facilitator",
  "facilitator_address_not_managed_by_facilitator",
  "internal_server_error",
];

const SETTLE_ERROR_REASONS = [
  ...INVALID_REASONS,
  "settlement_pending",
  "duplicate_settlement",
  "upto_channel_capacity_exhausted",
  "service_unavailable",
];

export function buildOpenApiDocument() {
  return {
    openapi: "3.1.0",
    info: {
      title: "PayAI x402 Facilitator API",
      version: "1.0.0",
      summary:
        "Verify and settle x402 micropayments across Solana and EVM networks, and browse the PayAI Bazaar catalog of x402-payable resources.",
      description: [
        "The PayAI Facilitator implements the facilitator role of the [x402 protocol](https://docs.payai.network/x402/introduction): it verifies signed payment payloads and settles them on-chain so a resource server never has to touch a wallet, an RPC node, or a private key.",
        "",
        "**When an agent should call this API**",
        "",
        "- You received an HTTP `402 Payment Required` response with x402 payment requirements and need to know whether a signed payment is valid before serving a resource — call `POST /verify`.",
        "- You have verified a payment and want the funds moved on-chain — call `POST /settle`.",
        "- You need to know which chains, schemes, and x402 versions are live right now — call `GET /supported`.",
        "- You want to discover x402-payable APIs, MCP tools, and services that accept agent payments — call `GET /discovery/resources`.",
        "",
        "**Authentication.** `GET` endpoints are public and unauthenticated. `POST /verify` and `POST /settle` accept an optional `Authorization: Bearer <api-key>` for credit accounting, per-account rate lanes, and analytics attribution; without a key, requests are served on the free tier. Create a key in the [merchant portal](https://merchant.payai.network).",
        "",
        "**Error shape.** Errors are JSON, never HTML. `/verify` failures return `{ isValid: false, invalidReason, invalidMessage }`; `/settle` failures return `{ success: false, errorReason, errorMessage, transaction, network, payer }`. The `x402` client SDKs expect this shape on non-2xx responses too, so an error body is always parseable.",
        "",
        `Full guides: ${DOCS_URL}/x402/quickstart`,
      ].join("\n"),
      termsOfService: `${SITE_URL}/terms-of-service`,
      contact: {
        name: "PayAI Support",
        url: `${SITE_URL}/contact`,
        email: SUPPORT_EMAIL,
      },
      license: { name: "Proprietary", url: `${SITE_URL}/terms-of-service` },
    },
    servers: [
      { url: FACILITATOR_URL, description: "Production facilitator" },
    ],
    externalDocs: {
      description: "PayAI x402 documentation",
      url: `${DOCS_URL}/x402/introduction`,
    },
    tags: [
      {
        name: "Payments",
        description: "Verify and settle x402 payments.",
      },
      {
        name: "Discovery",
        description:
          "Browse the PayAI Bazaar: the catalog of resources that accept x402 payments.",
      },
      { name: "Operations", description: "Service health and capability discovery." },
    ],
    paths: {
      "/health": {
        get: {
          operationId: "getHealth",
          tags: ["Operations"],
          summary: "Liveness probe",
          description:
            "Returns 200 when the facilitator is accepting traffic. Use for uptime monitoring, not for capability discovery — call `getSupportedPaymentKinds` for that.",
          security: [],
          responses: {
            "200": {
              description: "Service is healthy.",
              content: {
                "text/plain": { schema: { type: "string", examples: ["OK"] } },
              },
            },
          },
        },
      },
      "/supported": {
        get: {
          operationId: "getSupportedPaymentKinds",
          tags: ["Operations", "Payments"],
          summary: "List supported payment kinds",
          description:
            "Returns every (x402 version, scheme, network) combination the facilitator can currently verify and settle. Call this before constructing payment requirements so you only advertise networks that are live. Solana `exact` entries include an `extra.feePayer` address that sponsors gas for gasless settlement; `upto` entries include `extra.facilitatorAddress`.",
          security: [],
          responses: {
            "200": {
              description: "The currently supported payment kinds.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/SupportedResponse" },
                },
              },
            },
          },
        },
      },
      "/verify": {
        get: {
          operationId: "describeVerifyEndpoint",
          tags: ["Payments"],
          summary: "Describe the verify endpoint",
          description:
            "Self-describing hint for agents that probe with GET. Returns the endpoint name and the expected request body keys. Verification itself requires POST.",
          security: [],
          responses: {
            "200": {
              description: "Endpoint description.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/EndpointDescription" },
                },
              },
            },
          },
        },
        post: {
          operationId: "verifyPayment",
          tags: ["Payments"],
          summary: "Verify a signed x402 payment",
          description:
            "Checks that a signed payment payload satisfies the supplied payment requirements: correct scheme and network, sufficient balance, valid signature, unexpired authorization, and compliance screening. Verification does not move funds — call `settlePayment` for that. A resource server should verify before doing expensive work, then settle before returning the paid resource.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/VerifyRequest" },
              },
            },
          },
          responses: {
            "200": {
              description:
                "Verification ran. Inspect `isValid` — a valid *and* an invalid payment can both return 200.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/VerifyResponse" },
                },
              },
            },
            "400": {
              description:
                "The request body failed schema validation, or the scheme/network is not supported.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/VerifyResponse" },
                },
              },
            },
            "403": {
              description: "Rejected by a compliance or abuse-prevention hook.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/VerifyResponse" },
                },
              },
            },
            "500": {
              description: "Unexpected facilitator error.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/VerifyResponse" },
                },
              },
            },
          },
        },
      },
      "/settle": {
        get: {
          operationId: "describeSettleEndpoint",
          tags: ["Payments"],
          summary: "Describe the settle endpoint",
          description:
            "Self-describing hint for agents that probe with GET. Returns the endpoint name and the expected request body keys. Settlement itself requires POST.",
          security: [],
          responses: {
            "200": {
              description: "Endpoint description.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/EndpointDescription" },
                },
              },
            },
          },
        },
        post: {
          operationId: "settlePayment",
          tags: ["Payments"],
          summary: "Settle a verified x402 payment on-chain",
          description:
            "Broadcasts the payment on the target network and waits, within a bounded budget, for confirmation. Settlement is idempotent per payment payload: re-submitting the exact same body returns the recorded outcome rather than paying twice.\n\nIf confirmation outruns the response budget the facilitator answers with `errorReason: \"settlement_pending\"` **and** the broadcast `transaction` hash — the payment may still land, so treat this as unresolved, not failed, and re-submit the identical body to poll for the final outcome. A `duplicate_settlement` reason on that poll means the original attempt is still in flight.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/SettleRequest" },
              },
            },
          },
          responses: {
            "200": {
              description:
                "Settlement resolved. Inspect `success`; on failure read `errorReason`.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/SettleResponse" },
                },
              },
            },
            "400": {
              description: "Invalid request body, scheme, or network.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/SettleResponse" },
                },
              },
            },
            "403": {
              description: "Rejected by a compliance or abuse-prevention hook.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/SettleResponse" },
                },
              },
            },
            "429": {
              description:
                "Capacity limit reached for this payment kind — retry with backoff.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/SettleResponse" },
                },
              },
            },
            "500": {
              description: "Unexpected facilitator error.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/SettleResponse" },
                },
              },
            },
            "503": {
              description:
                "A dependency was unavailable and the facilitator failed closed rather than risk an unsafe settlement.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/SettleResponse" },
                },
              },
            },
          },
        },
      },
      "/discovery/resources": {
        get: {
          operationId: "listDiscoveryResources",
          tags: ["Discovery"],
          summary: "List x402-payable resources in the PayAI Bazaar",
          description:
            "Returns the catalog of resources that accept x402 payments, newest first. Each item carries the payment terms (`accepts`) an agent needs to construct a payment, plus optional `inputSchema`/`outputSchema` for resources that describe themselves well enough to be called as a tool. Use this to answer 'what can I buy with an agent payment right now?'.",
          security: [],
          parameters: [
            {
              name: "limit",
              in: "query",
              required: false,
              description: "Items per page. Clamped to 1–1000.",
              schema: { type: "integer", minimum: 1, maximum: 1000, default: 100 },
            },
            {
              name: "offset",
              in: "query",
              required: false,
              description: "Zero-based offset into the catalog.",
              schema: { type: "integer", minimum: 0, default: 0 },
            },
          ],
          responses: {
            "200": {
              description: "A page of catalog items.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/DiscoveryResourcesResponse" },
                },
              },
            },
          },
        },
      },
      "/discovery/stats": {
        get: {
          operationId: "getDiscoveryStats",
          tags: ["Discovery"],
          summary: "Get aggregate PayAI Bazaar statistics",
          description:
            "Returns catalog size, settlement counts over 24h/7d/30d, settlement volume, facilitator uptime, a per-network settlement breakdown, and the busiest merchant hosts. Useful for answering questions about x402 adoption and which networks carry real traffic.",
          security: [],
          responses: {
            "200": {
              description: "Aggregate statistics.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/DiscoveryStatsResponse" },
                },
              },
            },
          },
        },
      },
    },
    components: {
      securitySchemes: {
        bearerApiKey: {
          type: "http",
          scheme: "bearer",
          description:
            "Optional PayAI API key for credit accounting, dedicated rate lanes, and analytics attribution. Create one at https://merchant.payai.network. Omit it to use the free tier.",
        },
      },
      schemas: {
        PaymentPayload: PAYMENT_PAYLOAD,
        PaymentRequirements: PAYMENT_REQUIREMENTS,
        VerifyRequest: VERIFY_SETTLE_REQUEST,
        SettleRequest: VERIFY_SETTLE_REQUEST,
        EndpointDescription: {
          type: "object",
          description: "Self-describing hint returned by GET on a POST-only endpoint.",
          properties: {
            endpoint: { type: "string", examples: ["/verify"] },
            description: { type: "string" },
            body: { type: "object", additionalProperties: true },
          },
        },
        PaymentKind: {
          type: "object",
          description: "One supported (version, scheme, network) combination.",
          required: ["x402Version", "scheme", "network"],
          properties: {
            x402Version: { type: "integer", enum: [1, 2] },
            scheme: { type: "string", examples: ["exact", "upto"] },
            network: { type: "string", examples: ["base", "eip155:8453"] },
            extra: {
              type: "object",
              additionalProperties: true,
              description:
                "Scheme-specific metadata, e.g. `feePayer` (Solana gas sponsor) or `facilitatorAddress` (`upto` channels).",
            },
          },
        },
        SupportedResponse: {
          type: "object",
          required: ["kinds"],
          properties: {
            kinds: {
              type: "array",
              description:
                "Flat list containing both x402 v1 short network names and v2 CAIP-2 identifiers, for backward compatibility.",
              items: { $ref: "#/components/schemas/PaymentKind" },
            },
          },
        },
        VerifyResponse: {
          type: "object",
          description:
            "Result of a verification attempt. Always JSON, including on 4xx and 5xx.",
          required: ["isValid"],
          properties: {
            isValid: {
              type: "boolean",
              description: "True only if the payment satisfies the requirements.",
            },
            invalidReason: {
              type: "string",
              description:
                "Stable machine-readable failure code. Present when `isValid` is false.",
              examples: INVALID_REASONS,
            },
            invalidMessage: {
              type: "string",
              description: "Human-readable detail, including field-level validation errors.",
            },
            payer: {
              type: "string",
              description: "Address that signed the payment, when it could be recovered.",
            },
          },
        },
        SettleResponse: {
          type: "object",
          description:
            "Result of a settlement attempt. Always JSON, including on 4xx and 5xx.",
          required: ["success", "transaction", "network", "payer"],
          properties: {
            success: {
              type: "boolean",
              description: "True only if funds moved and the transaction confirmed.",
            },
            errorReason: {
              type: "string",
              description:
                "Stable machine-readable failure code. `settlement_pending` means the outcome is unresolved, not failed.",
              examples: SETTLE_ERROR_REASONS,
            },
            errorMessage: {
              type: "string",
              description: "Human-readable detail, including how to reconcile a pending settlement.",
            },
            transaction: {
              type: "string",
              description:
                "On-chain transaction hash or signature. Empty string when nothing was broadcast; populated on `settlement_pending` so the payment can be reconciled on-chain.",
            },
            network: {
              type: "string",
              description: "Network the settlement was attempted on.",
            },
            payer: {
              type: "string",
              description: "Address funds were debited from. Empty string when unknown.",
            },
          },
        },
        DiscoveryItem: {
          type: "object",
          description: "One x402-payable resource in the Bazaar catalog.",
          required: ["resource", "accepts", "type", "x402Version", "lastUpdated"],
          properties: {
            resource: {
              type: "string",
              description: "URL of the payable resource. May contain `:param` path placeholders.",
            },
            type: {
              type: "string",
              description: "Transport of the resource.",
              examples: ["http", "mcp"],
            },
            method: {
              type: ["string", "null"],
              description: "HTTP method for `http` resources.",
              examples: ["GET", "POST"],
            },
            toolName: {
              type: ["string", "null"],
              description: "Tool name for `mcp` resources; null for HTTP.",
            },
            x402Version: { type: "integer", enum: [1, 2] },
            accepts: {
              type: "array",
              description: "Payment terms this resource accepts.",
              items: { $ref: "#/components/schemas/PaymentRequirements" },
            },
            description: { type: ["string", "null"] },
            serviceName: { type: ["string", "null"] },
            mimeType: { type: ["string", "null"] },
            tags: { type: ["array", "null"], items: { type: "string" } },
            iconUrl: { type: ["string", "null"], format: "uri" },
            inputSchema: {
              type: ["object", "null"],
              additionalProperties: true,
              description: "Declared input shape, when the seller published one.",
            },
            outputSchema: {
              type: ["object", "null"],
              additionalProperties: true,
              description: "Declared output shape, when the seller published one.",
            },
            metadata: {
              type: "object",
              additionalProperties: true,
              description: "Raw seller-supplied metadata.",
            },
            lastUpdated: {
              type: "string",
              format: "date-time",
              description: "When this catalog entry last changed.",
            },
          },
        },
        Pagination: {
          type: "object",
          required: ["limit", "offset", "total"],
          properties: {
            limit: { type: "integer", description: "Items returned per page." },
            offset: { type: "integer", description: "Offset of this page." },
            total: { type: "integer", description: "Total catalog entries." },
          },
        },
        DiscoveryResourcesResponse: {
          type: "object",
          required: ["items", "pagination", "x402Version"],
          properties: {
            items: {
              type: "array",
              items: { $ref: "#/components/schemas/DiscoveryItem" },
            },
            pagination: { $ref: "#/components/schemas/Pagination" },
            x402Version: { type: "integer", description: "Catalog schema version." },
          },
        },
        DiscoveryStatsResponse: {
          type: "object",
          description: "Aggregate, cached Bazaar and settlement statistics.",
          properties: {
            merchants: {
              type: "object",
              properties: {
                total: { type: "integer" },
                hosts: { type: "integer", description: "Distinct resource hosts." },
                resources: { type: "integer", description: "Distinct resource URLs." },
                catalogEntries: { type: "integer" },
              },
            },
            settlements: {
              type: "object",
              description:
                "Successful settlement counts. `total` is a rounded display string; the windowed counts are exact integers.",
              properties: {
                total: { type: "string", examples: ["100K+"] },
                last24h: { type: "integer" },
                last7d: { type: "integer" },
                last30d: { type: "integer" },
              },
            },
            volume: {
              type: "object",
              properties: {
                totalUsd: {
                  type: "string",
                  description: "Rounded display string for total settled USD volume.",
                  examples: ["$100K+"],
                },
              },
            },
            uptime: {
              type: "object",
              properties: {
                "24h": { type: ["number", "null"], description: "Uptime percentage." },
                avgResponseMs: { type: ["integer", "null"] },
              },
            },
            networks: {
              type: "object",
              description: "Successful settlements keyed by network identifier.",
              additionalProperties: { type: "integer" },
            },
            topMerchants: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  resourceHost: { type: "string" },
                  settlements: { type: "string" },
                  volumeUsd: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
    security: [{ bearerApiKey: [] }, {}],
  };
}
