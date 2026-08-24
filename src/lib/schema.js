/**
 * Centralized JSON-LD schema builders for SEO structured data.
 *
 * These are pure data builders — render them with <JsonLd data={...} />.
 *
 * Keep these in sync with the live homepage copy. When the FAQ in
 * src/components/sections/FAQ.jsx is updated, also update buildFaqSchema.
 */

const SITE_URL = "https://payai.network";
/** Legal entity as named in the Terms of Service. */
const LEGAL_NAME = "PayAI Network, LLC";
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
    legalName: LEGAL_NAME,
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
        email: "info@payai.network",
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@payai.network",
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
      email: "info@payai.network",
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

/**
 * Blog schema for the blog index — names the collection so assistants can tell
 * the archive apart from an individual post.
 */
export function buildBlogSchema(posts) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog`,
    name: "PayAI Blog",
    url: `${SITE_URL}/blog`,
    description:
      "Insights and updates from the x402 ecosystem and PayAI Network — agentic payments, facilitator engineering, and the machine economy.",
    publisher: {
      "@type": "Organization",
      name: "PayAI",
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.published_at,
    })),
  };
}

/**
 * BlogPosting schema for a single post.
 *
 * Built from Ghost's own fields rather than hand-authored in the post's code
 * injection, so dates and authorship cannot drift from what is published.
 * `dateModified` matters here: it is how a crawler knows an updated post is
 * worth recrawling.
 */
export function buildBlogPostingSchema(post) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const authors = post.authors?.length
    ? post.authors
    : [post.primary_author].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    url,
    /*
     * Authored summaries only. Ghost's synthesised `excerpt` is a hard 500-character
     * cut of the body that ends mid-word, which is not something to publish as a
     * description in structured data.
     */
    ...(post.meta_description || post.custom_excerpt
      ? { description: post.meta_description || post.custom_excerpt }
      : {}),
    ...(post.feature_image ? { image: [post.feature_image] } : {}),
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    author: authors.length
      ? authors.map((author) => ({
          "@type": "Person",
          name: author.name,
          ...(author.website ? { url: author.website } : {}),
        }))
      : [{ "@type": "Organization", name: "PayAI", url: SITE_URL }],
    publisher: {
      "@type": "Organization",
      name: "PayAI",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    ...(post.tags?.length
      ? { keywords: post.tags.map((tag) => tag.name).join(", ") }
      : {}),
    ...(post.reading_time
      ? { timeRequired: `PT${post.reading_time}M` }
      : {}),
    isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog` },
  };
}

/**
 * BreadcrumbList — tells search engines where a post sits in the hierarchy,
 * which is the point of moving the blog into a subdirectory in the first place.
 *
 * @param {Array<{ name: string, path: string }>} trail
 */
export function buildBreadcrumbSchema(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
}

/**
 * CollectionPage schema for a tag archive.
 */
export function buildTagPageSchema(tag, posts) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${tag.name} — PayAI Blog`,
    url: `${SITE_URL}/blog/tag/${tag.slug}`,
    ...(tag.description ? { description: tag.description } : {}),
    isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };
}
