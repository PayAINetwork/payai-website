import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Markdown } from "@/components/content/Markdown";
import { JsonLd } from "@/components/seo/JsonLd";
import { AUTHORED_PAGES } from "@/lib/agent/pages";
import { buildContactPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

export const metadata = {
  title: "Contact PayAI",
  description:
    "Reach PayAI support, sales, security, and legal. Email addresses, Discord, Telegram, and the fastest route to an engineer.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
    types: { "text/markdown": `${SITE_URL}/contact.md` },
  },
};

/**
 * Rendered from the same Markdown that /contact.md and `Accept: text/markdown`
 * serve, so the human page and the agent representation cannot drift.
 */
export default function ContactPage() {
  const markdown = AUTHORED_PAGES["/contact"]();

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd data={buildContactPageSchema()} id="ld-contact" />

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
