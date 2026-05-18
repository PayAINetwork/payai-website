"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { HeroAgentInbound } from "@/components/ui/HeroAgentInbound";

export function Header() {
  return (
    <section id="home" className="bg-gradient-to-b from-white/0 to-white">
      <div className="container-payai pt-16 lg:pt-28 pb-10 lg:pb-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch lg:justify-between">
          <div className="max-w-[800px] flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
              className="text-[44px] lg:text-[88px] leading-[1.1] font-medium tracking-[-0.025em] text-[#09090B]"
            >
              One Integration,
              <br />
              <span className="bg-[linear-gradient(90deg,#4D63F6_0%,#1D45D8_100%)] bg-clip-text text-transparent">
                All Agentic Payments.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.25, 0, 1] }}
              className="mt-8 text-lg lg:text-xl text-[#71717A] leading-relaxed max-w-[560px]"
            >
              Upgrade your API. Get paid by AI Agents in 5 minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.25, 0, 1] }}
              className="mt-10 lg:mt-auto lg:pt-14 flex flex-row flex-wrap gap-3"
            >
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }}>
                <Link
                  className="inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-6 py-3 text-base font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg"
                  href={process.env.NEXT_PUBLIC_FACILITATOR_URL || "#"}
                  target="_blank"
                >
                  Start Building
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }}>
                <Link
                  className="inline-flex items-center justify-center bg-white/70 text-[#09090B] px-6 py-3 text-base font-medium border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:bg-white"
                  href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                  target="_blank"
                >
                  <Play className="w-5 h-5 mr-2" />
                  View Docs
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.25, 0, 1] }}
            className="w-full lg:flex-1 flex justify-center"
          >
            <HeroAgentInbound />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
