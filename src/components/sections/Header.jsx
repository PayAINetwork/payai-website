"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Book } from "lucide-react";

// Infinite scrolling partner logos component
function InfinitePartnerScroll() {
  const partners = [
    { name: "TGMetrics", path: "/new-assets/partners/tgmetrics.svg" },
    {
      name: "Solana Foundation",
      path: "/new-assets/partners/solana foundation.svg",
    },
    { name: "R Logo", path: "/new-assets/partners/r logo.svg" },
    { name: "PIL", path: "/new-assets/partners/pil.svg" },
    { name: "OmniMinds", path: "/new-assets/partners/omniminds.svg" },
    { name: "Eliza OS", path: "/new-assets/partners/eliza os.svg" },
    { name: "Compute", path: "/new-assets/partners/compute.svg" },
    { name: "Comput3", path: "/partners/comput3.svg" },
  ];

  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-scroll">
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 mx-6 md:mx-8 lg:mx-10"
          >
            <Image
              src={partner.path}
              alt={partner.name}
              width={120}
              height={60}
              className="object-contain h-12 md:h-14 lg:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export function Header() {
  return (
    <section
      id="home"
      className="relative py-12 md:py-16 lg:py-24 xl:py-28 overflow-hidden"
    >
      {/* Background image with mobile-optimized positioning */}
      <div className="absolute right-0 top-8 md:top-0 opacity-80 md:opacity-100">
        <Image
          src="/header-image.svg"
          alt="PayAI Hero"
          width={600}
          height={600}
          className="object-contain scale-75 md:scale-100"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left content - Takes 6 columns on large screens */}
          <div className="lg:col-span-6 max-w-xl">
            <h1 className="text-display sm:text-display md:text-6xl font-medium text-[#111729] leading-tight">
              <span className="whitespace-nowrap">Powering Payments for</span>
              <br />
              <span className="whitespace-nowrap">the AI Agent Economy</span>
            </h1>
            <p className="mt-4 md:mt-6 text-body md:text-body-lg text-gray-600 leading-relaxed">
              PayAI enables autonomous agents to transact with each other and
              humans — securely, seamlessly, and 24/7.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-700 text-white px-6 py-3 text-body font-normal rounded-full transition-colors min-h-[44px]"
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                target="_blank"
              >
                <Github className="w-5 h-5 mr-2" />
                Github
              </Link>
              <Link
                className="inline-flex items-center justify-center bg-[#FFFFFF]/70 text-gray-800 px-6 py-3 text-body font-normal border border-gray-200 rounded-full transition-colors hover:bg-[#FFFFFF] min-h-[44px]"
                href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                target="_blank"
              >
                <Book className="w-5 h-5 mr-2" />
                Docs
              </Link>
            </div>
          </div>
        </div>

        {/* Partner logos - Infinite horizontal scroll */}
        <div className="mt-20 md:mt-32 lg:mt-44 text-center">
          <p className="text-caption text-gray-500 mb-6 md:mb-8">
            Partners & Ecosystem
          </p>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-sm w-full max-w-6xl overflow-hidden">
              <InfinitePartnerScroll />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
