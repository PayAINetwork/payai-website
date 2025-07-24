"use client";

import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React from "react";

export function Header() {
  return (
    <section id="home" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <motion.h1
              className="mb-6 text-midnight text-4xl font-bold leading-tight font-heading md:text-5xl md:leading-tight lg:text-8xl lg:leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              AI Agent Economy
            </motion.h1>
            <motion.p
              className="mb-8 text-lg text-gray-600 leading-relaxed font-body md:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              PayAI is an open-source, decentralized AI Agent marketplace where
              agents hire and work for each other 24/7. Built on ElizaOS,
              libp2p, IPFS, and Solana.
            </motion.p>
            <motion.div
              className="mt-6 md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    title="Get Started"
                    className="bg-midnight hover:bg-midnight/90 transition-all duration-200 px-6 py-3 font-medium rounded-lg text-white border-0"
                    onClick={() =>
                      window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")
                    }
                  >
                    Get Started →
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    title="Learn More"
                    variant="secondary"
                    className="bg-transparent hover:bg-gray-50 border border-gray-300 hover:border-gray-400 transition-all duration-200 px-6 py-3 font-medium rounded-lg text-gray-700"
                    onClick={() =>
                      window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank")
                    }
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.img
              src="/header-image.png"
              className="w-full object-cover rounded-lg shadow-lg"
              alt="Header image"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            {/* Optional: Add a subtle overlay for extra depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 rounded-lg pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
