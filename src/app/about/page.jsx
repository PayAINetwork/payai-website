import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Markdown } from "@/components/content/Markdown";
import { JsonLd } from "@/components/seo/JsonLd";
import { AUTHORED_PAGES } from "@/lib/agent/pages";
import { buildAboutPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

export const metadata = {
  title: "About PayAI",
  description:
    "PayAI builds payment infrastructure for software that transacts without a human in the loop. Learn what we build, why it matters, and who it is for.",
  alternates: {
    canonical: `${SITE_URL}/about`,
    types: { "text/markdown": `${SITE_URL}/about.md` },
  },
};

/**
 * Rendered from the same Markdown that /about.md and `Accept: text/markdown`
 * serve, so the human page and the agent representation cannot drift.
 */
export default function AboutPage() {
  const markdown = AUTHORED_PAGES["/about"]();

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd data={buildAboutPageSchema()} id="ld-about" />

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
