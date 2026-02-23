import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ghost } from "@/lib/ghost";

const blogBase = (process.env.NEXT_PUBLIC_BLOG_PAYAI_NETWORK || "").replace(
  /\/+$/,
  "",
);

export const Blog = async ({ showPrimary = true }) => {
  const posts = await ghost.posts.browse({
    limit: 'all',
    include: ["authors", "tags"],
    filter: "tag:case-studies",
    order: "published_at DESC",
  });

  const caseStudies = posts.length > 0
    ? posts
    : (await ghost.posts.browse({
      limit: 'all',
      include: ["authors", "tags"],
    })).filter(post => post.tags.some(tag => tag.name.toLowerCase() === "case-studies" || tag.slug === "case-studies"));

  // const [featured, ...others] = posts;
  const [featured, ...others] = caseStudies;

  return (
    <section className="bg-white py-8 lg:py-20" id="blog">
      <div className="container-payai flex flex-col items-center">
        <div className="container-payai py-8 lg:pt-0 lg:pb-[60px] flex flex-col items-center">
          <div className="lg:w-[720px] flex flex-col items-center">
            <h2 className="text-2xl lg:text-[36px] text-[#09090B] text-center">
              Case Studies
            </h2>
            <p className="text-sm lg:text-lg text-[#0A0A0A]/60 text-center mt-3 lg:mt-4">
              Read case studies about projects built with PayAI.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6 lg:space-y-[60px]">
        {featured && showPrimary && (
          <div className="border-y border-[#EDEDED]">
            <div className="container-payai grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 border-x border-[#E4E4E7] bg-white lg:h-[520px] w-full">
              <div className="border border-[#EDEDED]   px-4 lg:px-8 py-6 lg:py-10 w-full flex flex-col justify-between gap-8">
                <div>
                  <span className="text-sm lg:text-base text-[#1D45D8] font-medium">
                    {featured.tags?.[0]?.name}
                  </span>
                  <Link target="_blank" href={`${blogBase}/${featured.slug}`}>
                    <h3 className="text-2xl lg:text-[32px] lg:leading-[46px] font-medium text-[#09090B] mt-2 lg:mt-3">
                      {featured.title}
                    </h3>
                  </Link>
                  <p className="text-sm lg:text-base text-[#71717A] mt-3 lg:mt-6">
                    {featured.excerpt}
                  </p>
                  <Link target="_blank" href={`${blogBase}/${featured.slug}`}>
                    <p className="text-sm lg:text-base text-[#1D45D8] mt-3 lg:mt-6">
                      Read More
                    </p>
                  </Link>
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
                <div className="relative w-full h-full">
                  {featured.feature_image && (
                    <Image
                      src={featured.feature_image}
                      alt={featured.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className={others.length > 0 ? "border-y border-[#E4E4E7]" : "hidden"}
        >
          <div className="container-payai grid grid-cols-1 lg:grid-cols-3 border-x border-[#E4E4E7] bg-white lg:h-[360px] w-full">
            {others.map((post) => (
              <div
                key={post.id}
                className="px-4 lg:px-8 py-6 lg:py-10 w-full flex flex-col justify-between border border-[#EDEDED] gap-8"
              >
                <div>
                  <span className="text-[#1D45D8] font-medium">
                    {post.tags?.[0]?.name}
                  </span>
                  <Link target="_blank" href={`${blogBase}/${post.slug}`}>
                    <h4 className="text-2xl lg:text-[28px] lg:leading-[40px] font-medium text-[#09090B] mt-2 lg:mt-3 line-clamp-2">
                      {post.title}
                    </h4>
                  </Link>
                  <p className="text-sm lg:text-base text-[#71717A] mt-3 lg:mt-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link target="_blank" href={`${blogBase}/${post.slug}`}>
                    <p className="text-sm lg:text-base text-[#1D45D8] mt-3 lg:mt-6">
                      Read More
                    </p>
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                    {post.authors?.[0]?.name}
                  </p>
                  <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                    {featured.published_at
                      ? new Date(featured.published_at).toLocaleDateString()
                      : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-payai flex justify-center mt-8 lg:mt-16">
        <Link
          className="inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-4 py-2.5 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg transition-colors hover:bg-[#FFFFFF]"
          href={blogBase || "#"}
          target="_blank"
        >
          View All Case Studies
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
};
