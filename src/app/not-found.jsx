import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL, DOCS_URL, FACILITATOR_URL } from "@/lib/site";

export const metadata = {
  title: "404 — Page Not Found",
  description:
    "This page does not exist on payai.network. Find the PayAI documentation, OpenAPI description, agent guide, and sitemap here.",
  robots: { index: false, follow: true },
};

/**
 * Agent-friendly 404.
 *
 * Returns a real HTTP 404 with a short, literal recovery list — the sitemap,
 * llms.txt, the OpenAPI description, and the docs — so a crawler or agent that
 * lands on a dead URL can re-orient in one hop instead of guessing. The same
 * paths, requested with `Accept: text/markdown`, return a Markdown 404 body.
 */
const DESTINATIONS = [
  {
    href: "/",
    label: "Home",
    detail: "What PayAI is, supported networks, and how to integrate.",
  },
  {
    href: "/llms.txt",
    label: "/llms.txt",
    detail: "Agent guide: when to use PayAI and how to call it. Start here if you are an agent.",
  },
  {
    href: "/openapi.json",
    label: "/openapi.json",
    detail: "OpenAPI 3.1 description of the PayAI x402 Facilitator API.",
  },
  {
    href: "/sitemap_index.xml",
    label: "/sitemap_index.xml",
    detail: "Every indexable URL across payai.network, the blog, and the docs.",
  },
  {
    href: DOCS_URL,
    label: "docs.payai.network",
    detail: "Quickstarts, protocol reference, and supported networks.",
  },
  {
    href: "/ecosystem",
    label: "Ecosystem",
    detail: "Projects building on PayAI and x402.",
  },
  {
    href: "/contact",
    label: "Contact",
    detail: "Support, sales, security, and legal contacts.",
  },
];

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-section pb-section">
        <div className="container-payai">
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-gray-500">404</p>
            <h1 className="text-heading md:text-display font-semibold text-midnight mt-2 mb-4">
              Page not found
            </h1>
            <p className="text-body-lg text-gray-600">
              This URL does not exist on payai.network. Nothing here has moved —
              the page was never published, or the link was mistyped.
            </p>

            <h2 className="text-subheading font-semibold text-midnight mt-10 mb-4">
              Where to look instead
            </h2>
            <ul className="space-y-4">
              {DESTINATIONS.map(({ href, label, detail }) => (
                <li key={href}>
                  {href.startsWith("http") ? (
                    <a
                      href={href}
                      className="text-body font-medium text-midnight underline"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="text-body font-medium text-midnight underline"
                    >
                      {label}
                    </Link>
                  )}
                  <p className="text-body text-gray-600 mt-1">{detail}</p>
                </li>
              ))}
            </ul>

            <h2 className="text-subheading font-semibold text-midnight mt-10 mb-4">
              Looking for the API?
            </h2>
            <p className="text-body text-gray-600">
              The PayAI x402 Facilitator API is served from a different host:{" "}
              <a href={FACILITATOR_URL} className="underline text-midnight">
                {FACILITATOR_URL}
              </a>
              . Its operations are documented at{" "}
              <Link href="/openapi.json" className="underline text-midnight">
                {SITE_URL}/openapi.json
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
