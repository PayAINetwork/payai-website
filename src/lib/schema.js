/**
 * Centralized JSON-LD schema builders for SEO structured data.
 *
 * These are pure data builders — render them with <JsonLd data={...} />.
 *
 * Keep these in sync with the live homepage copy. When the FAQ in
 * src/components/sections/FAQ.jsx is updated, also update buildFaqSchema.
 */

const SITE_URL = "https://payai.network";
const LOGO_URL = `${SITE_URL}/horizontal-lockup.svg`;

/**
 * Organization schema — emit once on the homepage.
 * Establishes the PayAI brand entity, social profiles, and logo for SERP knowledge panels.
 */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PayAI",
    legalName: "PayAI, Inc.",
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      "PayAI is the x402 payment facilitator for AI agents and apps. One integration, every agentic payment gateway.",
    sameAs: [
      "https://x.com/PayAINetwork",
      "https://www.linkedin.com/company/payai-network/",
      "https://github.com/PayAINetwork",
      "https://t.me/PayAINetwork",
      "https://discord.gg/eWJRwMpebQ",
      "https://blog.payai.network",
    ],
  };
}

/**
 * WebSite schema — enables sitelinks search box in SERPs and clarifies the canonical site.
 */
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PayAI",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "PayAI",
      logo: LOGO_URL,
    },
  };
}

/**
 * FAQPage schema — generated from the homepage FAQ data array.
 * Pass the same array used to render the on-page FAQ so question text and
 * structured-data text stay in sync.
 *
 * @param {Array<{ question: string, answer: string }>} items
 */
export function buildFaqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
