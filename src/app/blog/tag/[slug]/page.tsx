import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { PostCard } from "@/components/blog/PostCard";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";
import {
  TAG_INDEX_MIN_POSTS,
  getPostsByTag,
  getTag,
  getTagsWithCounts,
} from "@/lib/blog";
import { buildBreadcrumbSchema, buildTagPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

// Next requires a literal here; keep it in step with BLOG_REVALIDATE.
export const revalidate = 3600;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const tags = await getTagsWithCounts();
  return tags.map((tag) => ({ slug: tag.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const [tag, posts] = await Promise.all([getTag(slug), getPostsByTag(slug)]);
  if (!tag) return {};

  const description =
    tag.description ||
    `Posts about ${tag.name} from the PayAI Network team — x402, agentic payments, and the machine economy.`;

  return {
    title: `${tag.name} — Blog`,
    description,
    alternates: { canonical: `${SITE_URL}/blog/tag/${tag.slug}` },
    // Thin archives stay out of the index; see TAG_INDEX_MIN_POSTS.
    ...(posts.length < TAG_INDEX_MIN_POSTS
      ? { robots: { index: false, follow: true } }
      : {}),
    openGraph: {
      type: "website",
      title: `${tag.name} — PayAI Blog`,
      description,
      url: `${SITE_URL}/blog/tag/${tag.slug}`,
    },
  };
}

export default async function BlogTagPage({ params }: Params) {
  const { slug } = await params;
  const [tag, posts] = await Promise.all([getTag(slug), getPostsByTag(slug)]);
  if (!tag || posts.length === 0) notFound();

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd data={buildTagPageSchema(tag, posts)} id="ld-tag" />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: tag.name, path: `/blog/tag/${tag.slug}` },
        ])}
        id="ld-tag-breadcrumb"
      />

      <main>
        <header className="container-payai pt-8 lg:pt-14 pb-8 lg:pb-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-[#71717A]">
              <li>
                <Link href="/" className="hover:text-[#1D45D8]">
                  Home
                </Link>
              </li>
              <ChevronRight aria-hidden className="h-3.5 w-3.5" />
              <li>
                <Link href="/blog" className="hover:text-[#1D45D8]">
                  Blog
                </Link>
              </li>
            </ol>
          </nav>

          <div className="max-w-[48rem] pt-8 lg:pt-12">
            <h1 className="text-3xl lg:text-[48px] lg:leading-[60px] font-medium text-[#09090B]">
              {tag.name}
            </h1>
            <p className="mt-4 text-base lg:text-lg text-[#0A0A0A]/60">
              {tag.description ||
                `${posts.length} ${posts.length === 1 ? "post" : "posts"} from the PayAI Network team.`}
            </p>
          </div>
        </header>

        <div className="container-payai pb-12 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 bg-white">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} headingLevel="h2" />
            ))}
          </div>
        </div>

        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  );
}
