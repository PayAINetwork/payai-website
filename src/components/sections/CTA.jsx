"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="cta"
      className="max-w-[1000rem] mx-auto p-4 lg:p-8 max-h-[644px]"
    >
      <div className="bg-white rounded-2xl lg:rounded-4xl p-6 lg:p-10 flex gap-10 items-center">
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.25, 0, 1],
            }}
            className="text-2xl lg:text-[56px] lg:tracking-[-1%] font-medium text-[#09090B]"
            style={{ lineHeight: 1.2 }}
          >
            Experience the Future of Real-Time Payments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: [0.25, 0.25, 0, 1],
            }}
            className="mt-3 lg:mt-6 text-sm lg:text-body text-[#71717A] leading-relaxed md:leading-relaxed"
          >
            Start Building with x402 today and Integrate real-time, usage-based
            payments into your AI agents, apps, or platforms in just a few
            minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: [0.25, 0.25, 0, 1],
            }}
            className="mt-6 lg:mt-8 flex flex-row flex-wrap gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                className="inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-3 lg:px-4 py-2 lg:py-2.5 text-[13px] lg:text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg transition-colors hover:bg-[#FFFFFF]"
                href={process.env.NEXT_PUBLIC_FACILITATOR_PAYAI_NETWORK || "#"}
                target="_blank"
              >
                Get Started
                <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                className="inline-flex items-center justify-center  bg-white text-[#09090B] px-4 lg:px-4 py-2 lg:py-2.5 text-sm font-medium border border-[$#E4E4E7] rounded-lg transition-colors hover:bg-[#FFFFFF] shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                href={process.env.NEXT_PUBLIC_X402_PAYAI_NETWORK || "#"}
                target="_blank"
              >
                <Play className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                Try x402
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <Image
          src="/cta/hero.jpg"
          alt="Hero Image"
          width={628}
          height={500}
          className="rounded-3xl hidden lg:block"
        />
      </div>
    </section>
  );
}
