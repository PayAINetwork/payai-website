import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import {
  TAG_INDEX_MIN_POSTS,
  getPosts,
  getTagsWithCounts,
  type GhostPost,
} from "@/lib/blog";

/**
 * The site's own pages, excluding anything fetched from Ghost.
 *
 * Exported synchronously because `DERIVED_PAGES` in src/lib/agent/pages.ts
 * builds the Markdown allowlist from it, and that list is read by middleware,
 * which cannot await. Blog paths are matched there by prefix instead.
 */
export function staticSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/ecosystem`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/developers`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}

function postEntry(post: GhostPost): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}/blog/${post.slug}`,
    /*
     * Ghost's own updated_at, not the build time. A sitemap that claims every
     * post changed on every deploy teaches crawlers to ignore the field.
     */
    lastModified: new Date(post.updated_at || post.published_at || Date.now()),
    changeFrequency: "monthly",
    priority: 0.7,
  };
}

/**
 * Includes every blog post, which is the point of moving the blog onto this
 * domain: one sitemap, one property, one crawl budget.
 *
 * A Ghost outage must not silently ship a sitemap that drops all 21 posts —
 * that reads to a crawler as mass deletion — so failure throws and fails the
 * build instead.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, tags] = await Promise.all([getPosts(), getTagsWithCounts()]);

  const blogIndex: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/blog`,
    lastModified: new Date(posts[0]?.published_at || Date.now()),
    changeFrequency: "weekly",
    priority: 0.9,
  };

  // Thin tag archives carry noindex, so listing them here would contradict it.
  const tagEntries = tags
    .filter((tag) => tag.count.posts >= TAG_INDEX_MIN_POSTS)
    .map((tag) => ({
      url: `${SITE_URL}/blog/tag/${tag.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

  return [
    ...staticSitemapEntries(),
    blogIndex,
    ...posts.map(postEntry),
    ...tagEntries,
  ];
}
