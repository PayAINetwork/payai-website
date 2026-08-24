/**
 * Aggregates sitemaps across PayAI hosts so Google can crawl one entry point.
 *
 * The blog is no longer listed here: it moved from blog.payai.network into
 * /blog on this domain, so its posts are in this site's own sitemap.xml. Docs
 * remain on their own subdomain and still need aggregating.
 *
 * If you add a new subdomain (e.g. status.payai.network), add its sitemap here
 * and verify the URL responds with valid XML before deploying.
 */
export function GET() {
  const sitemaps = [
    "https://payai.network/sitemap.xml",
    "https://docs.payai.network/sitemap.xml",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map((url) => `  <sitemap>\n    <loc>${url}</loc>\n  </sitemap>`).join("\n")}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
