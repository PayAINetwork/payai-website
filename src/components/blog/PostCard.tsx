import Image from "next/image";
import Link from "next/link";
import type { GhostPost } from "@/lib/blog";
import { formatPostDate, postTeaser, postUrl } from "@/lib/blog";

/**
 * Post teaser used by the blog index, tag archives, and the related-posts
 * strip. `featured` renders the wide two-column treatment; the default is the
 * grid cell.
 *
 * Deliberately a plain <Link> to a path on this site — these used to point at
 * blog.payai.network with target="_blank", which made every one of them an
 * external link out of the domain they were meant to strengthen.
 */
export function PostCard({
  post,
  featured = false,
  headingLevel: Heading = "h3",
}: {
  post: GhostPost;
  featured?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const excerpt = postTeaser(post);
  const tag = post.primary_tag;

  if (featured) {
    return (
      <Link
        href={postUrl(post.slug)}
        className="group grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 bg-white lg:h-[520px] w-full border border-[#EDEDED] transition-all duration-200 hover:bg-[#F8F9FF] hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="px-4 lg:px-8 py-6 lg:py-10 w-full flex flex-col justify-between gap-8">
          <div>
            {tag && (
              <span className="text-sm lg:text-base text-[#1D45D8] font-medium">
                {tag.name}
              </span>
            )}
            <Heading className="text-2xl lg:text-[32px] lg:leading-[46px] font-medium text-[#09090B] mt-2 lg:mt-3 transition-colors duration-200 group-hover:text-[#1D45D8]">
              {post.title}
            </Heading>
            {excerpt && (
              <p className="text-sm lg:text-base text-[#71717A] mt-3 lg:mt-6 line-clamp-4">
                {excerpt}
              </p>
            )}
          </div>
          <PostByline post={post} />
        </div>
        <div className="p-4 border-t lg:border-t-0 lg:border-l border-[#E4E4E7]">
          <div className="relative w-full h-full min-h-[200px] overflow-hidden">
            {post.feature_image && (
              <Image
                src={post.feature_image}
                alt={post.feature_image_alt || post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={postUrl(post.slug)}
      className="group px-4 lg:px-8 py-6 lg:py-10 w-full flex flex-col justify-between border border-[#EDEDED] gap-8 transition-all duration-200 hover:bg-[#F8F9FF] hover:-translate-y-0.5 hover:shadow-md"
    >
      <div>
        {tag && (
          <span className="text-[#1D45D8] font-medium text-sm">{tag.name}</span>
        )}
        <Heading className="text-xl lg:text-[28px] lg:leading-[40px] font-medium text-[#09090B] mt-2 lg:mt-3 line-clamp-3 transition-colors duration-200 group-hover:text-[#1D45D8]">
          {post.title}
        </Heading>
        {excerpt && (
          <p className="text-sm lg:text-base text-[#71717A] mt-3 lg:mt-6 line-clamp-3">
            {excerpt}
          </p>
        )}
      </div>
      <PostByline post={post} />
    </Link>
  );
}

function PostByline({ post }: { post: GhostPost }) {
  const author = post.primary_author ?? post.authors?.[0];

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 min-w-0">
        {author?.profile_image && (
          <Image
            src={author.profile_image}
            alt={author.name}
            width={26}
            height={26}
            className="w-6 h-6 rounded-full object-cover shrink-0"
          />
        )}
        {author?.name && (
          <span className="text-[13px] lg:text-sm text-[#0A0A0A]/60 truncate">
            {author.name}
          </span>
        )}
      </div>
      {post.published_at && (
        <time
          dateTime={post.published_at}
          className="text-[13px] lg:text-sm text-[#0A0A0A]/60 shrink-0"
        >
          {formatPostDate(post.published_at)}
        </time>
      )}
    </div>
  );
}
