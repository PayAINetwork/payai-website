import {
  getPostsWithContent,
  postTeaser,
  rewriteGhostHtml,
} from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

/**
 * RSS feed for the blog.
 *
 * Replaces the Ghost-generated feed that used to live at
 * blog.payai.network/rss/. Existing subscribers are redirected here at the
 * edge, so this has to keep working for as long as that redirect does.
 */
// Next requires a literal here; keep it in step with BLOG_REVALIDATE.
export const revalidate = 3600;

const FEED_URL = `${SITE_URL}/blog/rss.xml`;

/** CDATA is not nestable — the only sequence that can break out is "]]>". */
function cdata(value: string): string {
  return `<![CDATA[${value.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const posts = await getPostsWithContent();
  const updated = posts[0]?.published_at ?? new Date().toISOString();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const author = post.primary_author ?? post.authors?.[0];

      return `    <item>
      <title>${cdata(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${new Date(post.published_at ?? Date.now()).toUTCString()}</pubDate>
${author ? `      <dc:creator>${cdata(author.name)}</dc:creator>\n` : ""}${(post.tags ?? [])
        .map((tag) => `      <category>${cdata(tag.name)}</category>`)
        .join("\n")}
      <description>${cdata(postTeaser(post))}</description>
      <content:encoded>${cdata(rewriteGhostHtml(post.html))}</content:encoded>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>PayAI Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Insights and updates from the x402 ecosystem and PayAI Network.</description>
    <language>en</language>
    <lastBuildDate>${new Date(updated).toUTCString()}</lastBuildDate>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
