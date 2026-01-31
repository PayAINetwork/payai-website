"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

// Infinite scrolling partner logos component
function InfinitePartnerScroll() {
  const partners = [
    {
      name: "TGMetrics",
      path: "/partners/tgmetrics.svg",
      url: "https://www.tgmetrics.ai/",
    },
    {
      name: "Solana Foundation",
      path: "/partners/solana-foundation.svg",
      url: "https://solana.org",
    },
    {
      name: "Coinbase",
      path: "/partners/coinbase.svg",
      url: "https://www.coinbase.com",
    },
    { name: "x402", path: "/partners/x402.svg", url: "https://x402.org" },
    {
      name: "OmniMinds",
      path: "/partners/omniminds.svg",
      url: "https://omniminds.ai/",
    },
    {
      name: "Eliza OS",
      path: "/partners/eliza-os.svg",
      url: "https://elizaos.ai/",
    },
    {
      name: "Compute",
      path: "/partners/compute.svg",
      url: "https://comput3.ai/",
    },
    { name: "Tip", path: "/partners/tip.md.svg", url: "https://tip.md" },
    { name: "MC Pay", path: "/partners/MCPay.svg", url: "https://mcpay.tech" },
    {
      name: "Oobe Protocol",
      path: "/partners/OOBE.svg",
      url: "https://www.oobeprotocol.ai/",
    },
    {
      name: "Solana",
      path: "/partners/Solana.svg",
      url: "https://solana.com/",
    },
    {
      name: "Polygon",
      path: "/partners/Polygon.svg",
      url: "https://polygon.technology",
    },
    { name: "Sei", path: "/partners/Sei.svg", url: "https://sei.io" },
    { name: "Base", path: "/partners/base.svg", url: "https://base.org" },
    { name: "Avax", path: "/partners/avax.svg", url: "https://avax.network" },
    { name: "Iotex", path: "/partners/IoTex.svg", url: "https://iotex.io/" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center w-max animate-scroll hover:[animation-play-state:paused]">
        <div className="flex gap-8 pr-8">
          {partners.map((p) =>
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
            ),
          )}
        </div>
        <div className="flex gap-8 pr-8" aria-hidden="true">
          {partners.map((p) =>
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
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <section
      id="home"
      className="lg:max-h-[704px] bg-gradient-to-b from-white/0 to-white"
    >
      <div className="container-payai pt-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
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
              className="text-[32px] lg:text-[56px] lg:tracking-[-1%] font-medium text-[#09090B]"
              style={{ lineHeight: 1.2 }}
            >
              The Fastest Way for{" "}
              <span className="text-[#1D45D8]">AI Agents and Apps</span> to
              Transact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: [0.25, 0.25, 0, 1],
              }}
              className="mt-4 text-sm lg:text-body text-[#71717A] leading-relaxed md:leading-relaxed"
            >
              Build AI agents and apps that pay and get paid in real time with
              x402, multi-chain micropayments powered by Solana.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: [0.25, 0.25, 0, 1],
              }}
              className="mt-8 flex flex-row flex-wrap gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  className="inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-3 py-2 lg:px-4 lg:py-2.5 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg transition-colors hover:bg-[#FFFFFF]"
                  href={process.env.NEXT_PUBLIC_WEBSITE_URL_X402_ECHO || "#"}
                  target="_blank"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  className="inline-flex items-center justify-center  bg-[#FFFFFF]/70 text-[#09090B] px-3 py-2  lg:px-4 lg:py-2.5 text-sm font-medium border border-[$#E4E4E7] rounded-lg transition-colors hover:bg-[#FFFFFF] shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                  href={process.env.NEXT_PUBLIC_WEBSITE_URL_X402_ECHO || "#"}
                  target="_blank"
                >
                  <Play className="w-5 h-5 mr-2 text-[#09090B]" />
                  Try x402
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: [0.25, 0.25, 0, 1],
              }}
              className="mt-8 lg:mt-20 flex flex-col lg:flex-row flex-wrap lg:items-center gap-4"
            >
              <Image
                src="/header/companies.png"
                alt="Companies Image"
                width={160}
                height={52}
                className="w-28 lg:w-40 h-auto"
              />
              <p className="w-[170px] text-[#0A0A0A]/60 text-sm lg:text-base">
                Trusted by{" "}
                <span className="font-semibold text-[#0A0A0A]">
                  3000+ companies
                </span>{" "}
                of all sizes
              </p>
            </motion.div>
          </div>

          <Image
            src="/header/hero.png"
            alt="Hero Image"
            width={600}
            height={628}
            className="w-full h-auto lg:w-auto lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}
