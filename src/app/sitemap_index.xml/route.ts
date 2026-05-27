/**
 * Aggregates sitemaps from all PayAI subdomains so Google can crawl one entry
 * point and discover content across marketing, blog, and docs. Helps mitigate
 * the SEO equity fragmentation that comes with hosting on separate subdomains.
 *
 * If you add a new subdomain (e.g. status.payai.network), add its sitemap here
 * and verify the URL responds with valid XML before deploying.
 */
export function GET() {
  const sitemaps = [
    "https://payai.network/sitemap.xml",
    "https://blog.payai.network/sitemap.xml",
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
