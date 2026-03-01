import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ghost } from "@/lib/ghost";

const blogBase = (process.env.NEXT_PUBLIC_BLOG_PAYAI_NETWORK || "").replace(
  /\/+$/,
  "",
);

export const Blog = async ({ variant = "all" }) => {
  const isCaseStudies = variant === "case-studies";
  let posts = [];

  if (isCaseStudies) {
    try {
      posts = await ghost.posts.browse({
        limit: "all",
        include: ["authors", "tags"],
        filter: "tag:case-studies",
        order: "published_at desc"
      });
    } catch (error) {
      console.error('Ghost API filter failed, trying fallback:', error);
    }

    if (posts.length === 0) {
      try {
        const allPosts = await ghost.posts.browse({
          limit: "all",
          include: ["authors", "tags"],
          order: "published_at desc"
        });

        posts = allPosts.filter(post =>
          post.tags?.some(tag =>
            tag.slug === "case-studies" ||
            tag.name.toLowerCase() === "case studies"
          )
        );
      } catch (fallbackError) {
        console.error('Ghost API fallback also failed:', fallbackError);
        posts = [];
      }
    }
  } else {
    try {
      posts = await ghost.posts.browse({
        limit: 4,
        include: ["authors", "tags"],
        order: "published_at desc"
      });
    } catch (error) {
      console.error('Ghost API fetch failed:', error);
      posts = [];
    }
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
              <Link
                href={`${blogBase}/${featured.slug}`}
                target="_blank"
                className="container-payai group grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 bg-white lg:h-[520px] w-full cursor-pointer transition-all duration-200 hover:bg-[#F8F9FF] hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="border border-[#EDEDED] px-4 lg:px-8 py-6 lg:py-10 w-full flex flex-col justify-between gap-8">
                  <div>
                    <span className="text-sm lg:text-base text-[#1D45D8] font-medium">
                      {featured.tags?.[0]?.name}
                    </span>
                    <h3 className="text-2xl lg:text-[32px] lg:leading-[46px] font-medium text-[#09090B] mt-2 lg:mt-3 transition-colors duration-200 group-hover:text-[#1D45D8]">
                      {featured.title}
                    </h3>
                    <p className="text-sm lg:text-base text-[#71717A] mt-3 lg:mt-6">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {featured.authors?.[0]?.profile_image && (
                        <Image
                          src={featured.authors[0].profile_image}
                          alt={featured.authors[0].name}
                          width={26}
                          height={26}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      )}
                      <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                        {featured.authors?.[0]?.name}
                      </p>
                    </div>
                    <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                      {featured.published_at
                        ? new Date(featured.published_at).toLocaleDateString()
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="p-4 border lg:border-l border-[#E4E4E7]">
                  <div className="relative w-full h-full overflow-hidden">
                    {featured.feature_image && (
                      <Image
                        src={featured.feature_image}
                        alt={featured.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                </div>
              </Link>
            </div>
          )}

          {others.length > 0 && (
            <div className="border-y border-[#E4E4E7]">
              <div className="container-payai grid grid-cols-1 lg:grid-cols-3 border-x border-[#E4E4E7] bg-white w-full">
                {others.map((post) => (
                  <Link
                    key={post.id}
                    href={`${blogBase}/${post.slug}`}
                    target="_blank"
                    className="group px-4 lg:px-8 py-6 lg:py-10 w-full flex flex-col justify-between border border-[#EDEDED] gap-8 cursor-pointer transition-all duration-200 hover:bg-[#F8F9FF] hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div>
                      <span className="text-[#1D45D8] font-medium">
                        {post.tags?.[0]?.name}
                      </span>
                      <h4 className="text-2xl lg:text-[28px] lg:leading-[40px] font-medium text-[#09090B] mt-2 lg:mt-3 line-clamp-2 transition-colors duration-200 group-hover:text-[#1D45D8]">
                        {post.title}
                      </h4>
                      <p className="text-sm lg:text-base text-[#71717A] mt-3 lg:mt-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                        {post.authors?.[0]?.name}
                      </p>
                      <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                        {post.published_at
                          ? new Date(post.published_at).toLocaleDateString()
                          : ""}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="container-payai flex justify-center mt-8 lg:mt-16">
        <Link
          className="inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-4 py-2.5 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg transition-colors hover:bg-[#FFFFFF]"
          href={isCaseStudies ? `${blogBase}/tag/case-studies` : blogBase || "#"}
          target="_blank"
        >
          {isCaseStudies ? "View All Case Studies" : "View All Posts"}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
};
