import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { JoinUs } from "@/components/sections/JoinUs";
import { Footer } from "@/components/layout/Footer";
import { PROJECTS, getProjectBySlug, isIndexable } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}

/** The description cut to meta-description length on a word boundary. */
function summarize(text, max = 155) {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  return `${flat.slice(0, flat.lastIndexOf(" ", max - 1))}…`;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const url = `${SITE_URL}/ecosystem/${slug}`;
  return {
    title: `${project.name} | x402 Ecosystem`,
    description: summarize(project.description),
    alternates: {
      canonical: url,
      types: { "text/markdown": `${url}.md` },
    },
    ...(isIndexable(project) ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function EcosystemProject({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const paragraphs = project.description.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="min-h-screen">
      <Navbar activePage="projects" />

      <main className="bg-white border-b border-[#E4E4E7] flex justify-center items-center">
        <div className="max-w-[100rem] mx-4 sm:mx-6 lg:mx-20 w-full border-x border-[#E4E4E7] px-6 py-12 md:px-8 md:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-[#71717A]">
            <Link href="/ecosystem" className="hover:text-[#4D63F6]">
              Ecosystem
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-[#09090B]">{project.name}</span>
          </nav>

          <div className="mt-8 flex flex-col md:flex-row gap-8">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={96}
              height={96}
              className="object-contain w-24 h-24 rounded-xl shrink-0"
            />

            <div className="flex-1 max-w-3xl">
              <span className="inline-block text-xs font-medium text-[#4D63F6] bg-[#F8F9FF] border border-[#4D63F6]/20 rounded-full px-3 py-1">
                {project.category}
              </span>
              <h1 className="mt-4 text-3xl lg:text-[48px] lg:leading-[56px] font-medium text-[#09090B]">
                {project.name}
              </h1>

              <div className="mt-6 flex flex-col gap-4">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-base lg:text-lg text-[#71717A]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {project.testimonial && (
                <figure className="mt-8 bg-[#F8F9FF] rounded-lg p-6">
                  <blockquote className="text-base italic text-[#09090B]">
                    &ldquo;{project.testimonial}&rdquo;
                  </blockquote>
                  {project.testimonialAuthor && (
                    <figcaption className="mt-3 text-sm text-[#71717A]">
                      &mdash; {project.testimonialAuthor}
                    </figcaption>
                  )}
                </figure>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-4 py-2.5 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg transition-colors hover:bg-[#1D45D8]"
                  >
                    Visit {project.name}
                  </a>
                )}
                {project.twitterUrl && (
                  <a
                    href={project.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-[#E4E4E7] rounded-lg px-4 py-2.5 text-sm font-medium text-[#09090B] shadow-xsmall transition-colors hover:bg-[#F8F9FF] hover:border-[#4D63F6]/30"
                  >
                    View on X
                  </a>
                )}
                <Link
                  href="/ecosystem"
                  className="inline-flex items-center justify-center border border-[#E4E4E7] rounded-lg px-4 py-2.5 text-sm font-medium text-[#09090B] shadow-xsmall transition-colors hover:bg-[#F8F9FF] hover:border-[#4D63F6]/30"
                >
                  All ecosystem projects
                </Link>
              </div>

              <p className="mt-10 text-xs text-[#71717A]">
                Listings are submitted by the projects themselves and do not guarantee current
                integration health or availability.
              </p>
            </div>
          </div>
        </div>
      </main>

      <JoinUs />
      <Footer />
    </div>
  );
}
