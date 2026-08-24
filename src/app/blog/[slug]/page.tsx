import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { PostCard } from "@/components/blog/PostCard";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";
import {
  extractInjectedJsonLd,
  formatPostDate,
  getPost,
  getPostSlugs,
  getRelatedPosts,
  postExcerpt,
  postMetaDescription,
  renderPostHtml,
  tagUrl,
} from "@/lib/blog";
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

// Next requires a literal here; keep it in step with BLOG_REVALIDATE.
export const revalidate = 3600;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  const description = postMetaDescription(post) || undefined;
  const image = post.og_image || post.feature_image || undefined;

  return {
    title: post.meta_title || post.title,
    description,
    alternates: {
      /*
       * Ghost's own canonical_url wins when an author set one — that field
       * exists precisely to point at an original published elsewhere, and
       * overriding it would claim someone else's content.
       */
      canonical: post.canonical_url || url,
      types: { "text/markdown": `${url}.md` },
    },
    openGraph: {
      type: "article",
      url,
      title: post.og_title || post.meta_title || post.title,
      description: post.og_description || description,
      publishedTime: post.published_at ?? undefined,
      modifiedTime: post.updated_at ?? undefined,
      authors: post.authors?.map((author) => author.name),
      tags: post.tags?.map((tag) => tag.name),
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.twitter_title || post.title,
      description: post.twitter_description || description,
      ...(post.twitter_image || image
        ? { images: [post.twitter_image || image!] }
        : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post);
  const author = post.primary_author ?? post.authors?.[0];
  const body = renderPostHtml(post.html);
  const injected = extractInjectedJsonLd(post);

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd data={buildBlogPostingSchema(post)} id="ld-post" />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
        id="ld-post-breadcrumb"
      />
      {injected.map((node, index) => (
        <JsonLd key={index} data={node} id={`ld-post-injected-${index}`} />
      ))}

      <main>
        <article>
          <header className="container-payai pt-8 lg:pt-14">
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

            <div className="mx-auto max-w-[48rem] pt-8 lg:pt-12">
              {post.primary_tag && (
                <Link
                  href={tagUrl(post.primary_tag.slug)}
                  className="text-sm lg:text-base font-medium text-[#1D45D8] hover:underline"
                >
                  {post.primary_tag.name}
                </Link>
              )}
              <h1 className="mt-3 text-3xl lg:text-[44px] lg:leading-[56px] font-medium text-[#09090B]">
                {post.title}
              </h1>
              {postExcerpt(post) && (
                <p className="mt-4 lg:mt-6 text-base lg:text-xl text-[#0A0A0A]/60">
                  {postExcerpt(post)}
                </p>
              )}

              <div className="mt-6 lg:mt-8 flex flex-wrap items-center gap-3 text-sm text-[#0A0A0A]/60">
                {author?.profile_image && (
                  <Image
                    src={author.profile_image}
                    alt={author.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                )}
                {author?.name && (
                  <span className="text-[#09090B]">{author.name}</span>
                )}
                {post.published_at && (
                  <>
                    <span aria-hidden>·</span>
                    <time dateTime={post.published_at}>
                      {formatPostDate(post.published_at)}
                    </time>
                  </>
                )}
                {post.reading_time && (
                  <>
                    <span aria-hidden>·</span>
                    <span>{post.reading_time} min read</span>
                  </>
                )}
              </div>
            </div>
          </header>

          {post.feature_image && (
            <figure className="container-payai mt-8 lg:mt-12">
              <div className="relative mx-auto aspect-[16/9] w-full max-w-[56rem] overflow-hidden rounded-xl border border-[#EDEDED]">
                <Image
                  src={post.feature_image}
                  alt={post.feature_image_alt || post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                  priority
                />
              </div>
              {post.feature_image_caption && (
                <figcaption
                  className="mx-auto mt-3 max-w-[56rem] text-center text-sm text-[#71717A]"
                  // Ghost stores captions as HTML so links inside them survive.
                  dangerouslySetInnerHTML={{ __html: post.feature_image_caption }}
                />
              )}
            </figure>
          )}

          <div className="container-payai py-10 lg:py-16">
            <div
              className="blog-prose mx-auto max-w-[48rem]"
              dangerouslySetInnerHTML={{ __html: body }}
            />

            {post.tags && post.tags.length > 0 && (
              <div className="mx-auto mt-12 max-w-[48rem] border-t border-[#EDEDED] pt-8">
                <h2 className="text-sm font-medium text-[#71717A]">Topics</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li key={tag.id}>
                      <Link
                        href={tagUrl(tag.slug)}
                        className="inline-block rounded-full border border-[#E4E4E7] px-3 py-1.5 text-sm text-[#09090B] transition-colors hover:border-[#1D45D8] hover:text-[#1D45D8]"
                      >
                        {tag.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/*
              An internal link into the product from every post. These pages are
              where the inbound links land; the whole point of moving the blog
              onto this domain is that they can now pass weight to /developers.
            */}
            <aside className="mx-auto mt-10 max-w-[48rem] rounded-xl border border-[#EDEDED] bg-[#F8F9FF] px-6 py-8">
              <h2 className="text-xl lg:text-2xl font-medium text-[#09090B]">
                Start accepting agentic payments
              </h2>
              <p className="mt-2 text-sm lg:text-base text-[#71717A]">
                One integration for x402 across Solana, Base, Polygon, Arbitrum,
                Avalanche, and Sei. No API keys, no accounts, instant settlement.
              </p>
              <Link
                href="/developers"
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] px-4 py-2.5 text-sm font-medium text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"
              >
                Read the developer guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </aside>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-[#EDEDED] py-12 lg:py-20">
            <div className="container-payai">
              <h2 className="text-2xl lg:text-[32px] font-medium text-[#09090B]">
                Keep reading
              </h2>
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 bg-white">
                {related.map((item) => (
                  <PostCard key={item.id} post={item} />
                ))}
              </div>
            </div>
          </section>
        )}

        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  );
}
