import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Markdown } from "@/components/content/Markdown";
import { JsonLd } from "@/components/seo/JsonLd";
import { AUTHORED_PAGES } from "@/lib/agent/pages";
import { buildDeveloperPortalSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

export const metadata = {
  title: "PayAI Developer Portal — x402 Facilitator API",
  description:
    "Endpoints, authentication, error model, versioning, and quickstarts for the PayAI x402 Facilitator API. Full OpenAPI 3.1 description, MCP server, and llms.txt.",
  alternates: {
    canonical: `${SITE_URL}/developers`,
    types: { "text/markdown": `${SITE_URL}/developers.md` },
  },
};

/**
 * Same-origin developer portal. The endpoint table is generated from the same
 * OpenAPI document served at /openapi.json, so the two cannot drift.
 */
export default function DevelopersPage() {
  const markdown = AUTHORED_PAGES["/developers"]();

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd data={buildDeveloperPortalSchema()} id="ld-developers" />

      <main className="pt-section pb-section">
        <div className="container-payai">
          <div className="mx-auto max-w-3xl">
            <Markdown markdown={markdown} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
