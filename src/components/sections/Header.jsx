"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useShuffledLogos } from "@/context/ShuffledLogosContext";

export function Header() {
  const shuffledLogos = useShuffledLogos();

  return (
    <section
      id="home"
      className="lg:max-h-[704px] bg-gradient-to-b from-white/0 to-white min-h-screen"
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
                  href={process.env.NEXT_PUBLIC_FACILITATOR_URL || "#"}
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
                  className="inline-flex items-center justify-center  bg-[#FFFFFF]/70 text-[#09090B] px-3 py-2  lg:px-4 lg:py-2.5 text-sm font-medium border border-[#E4E4E7] rounded-lg transition-colors hover:bg-[#FFFFFF] shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                  href={process.env.NEXT_PUBLIC_ECHO_MERCHANT_URL || "#"}
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
              className="mt-8 lg:mt-20"
            >
              <Link href="/ecosystem" className="flex flex-col lg:flex-row flex-wrap lg:items-center gap-4 group">
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
                <p className="w-[170px] text-[#0A0A0A]/60 text-sm lg:text-base transition-colors group-hover:text-[#1D45D8]">
                  Trusted by{" "}
                  <span className="font-semibold text-[#0A0A0A] transition-colors group-hover:text-[#1D45D8]">
                    1000+ companies
                  </span>{" "}
                  of all sizes
                </p>
              </Link>
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
