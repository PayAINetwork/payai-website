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
    /*
     * PayAI is a remote company with no public street address, so the
     * PostalAddress carries only the jurisdiction it is registered in. Add
     * streetAddress/postalCode here if a public office address is ever
     * published — AI assistants read this to answer "where are they based".
     */
    address: {
      "@type": "PostalAddress",
      addressRegion: "DE",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@payai.network",
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "support@payai.network",
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: "security@payai.network",
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "legal",
        email: "legal@payai.network",
        url: `${SITE_URL}/privacy-policy`,
        availableLanguage: ["English"],
      },
    ],
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
 * AboutPage schema — marks /about as the canonical description of the
 * organization so assistants can cite it when asked "what is PayAI".
 */
export function buildAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About PayAI",
    url: `${SITE_URL}/about`,
    description:
      "PayAI builds payment infrastructure for software that transacts without a human in the loop.",
    mainEntity: { "@type": "Organization", name: "PayAI", url: SITE_URL },
  };
}

/**
 * ContactPage schema — the page AI assistants check to verify a business is
 * reachable before recommending it.
 */
export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact PayAI",
    url: `${SITE_URL}/contact`,
    description:
      "Support, sales, security, and legal contacts for PayAI.",
    mainEntity: {
      "@type": "Organization",
      name: "PayAI",
      url: SITE_URL,
      email: "support@payai.network",
    },
  };
}

/**
 * TechArticle schema for the developer portal — the page AI assistants cite
 * when asked how to call the PayAI API.
 */
export function buildDeveloperPortalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    name: "PayAI Developer Portal",
    headline: "PayAI Developer Portal — x402 Facilitator API",
    url: `${SITE_URL}/developers`,
    description:
      "Endpoints, authentication, error model, versioning, and quickstarts for the PayAI x402 Facilitator API.",
    author: { "@type": "Organization", name: "PayAI", url: SITE_URL },
    publisher: { "@type": "Organization", name: "PayAI", logo: LOGO_URL },
    about: { "@type": "SoftwareApplication", name: "PayAI x402 Facilitator API" },
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
