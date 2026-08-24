/**
 * Data layer for the blog, backed by the Ghost Content API.
 *
 * Ghost stays the authoring CMS; this site renders the posts. Everything is
 * fetched through the native `fetch` so Next can dedupe within a render pass
 * and revalidate on its own schedule — the `@tryghost/content-api` SDK uses
 * axios internally and is invisible to both.
 *
 * The Content API key is a read-only public credential. Ghost designs it to be
 * shipped to browsers, which is why it lives in a NEXT_PUBLIC_ variable.
 */

import { htmlToMarkdown } from "@/lib/agent/htmlToMarkdown";

const GHOST_URL = (
  process.env.NEXT_PUBLIC_GHOST_URL || "https://payai.ghost.io"
).replace(/\/+$/, "");

const GHOST_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_KEY ?? "";

/** Public path prefix. The blog lives in a subdirectory, not on a subdomain. */
export const BLOG_BASE = "/blog";

/** Posts are re-read hourly, matching the other CMS-backed pages on the site. */
export const BLOG_REVALIDATE = 3600;

/** The host Ghost still writes into absolute links inside post bodies. */
const LEGACY_BLOG_HOST = "blog.payai.network";

export type GhostAuthor = {
  id: string;
  name: string;
  slug: string;
  profile_image: string | null;
  bio: string | null;
  website: string | null;
  twitter: string | null;
};

export type GhostTag = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  visibility: string;
};

export type GhostPost = {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string | null;
  excerpt: string | null;
  custom_excerpt: string | null;
  feature_image: string | null;
  feature_image_alt: string | null;
  feature_image_caption: string | null;
  published_at: string | null;
  updated_at: string | null;
  reading_time: number | null;
  featured: boolean;
  meta_title: string | null;
  meta_description: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  twitter_image: string | null;
  canonical_url: string | null;
  codeinjection_head: string | null;
  authors?: GhostAuthor[];
  primary_author?: GhostAuthor | null;
  tags?: GhostTag[];
  primary_tag?: GhostTag | null;
};

/**
 * Thrown when Ghost is unreachable or errors, as opposed to answering "no such
 * post". The distinction matters: a transport failure must never be rendered
 * as a 404, or an outage would deindex live posts.
 */
export class GhostUnavailableError extends Error {}

async function contentApi<T>(
  resource: string,
  params: Record<string, string>,
): Promise<T> {
  if (!GHOST_KEY) {
    throw new GhostUnavailableError(
      "NEXT_PUBLIC_GHOST_CONTENT_KEY is not set — cannot read the blog.",
    );
  }

  const search = new URLSearchParams({ key: GHOST_KEY, ...params });
  const url = `${GHOST_URL}/ghost/api/content/${resource}/?${search}`;

  let response: Response;
  try {
    response = await fetch(url, { next: { revalidate: BLOG_REVALIDATE } });
  } catch (cause) {
    throw new GhostUnavailableError(`Ghost request failed: ${resource}`, { cause });
  }

  if (!response.ok) {
    throw new GhostUnavailableError(
      `Ghost responded ${response.status} for ${resource}`,
    );
  }

  return (await response.json()) as T;
}

const POST_INCLUDES = { include: "authors,tags", formats: "html" };

/**
 * Everything a teaser needs and nothing more.
 *
 * Listing views render a title, excerpt, image, and byline, but a default
 * Ghost query also returns each post's full rendered body. Those bodies are
 * ~9KB apiece and get serialized into the RSC payload of every page that shows
 * a card, so the homepage was shipping four complete articles to render four
 * summaries. Only the post page asks for `html`.
 */
const CARD_FIELDS = [
  "id",
  "uuid",
  "title",
  "slug",
  "excerpt",
  "custom_excerpt",
  "feature_image",
  "feature_image_alt",
  "published_at",
  "updated_at",
  "reading_time",
  "featured",
].join(",");

const CARD_QUERY = { include: "authors,tags", fields: CARD_FIELDS };

export async function getPosts(limit: number | "all" = "all"): Promise<GhostPost[]> {
  const data = await contentApi<{ posts: GhostPost[] }>("posts", {
    ...CARD_QUERY,
    limit: String(limit),
    order: "published_at desc",
  });
  return data.posts ?? [];
}

/** Posts with their rendered bodies. Only the feed needs this. */
export async function getPostsWithContent(): Promise<GhostPost[]> {
  const data = await contentApi<{ posts: GhostPost[] }>("posts", {
    ...POST_INCLUDES,
    limit: "all",
    order: "published_at desc",
  });
  return data.posts ?? [];
}

/** Returns null when Ghost is reachable and has no post with this slug. */
export async function getPost(slug: string): Promise<GhostPost | null> {
  const data = await contentApi<{ posts: GhostPost[] }>("posts", {
    ...POST_INCLUDES,
    limit: "1",
    filter: `slug:${slug}`,
  });
  return data.posts?.[0] ?? null;
}

export async function getPostSlugs(): Promise<string[]> {
  const data = await contentApi<{ posts: Array<{ slug: string }> }>("posts", {
    limit: "all",
    fields: "slug",
  });
  return (data.posts ?? []).map((post) => post.slug);
}

export async function getPostsByTag(tagSlug: string): Promise<GhostPost[]> {
  const data = await contentApi<{ posts: GhostPost[] }>("posts", {
    ...CARD_QUERY,
    limit: "all",
    filter: `tag:${tagSlug}`,
    order: "published_at desc",
  });
  return data.posts ?? [];
}

export async function getTag(tagSlug: string): Promise<GhostTag | null> {
  const data = await contentApi<{ tags: GhostTag[] }>("tags", {
    limit: "1",
    filter: `slug:${tagSlug}`,
  });
  return data.tags?.[0] ?? null;
}

/**
 * Public tags that actually carry posts. `include=count.posts` is what makes
 * the count available; without it every tag looks equally substantial.
 */
export async function getTagsWithCounts(): Promise<
  Array<GhostTag & { count: { posts: number } }>
> {
  const data = await contentApi<{
    tags: Array<GhostTag & { count?: { posts: number } }>;
  }>("tags", {
    limit: "all",
    include: "count.posts",
    filter: "visibility:public",
  });

  return (data.tags ?? [])
    .map((tag) => ({ ...tag, count: { posts: tag.count?.posts ?? 0 } }))
    .filter((tag) => tag.count.posts > 0);
}

/**
 * Posts sharing the current post's primary tag, most recent first. Falls back
 * to the newest posts so the slot is never empty on a single-tag post.
 */
export async function getRelatedPosts(
  post: GhostPost,
  limit = 3,
): Promise<GhostPost[]> {
  const exclude = (candidates: GhostPost[]) =>
    candidates.filter((candidate) => candidate.id !== post.id).slice(0, limit);

  if (post.primary_tag) {
    const sameTag = exclude(await getPostsByTag(post.primary_tag.slug));
    if (sameTag.length >= limit) return sameTag;

    const recent = exclude(await getPosts(limit + 4));
    const seen = new Set(sameTag.map((candidate) => candidate.id));
    return [...sameTag, ...recent.filter((c) => !seen.has(c.id))].slice(0, limit);
  }

  return exclude(await getPosts(limit + 1));
}

/**
 * Rewrites the absolute subdomain links Ghost stores in post bodies into paths
 * on this site.
 *
 * Posts cross-link each other heavily — 58 such links across 21 posts — and
 * every one of them would otherwise take a redirect hop back out to the old
 * host and in again. Rewriting them keeps the link internal and direct.
 *
 * Ghost-hosted assets under /content/ are deliberately left alone: they are
 * served from storage.ghost.io and are not ours to reroute.
 */
export function rewriteGhostHtml(html: string | null): string {
  if (!html) return "";

  /*
   * Ghost's outbound link tagging stamps ?ref=<site host> onto external links,
   * derived from the configured site URL at render time. That value is about to
   * become payai.ghost.io when the custom domain is released, which would be
   * wrong in a new way — these clicks come from payai.network/blog. Normalising
   * it here keeps the attribution accurate and stable no matter what Ghost's
   * own site URL is set to.
   */
  const withNormalisedRefs = html.replace(
    new RegExp(`([?&]ref=)(${LEGACY_BLOG_HOST}|payai\\.ghost\\.io)\\b`, "g"),
    (_match, prefix: string) => `${prefix}payai.network`,
  );

  return withNormalisedRefs.replace(
    new RegExp(`https?://${LEGACY_BLOG_HOST.replace(/\./g, "\\.")}(/[^"'\\s)]*)?`, "g"),
    (match, path: string | undefined) => {
      const pathname = path ?? "/";
      if (pathname.startsWith("/content/")) return match;
      const trimmed = pathname.replace(/\/+$/, "");
      return trimmed === "" ? BLOG_BASE : `${BLOG_BASE}${trimmed}`;
    },
  );
}

/**
 * JSON-LD blocks authored in a post's Ghost code injection, minus the types
 * this site already generates.
 *
 * One post carries a hand-written FAQPage worth keeping; another carries an
 * Article block that predates this migration, still points at the old host,
 * and is strictly worse than the BlogPosting built from Ghost's own fields.
 * Filtering by type keeps the first and drops the second without per-post
 * special cases. Only JSON-LD is carried over — never arbitrary markup.
 */
const GENERATED_SCHEMA_TYPES = new Set([
  "Article",
  "BlogPosting",
  "NewsArticle",
  "Organization",
  "WebSite",
  "WebPage",
  "BreadcrumbList",
]);

export function extractInjectedJsonLd(post: GhostPost): unknown[] {
  const head = post.codeinjection_head;
  if (!head) return [];

  const blocks = [
    ...head.matchAll(
      /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];

  const kept: unknown[] = [];
  for (const [, body] of blocks) {
    let parsed: unknown;
    try {
      parsed = JSON.parse(rewriteGhostHtml(body.trim()));
    } catch {
      // A malformed block is dropped rather than emitted as broken markup.
      continue;
    }

    for (const node of Array.isArray(parsed) ? parsed : [parsed]) {
      const type = (node as { "@type"?: unknown })?.["@type"];
      if (typeof type === "string" && GENERATED_SCHEMA_TYPES.has(type)) continue;
      kept.push(node);
    }
  }

  return kept;
}

/** Canonical public URL for a post on this site. */
export function postUrl(slug: string): string {
  return `${BLOG_BASE}/${slug}`;
}

export function tagUrl(slug: string): string {
  return `${BLOG_BASE}/tag/${slug}`;
}

/** Cuts at a word boundary so a summary never ends mid-word. */
function truncateAtWord(value: string, limit: number): string {
  const text = value.trim().replace(/\s+/g, " ");
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > limit * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:—-]$/, "")}…`;
}

/**
 * The summary an author actually wrote, or nothing.
 *
 * Ghost synthesises `excerpt` by hard-cutting the first 500 characters of the
 * body, which ends mid-word. That is fine as a fallback teaser but wrong as a
 * standfirst under a headline, so this returns only the deliberate version.
 */
export function postExcerpt(post: GhostPost): string {
  return (post.custom_excerpt || "").trim();
}

/** Card and feed summary: the authored excerpt, else a tidy cut of the body. */
export function postTeaser(post: GhostPost): string {
  const authored = postExcerpt(post);
  if (authored) return authored;
  return post.excerpt ? truncateAtWord(post.excerpt, 200) : "";
}

/** Meta description: search snippets are cut around 155 characters. */
export function postMetaDescription(post: GhostPost): string {
  const authored = (post.meta_description || post.custom_excerpt || "").trim();
  if (authored) return truncateAtWord(authored, 155);
  return post.excerpt ? truncateAtWord(post.excerpt, 155) : "";
}

export function formatPostDate(value: string | null): string {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Minimum posts for a tag archive to be indexable.
 *
 * Ghost has 18 public tags across 21 posts, so most archives would be one or
 * two entries deep. Thin archives are the classic way a migration like this
 * dilutes a site instead of strengthening it, so they render for humans and
 * carry noindex. The sitemap uses the same threshold.
 */
export const TAG_INDEX_MIN_POSTS = 3;

/**
 * Prepares a post body for rendering: internal links rewritten, and tables
 * wrapped so they can scroll inside their own box.
 *
 * Ghost emits bare <table> elements and these posts lean on them heavily —
 * 157 cells across 21 posts — which is enough to push the whole page into
 * horizontal scroll on a phone. The wrapper is styled by `.blog-prose
 * .table-wrapper` in globals.css.
 *
 * Kept separate from `rewriteGhostHtml` because that function also runs over
 * JSON-LD and feed content, where wrapping markup would make no sense.
 */
export function renderPostHtml(html: string | null): string {
  return rewriteGhostHtml(html).replace(
    /<table[\s>][\s\S]*?<\/table>/g,
    (table) => `<div class="table-wrapper">${table}</div>`,
  );
}

/**
 * Markdown representation of a blog path, for `Accept: text/markdown` and the
 * `.md` suffix.
 *
 * Built from Ghost's own HTML rather than by re-fetching the rendered page:
 * the post body is already the exact content an agent wants, without the
 * navbar, related-posts strip, and newsletter embed a self-fetch would drag
 * in. Returns null when the path does not resolve, so the caller can answer a
 * real 404 instead of a page-shaped placeholder.
 */
export async function blogMarkdown(
  pathname: string,
  siteUrl: string,
): Promise<string | null> {
  const listing = (heading: string, intro: string, posts: GhostPost[]) =>
    [
      `# ${heading}`,
      "",
      intro,
      "",
      ...posts.map((post) => {
        const excerpt = postTeaser(post);
        return `- [${post.title}](${siteUrl}${postUrl(post.slug)})${
          excerpt ? ` — ${excerpt}` : ""
        }`;
      }),
    ].join("\n");

  if (pathname === "/blog") {
    const posts = await getPosts();
    return listing(
      "PayAI Blog",
      "Insights and updates from the x402 ecosystem and PayAI Network.",
      posts,
    );
  }

  const tagMatch = pathname.match(/^\/blog\/tag\/([^/]+)$/);
  if (tagMatch) {
    const [, tagSlug] = tagMatch;
    const [tag, posts] = await Promise.all([
      getTag(tagSlug),
      getPostsByTag(tagSlug),
    ]);
    if (!tag || posts.length === 0) return null;
    return listing(
      `${tag.name} — PayAI Blog`,
      tag.description || `Posts tagged ${tag.name}.`,
      posts,
    );
  }

  const postMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (!postMatch) return null;

  const post = await getPost(postMatch[1]);
  if (!post) return null;

  const author = post.primary_author ?? post.authors?.[0];
  const meta = [
    author?.name ? `Author: ${author.name}` : null,
    post.published_at ? `Published: ${formatPostDate(post.published_at)}` : null,
    post.tags?.length
      ? `Topics: ${post.tags.map((tag) => tag.name).join(", ")}`
      : null,
  ].filter(Boolean);

  return [
    `# ${post.title}`,
    postExcerpt(post),
    meta.join(" · "),
    htmlToMarkdown(rewriteGhostHtml(post.html)),
  ]
    .filter(Boolean)
    .join("\n\n");
}
