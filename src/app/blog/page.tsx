import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { PostCard } from "@/components/blog/PostCard";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";
import { getPosts, getTagsWithCounts, tagUrl } from "@/lib/blog";
import { buildBlogSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

// Next requires a literal here; keep it in step with BLOG_REVALIDATE.
export const revalidate = 3600;

const DESCRIPTION =
  "Insights and updates from the x402 ecosystem and PayAI Network — agentic payments, facilitator engineering, and the machine economy.";

export const metadata = {
  title: "Blog",
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/blog`,
    types: {
      "application/rss+xml": `${SITE_URL}/blog/rss.xml`,
      "text/markdown": `${SITE_URL}/blog.md`,
    },
  },
  openGraph: {
    type: "website",
    title: "PayAI Blog",
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
  },
};

export default async function BlogIndexPage() {
  const [posts, tags] = await Promise.all([getPosts(), getTagsWithCounts()]);

  // Ghost's own `featured` flag decides the hero; newest wins when none is set.
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post.id !== featured?.id);

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd data={buildBlogSchema(posts)} id="ld-blog" />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
        id="ld-blog-breadcrumb"
      />

      <main>
        <header className="container-payai pt-12 lg:pt-20 pb-8 lg:pb-12">
          <div className="max-w-[48rem]">
            <h1 className="text-3xl lg:text-[48px] lg:leading-[60px] font-medium text-[#09090B]">
              Blog
            </h1>
            <p className="text-base lg:text-lg text-[#0A0A0A]/60 mt-4">
              {DESCRIPTION}
            </p>
          </div>

          {tags.length > 0 && (
            <nav aria-label="Browse by topic" className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link
                  key={tag.id}
                  href={tagUrl(tag.slug)}
                  className="rounded-full border border-[#E4E4E7] px-3 py-1.5 text-sm text-[#09090B] transition-colors hover:border-[#1D45D8] hover:text-[#1D45D8]"
                >
                  {tag.name}
                </Link>
              ))}
            </nav>
          )}
        </header>

        {posts.length === 0 ? (
          <p className="container-payai py-20 text-center text-[#71717A]">
            No posts found.
          </p>
        ) : (
          <div className="space-y-6 lg:space-y-[60px] pb-12 lg:pb-20">
            {featured && (
              <div className="container-payai">
                <PostCard post={featured} featured headingLevel="h2" />
              </div>
            )}

            {rest.length > 0 && (
              <div className="container-payai">
                <h2 className="sr-only">All posts</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 bg-white">
                  {rest.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  );
}
