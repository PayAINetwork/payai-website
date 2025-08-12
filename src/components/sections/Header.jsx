"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Book } from "lucide-react";

// Infinite scrolling partner logos component
function InfinitePartnerScroll() {
  const partners = [
    { name: "TGMetrics", path: "/new-assets/partners/tgmetrics.svg" },
    { name: "Solana Foundation", path: "/new-assets/partners/solana-foundation.svg" },
    { name: "Raydium", path: "/new-assets/partners/r-logo.svg" },
    { name: "Pumpfun", path: "/new-assets/partners/pil.svg" },
    { name: "OmniMinds", path: "/new-assets/partners/omniminds.svg" },
    { name: "Eliza OS", path: "/new-assets/partners/eliza-os.svg" },
    { name: "Compute", path: "/new-assets/partners/compute.svg" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="track">
        <div className="group">
          {partners.map((p) => (
            <div key={`a-${p.name}`} className="slot">
              <Image
                src={p.path}
                alt={p.name}
                fill
                className="logo"
                sizes="(min-width: 1024px) 160px, (min-width: 768px) 140px, 120px"
                priority={false}
              />
            </div>
          ))}
        </div>
        <div className="group" aria-hidden="true">
          {partners.map((p) => (
            <div key={`b-${p.name}`} className="slot">
              <Image
                src={p.path}
                alt={p.name}
                fill
                className="logo"
                sizes="(min-width: 1024px) 160px, (min-width: 768px) 140px, 120px"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .track {
          display: flex;
          align-items: center;             /* vertical centering */
          width: max-content;
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
        .track:hover { animation-play-state: paused; }

        .group {
          display: flex;
          gap: 2rem;
          padding-right: 2rem;
        }

        /* Each logo gets a consistent slot */
        .slot {
          position: relative;
          flex: 0 0 auto;
          height: 3rem;                    /* h-12: 48px */
          width: 7.5rem;                   /* ~120px on mobile */
        }
        @media (min-width: 768px) {
          .slot { height: 3.5rem; width: 8.75rem; }  /* md:h-14 / ~140px */
        }
        @media (min-width: 1024px) {
          .slot { height: 4rem; width: 10rem; }      /* lg:h-16 / ~160px */
        }

        .logo {
          object-fit: contain;             /* contain inside slot */
          filter: grayscale(100%);
          opacity: 0.7;
          transition: opacity 300ms, filter 300ms;
        }
        .slot:hover .logo {
          filter: grayscale(0%);
          opacity: 1;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }      /* seamless loop */
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
	<div className="mt-20 md:mt-32 lg:mt-44">
	  <div className="bg-white/25 backdrop-blur-xl border border-white/40 rounded-2xl p-6 md:p-8 shadow-xl w-full max-w-6xl mx-auto overflow-hidden">
	    <p className="text-body md:text-body-lg text-gray-600 mb-6 md:mb-8 font-medium text-center">
	      Partners & Ecosystem
	    </p>
	    <InfinitePartnerScroll />
	  </div>
	</div>
      </div>
    </section>
  );
}
