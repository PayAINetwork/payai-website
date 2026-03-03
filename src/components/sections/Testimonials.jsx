"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  useShuffledLogos,
  useFeaturedProjects,
} from "@/context/ShuffledLogosContext";

export const Testimonials = () => {
  const shuffledLogos = useShuffledLogos();
  const featured = useFeaturedProjects();

  return (
    <section className="bg-white" id="use-cases">
      <div className="container-payai py-8 lg:pt-20 lg:pb-[60px] flex flex-col items-center">
        <div className="lg:w-[720px] flex flex-col items-center">
          <h2 className="text-2xl lg:text-[36px] text-[#09090B] text-center">
            Ecosystem Spotlight
          </h2>
          <p className="text-sm lg:text-lg text-[#0A0A0A]/60 text-center mt-4">
            Meet the projects and builders shaping the future of AI payments
            with x402.
          </p>
        </div>
      </div>
      <div className="container-payai pb-[60px] flex flex-col items-center">
        {featured.map((project) => (
          <div key={project.name} className="flex flex-col lg:flex-row w-full border border-[#E4E4E7]">
            <div className="p-4 lg:px-8 lg:py-18 lg:w-[360px] lg:border-r lg:border-[#E4E4E7] flex flex-col items-start justify-center">
              <Image
                src={project.logo}
                alt={project.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <h3 className="mt-3 text-lg lg:text-2xl font-medium text-[#09090B]">
                {project.name}
              </h3>
              <span className="mt-1.5 inline-block text-xs font-medium text-[#4D63F6] bg-[#4D63F6]/10 px-2.5 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <div className="px-4 pb-4 lg:px-8 lg:py-10 flex-1 flex flex-col justify-center">
              {project.testimonial ? (
                <>
                  <p className="text-[#09090B] text-base lg:text-2xl font-medium">
                    &ldquo;{project.testimonial}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <svg
                      width="37"
                      height="1"
                      viewBox="0 0 37 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y1="0.5" x2="37" y2="0.5" stroke="#71717A" />
                    </svg>
                    <p className="text-[#71717A] text-sm lg:text-lg">
                      {project.testimonialAuthor}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-[#09090B] text-base lg:text-2xl font-medium">
                    {project.description}
                  </p>
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-[#4D63F6] text-sm lg:text-base font-medium hover:underline"
                    >
                      Visit Website
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
        <Link
          href="/ecosystem"
          className="w-full flex flex-col lg:flex-row group cursor-pointer"
        >
          <div className="py-6 px-9 lg:p-10 lg:w-[360px] flex lg:flex-col items-center lg:items-start gap-4 border border-[#E4E4E7] transition-colors group-hover:bg-[#F8F9FF]">
            <div className="flex items-center -space-x-2">
              {shuffledLogos.map((project) => (
                <Image
                  key={project.name}
                  src={project.logo}
                  alt={project.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="lg:w-[170px] text-sm lg:text-base text-[#0A0A0A]/60 transition-colors group-hover:text-[#1D45D8]">
              Trusted by{" "}
              <span className="font-semibold text-[#0A0A0A] transition-colors group-hover:text-[#1D45D8]">
                1000+ companies
              </span>{" "}
              of all sizes
            </p>
          </div>
          <div className="hidden lg:grid lg:flex-1 lg:grid-cols-5 border border-[#E4E4E7] transition-colors group-hover:bg-[#F8F9FF]">
            {shuffledLogos.map((project) => (
              <div
                key={project.name}
                className="relative w-full flex items-center justify-center min-h-[120px] lg:min-h-[200px]"
              >
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={64}
                  height={64}
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl object-cover"
                />
              </div>
            ))}
          </div>
        </Link>
        <div className="flex justify-center mt-8 lg:mt-16">
          <Link
            className="inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-4 py-2.5 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg transition-colors hover:bg-[#FFFFFF]"
            href="/ecosystem"
          >
            Explore the Ecosystem
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
