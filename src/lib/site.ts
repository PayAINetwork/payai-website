/**
 * Canonical public URLs and identity for PayAI.
 *
 * Single source of truth for the agent-facing surfaces (llms.txt, OpenAPI,
 * MCP manifests, markdown representations) so they can never drift from each
 * other. Everything here must be a real, publicly reachable resource — these
 * files are read by agents that will follow the links.
 */

/**
 * Values mirror the NEXT_PUBLIC_* environment variables the rest of the site
 * already uses, with the production value as a fallback — these documents are
 * built statically and must never render an empty URL to an agent.
 */
const env = (value: string | undefined, fallback: string) => value?.trim() || fallback;

export const SITE_URL = "https://payai.network";

/** Production x402 facilitator. The public API described by /openapi.json. */
export const FACILITATOR_URL = env(
  process.env.NEXT_PUBLIC_FACILITATOR_URL,
  "https://facilitator.payai.network",
);

export const DOCS_URL = env(
  process.env.NEXT_PUBLIC_DOCS_PAYAI_NETWORK,
  "https://docs.payai.network",
);
export const BLOG_URL = env(
  process.env.NEXT_PUBLIC_BLOG_PAYAI_NETWORK,
  "https://blog.payai.network",
);
export const MERCHANT_PORTAL_URL = "https://merchant.payai.network";
export const ECHO_MERCHANT_URL = env(
  process.env.NEXT_PUBLIC_ECHO_MERCHANT_URL,
  "https://x402.payai.network",
);
export const COMMERCE_CHECKOUT_URL = `${SITE_URL}/x402-commerce-checkout`;

/** Streamable HTTP MCP server for the PayAI documentation corpus. */
export const MCP_URL = `${DOCS_URL}/mcp`;

export const GITHUB_URL = "https://github.com/PayAINetwork";
export const X_URL = env(process.env.NEXT_PUBLIC_X_URL, "https://x.com/PayAINetwork");
export const LINKEDIN_URL = env(
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  "https://www.linkedin.com/company/payai-network/",
);
export const TELEGRAM_URL = env(
  process.env.NEXT_PUBLIC_TELEGRAM_URL,
  "https://t.me/PayAINetwork",
);
export const DISCORD_URL = env(
  process.env.NEXT_PUBLIC_DISCORD_URL,
  "https://discord.gg/eWJRwMpebQ",
);

/** Public intake forms already linked from the site footer. */
export const CAREERS_URL = process.env.NEXT_PUBLIC_CAREERS_URL;
export const SALES_URL = process.env.NEXT_PUBLIC_SALES_URL;
export const PARTNERSHIP_URL = env(
  process.env.NEXT_PUBLIC_PARTNERSHIP_URL,
  "https://forms.gle/qi1eeb8X5Uu56erx6",
);

/*
 * Only two mailboxes exist. Do not add a plausible-looking third — these
 * addresses are published in Organization JSON-LD, security.txt, and the
 * OpenAPI contact block, so an address that does not receive mail sends
 * vulnerability reports and support requests into a void.
 */

/** General enquiries: support, sales, partnerships, and security reports. */
export const INFO_EMAIL = "info@payai.network";

/** Legal and privacy. The address named in the Terms of Service. */
export const LEGAL_EMAIL = "legal@payai.network";

/**
 * Legal entity as stated in the Terms of Service. Kept here so structured data
 * and the contact page cite the same entity the ToS does.
 */
export const LEGAL_NAME = "PayAI Network, LLC";
export const JURISDICTION = "Delaware, United States";
