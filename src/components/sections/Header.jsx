"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Pointer, Book } from "lucide-react";
import { motion } from "framer-motion";

// Infinite scrolling partner logos component
function InfinitePartnerScroll() {
  const partners = [
    { name: "TGMetrics", path: "/partners/tgmetrics.svg", url: "https://www.tgmetrics.ai/" },
    { name: "Solana Foundation", path: "/partners/solana-foundation.svg", url: "https://solana.org" },
    { name: "Coinbase", path: "/partners/coinbase.svg", url: "https://www.coinbase.com" },
    { name: "x402", path: "/partners/x402.svg", url: "https://x402.org" },
    { name: "OmniMinds", path: "/partners/omniminds.svg", url: "https://omniminds.ai/" },
    { name: "Eliza OS", path: "/partners/eliza-os.svg", url: "https://elizaos.ai/" },
    { name: "Compute", path: "/partners/compute.svg", url: "https://comput3.ai/" },
    { name: "Tip", path: "/partners/tip.md.svg", url: "https://tip.md" },
    { name: "MC Pay", path: "/partners/MCPay.svg", url: "https://mcpay.tech" },
    { name: "Oobe Protocol", path: "/partners/OOBE.svg", url: "https://www.oobeprotocol.ai/" },
    { name: "Solana", path: "/partners/Solana.svg", url: "https://solana.com/" },
    { name: "Polygon", path: "/partners/Polygon.svg", url: "https://polygon.technology" },
    { name: "Sei", path: "/partners/Sei.svg", url: "https://sei.io" },
    { name: "Base", path: "/partners/base.svg", url: "https://base.org" },
    { name: "Avax", path: "/partners/avax.svg", url: "https://avax.network" },
    { name: "Iotex", path: "/partners/IoTex.svg", url: "https://iotex.io/" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center w-max animate-scroll hover:[animation-play-state:paused]">
        <div className="flex gap-8 pr-8">
          {partners.map((p) => (
            p.url ? (
              <a
                key={`a-${p.name}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.name}
                className="relative flex-none h-14 w-40 group cursor-default"
              >
                <Image
                  src={p.path}
                  alt={p.name}
                  fill
                  className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  sizes="(min-width: 1024px) 160px, (min-width: 768px) 140px, 120px"
                  priority={false}
                />
              </a>
            ) : (
              <div
                key={`a-${p.name}`}
                className="relative flex-none h-14 w-40 group"
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
            )
          ))}
        </div>
        <div className="flex gap-8 pr-8" aria-hidden="true">
          {partners.map((p) => (
            p.url ? (
              <a
                key={`b-${p.name}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.name}
                className="relative flex-none h-14 w-40 group cursor-default"
              >
                <Image
                  src={p.path}
                  alt={p.name}
                  fill
                  className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  sizes="(min-width: 1024px) 160px, (min-width: 768px) 140px, 120px"
                  priority={false}
                />
              </a>
            ) : (
              <div
                key={`b-${p.name}`}
                className="relative flex-none h-14 w-40 group"
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
            )
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
      className="relative py-8 md:py-16 lg:py-18 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* Header text - Takes 8 columns on large screens */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.25, 0, 1],
              }}
              className="text-display md:text-display lg:text-6xl font-medium text-[#111729]"
              style={{ lineHeight: 1.2 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="block"
              >
                Solana-first, multi-network x402 facilitator.
              </motion.span>
            </motion.h1>
          </div>

          {/* Rest of content - Takes 6 columns on large screens */}
          <div className="lg:col-span-6 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: [0.25, 0.25, 0, 1],
              }}
              className="mt-4 md:mt-6 text-lg md:text-body-lg text-gray-600 leading-relaxed md:leading-relaxed font-medium"
            >
              Try x402 payments against a live merchant today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: [0.25, 0.25, 0, 1],
              }}
              className="mt-10 md:mt-12 flex flex-row flex-wrap gap-3 md:gap-4"
            >

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  className="inline-flex items-center justify-center  bg-[#FFFFFF]/70 text-gray-800 px-6 py-3 text-body font-normal border border-gray-200 rounded-full transition-colors hover:bg-[#FFFFFF] min-h-[44px]"
                  href={process.env.NEXT_PUBLIC_WEBSITE_URL_X402_ECHO || "#"}
                  target="_blank"
                >
                  <Pointer className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Try x402
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-700 text-white px-6 py-3 text-body font-normal rounded-full transition-colors min-h-[44px]"
                  href={process.env.NEXT_PUBLIC_WEBSITE_URL_X402_FACILITATOR || "#"}
                  target="_blank"
                >
                  <Book className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Facilitator
                </Link>
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* Partner logos - Infinite horizontal scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
          className="mt-20 md:mt-32 lg:mt-44"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-white/25 backdrop-blur-xl border border-white/40 rounded-2xl p-6 md:p-8 shadow-xl w-full max-w-6xl mx-auto overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-body md:text-body-lg text-gray-600 mb-6 md:mb-8 font-medium text-center"
            >
              Ecosystem & Partners
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <InfinitePartnerScroll />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
