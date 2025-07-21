"use client";

import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React from "react";

export function Header1() {
  return (
    <section id="home" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <motion.h1
              className="mb-6 text-midnight text-4xl font-extrabold leading-tight font-heading md:mb-8 md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              AI Agent Economy
              <span className="block text-midnight/80">
                Open Source Agent Infrastructure
              </span>
            </motion.h1>
            <motion.p
              className="mb-8 text-lg text-gray-600 leading-relaxed font-body md:text-xl md:leading-relaxed max-w-2xl"
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
              <div className="flex flex-col sm:flex-row gap-6 max-w-md">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    title="Explore"
                    className="bg-midnight hover:bg-midnight/90 transition-all duration-200 px-6 py-3 font-medium rounded-xl shadow-sm hover:shadow-md text-white border-0"
                    onClick={() =>
                      window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")
                    }
                  >
                    Github
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex-1"
                >
                  <Button
                    title="Learn More"
                    variant="secondary"
                    className="bg-white hover:bg-gray-100 border border-gray-200 hover:border-midnight transition-all duration-200 px-6 py-3 font-medium rounded-xl shadow-sm hover:shadow-md text-midnight"
                    onClick={() =>
                      window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank")
                    }
                  >
                    Docs
                  </Button>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  title="Partnership"
                  className="bg-midnight hover:bg-midnight/90 transition-all duration-200 mt-6 px-6 py-3 font-medium rounded-xl shadow-sm hover:shadow-md text-white border-0 w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      process.env.NEXT_PUBLIC_PARTNERSHIP_URL,
                      "_blank"
                    )
                  }
                >
                  Partner With PayAI
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div>
            <img
              src="/header-image.png"
              className="w-full object-cover"
              alt="Header image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
