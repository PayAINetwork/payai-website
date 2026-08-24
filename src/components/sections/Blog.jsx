import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PostCard } from "@/components/blog/PostCard";
import { getPosts, getPostsByTag, tagUrl } from "@/lib/blog";

/**
 * Blog teasers for the homepage and, in the case-studies variant, /ecosystem.
 *
 * Posts now live at /blog on this domain, so every link here is internal.
 * They used to point at blog.payai.network with target="_blank", which meant
 * the homepage spent its outbound link weight on a different host.
 *
 * Ghost failures degrade to an empty section rather than throwing: a CMS
 * outage must not take down the homepage. The /blog routes make the opposite
 * choice deliberately — there, an empty page would be the bug.
 */
export const Blog = async ({ variant = "all" }) => {
  const isCaseStudies = variant === "case-studies";

  let posts = [];
  try {
    posts = isCaseStudies
      ? await getPostsByTag("case-studies")
      : await getPosts(4);
  } catch (error) {
    console.error("Ghost fetch failed, rendering the blog section empty:", error);
  }

  const [featured, ...others] = posts;

  return (
    <section className="bg-white py-8 lg:py-20" id="blog">
      <div className="w-full flex flex-col items-center mb-12">
        <h2 className="text-2xl lg:text-[36px] text-[#09090B] text-center">
          {isCaseStudies ? "Case Studies" : "Blog"}
        </h2>
        <p className="text-sm lg:text-lg text-[#0A0A0A]/60 text-center mt-3 lg:mt-4">
          {isCaseStudies
            ? "Read case studies about projects in the PayAI ecosystem"
            : "Stay up to date with the latest from PayAI"}
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[#71717A]">
            {isCaseStudies ? "No case studies found" : "No posts found"}
          </p>
        </div>
      ) : (
        <div className="space-y-6 lg:space-y-[60px] w-full">
          {featured && (
            <div className="border-y border-[#EDEDED]">
              <div className="container-payai">
                <PostCard post={featured} featured />
              </div>
            </div>
          )}

          {others.length > 0 && (
            <div className="border-y border-[#E4E4E7]">
              <div className="container-payai grid grid-cols-1 lg:grid-cols-3 border-x border-[#E4E4E7] bg-white w-full">
                {others.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="container-payai flex justify-center mt-8 lg:mt-16">
        <Link
          className="inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-4 py-2.5 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg transition-colors hover:bg-[#FFFFFF]"
          href={isCaseStudies ? tagUrl("case-studies") : "/blog"}
        >
          {isCaseStudies ? "View All Case Studies" : "View All Posts"}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
};
