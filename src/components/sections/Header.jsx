"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Book } from "lucide-react";
import { motion } from "framer-motion";

// Infinite scrolling partner logos component
function InfinitePartnerScroll() {
  const partners = [
    { name: "TGMetrics", path: "/new-assets/partners/tgmetrics.svg" },
    {
      name: "Solana Foundation",
      path: "/new-assets/partners/solana-foundation.svg",
    },
    { name: "Raydium", path: "/new-assets/partners/r-logo.svg" },
    { name: "Pumpfun", path: "/new-assets/partners/pil.svg" },
    { name: "OmniMinds", path: "/new-assets/partners/omniminds.svg" },
    { name: "Eliza OS", path: "/new-assets/partners/eliza-os.svg" },
    { name: "Compute", path: "/new-assets/partners/compute.svg" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center w-max animate-scroll hover:[animation-play-state:paused]">
        <div className="flex gap-8 pr-8">
          {partners.map((p) => (
            <div
              key={`a-${p.name}`}
              className="relative flex-none h-12 w-[7.5rem] md:h-14 md:w-[8.75rem] lg:h-16 lg:w-40 group"
            >
              <Image
                src={p.path}
                alt={p.name}
                fill
                className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                sizes="(min-width: 1024px) 160px, (min-width: 768px) 140px, 120px"
                priority={false}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-8 pr-8" aria-hidden="true">
          {partners.map((p) => (
            <div
              key={`b-${p.name}`}
              className="relative flex-none h-12 w-[7.5rem] md:h-14 md:w-[8.75rem] lg:h-16 lg:w-40 group"
            >
              <Image
                src={p.path}
                alt={p.name}
                fill
                className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                sizes="(min-width: 1024px) 160px, (min-width: 768px) 140px, 120px"
              />
            </div>
          ))}
        </div>
      </div>
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
      <motion.div
        initial={{ opacity: 0, scale: 1.1, x: 50 }}
        animate={{ opacity: 0.8, scale: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
        className="absolute right-0 top-8 md:top-0 md:opacity-100"
      >
        <Image
          src="/header-image.svg"
          alt="PayAI Hero"
          width={600}
          height={600}
          className="object-contain scale-75 md:scale-100"
          priority
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left content - Takes 6 columns on large screens */}
          <div className="lg:col-span-6 max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.25, 0, 1],
              }}
              className="text-display sm:text-display md:text-6xl font-medium text-[#111729] leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="whitespace-nowrap block"
              >
                Powering Payments for
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="whitespace-nowrap block"
              >
                the AI Agent Economy
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0.25, 0.25, 0, 1],
              }}
              className="mt-4 md:mt-6 text-body md:text-body-lg text-gray-600 leading-relaxed"
            >
              PayAI enables autonomous agents to transact with each other and
              humans — securely, seamlessly, and 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.0,
                ease: [0.25, 0.25, 0, 1],
              }}
              className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-700 text-white px-6 py-3 text-body font-normal rounded-full transition-colors min-h-[44px]"
                  href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                  target="_blank"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Github
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  className="inline-flex items-center justify-center bg-[#FFFFFF]/70 text-gray-800 px-6 py-3 text-body font-normal border border-gray-200 rounded-full transition-colors hover:bg-[#FFFFFF] min-h-[44px]"
                  href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                  target="_blank"
                >
                  <Book className="w-5 h-5 mr-2" />
                  Docs
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Partner logos - Infinite horizontal scroll */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.25, 0, 1] }}
          className="mt-20 md:mt-32 lg:mt-44"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            whileHover={{ y: -4 }}
            className="bg-white/25 backdrop-blur-xl border border-white/40 rounded-2xl p-6 md:p-8 shadow-xl w-full max-w-6xl mx-auto overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-body md:text-body-lg text-gray-600 mb-6 md:mb-8 font-medium text-center"
            >
              Partners & Ecosystem
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              <InfinitePartnerScroll />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
