"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TerminalCommand from "@/components/shared/TerminalCommand";

export function CallToAction() {
  // Floating elements for visual appeal
  const floatingElements = [
    { emoji: "🤖", size: "text-4xl", position: "top-20 left-20", delay: 0 },
    { emoji: "💰", size: "text-3xl", position: "top-32 right-32", delay: 0.2 },
    {
      emoji: "🔗",
      size: "text-2xl",
      position: "bottom-40 left-16",
      delay: 0.4,
    },
    {
      emoji: "⚡",
      size: "text-3xl",
      position: "bottom-20 right-20",
      delay: 0.6,
    },
    { emoji: "🚀", size: "text-2xl", position: "top-1/2 left-8", delay: 0.8 },
    { emoji: "✨", size: "text-xl", position: "top-1/3 right-12", delay: 1.0 },
  ];

  return (
    <section
      id="cta25"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden"
    >
      <div className="container text-center max-w-5xl mx-auto relative z-10">
        {/* Floating decorative elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} ${element.size} opacity-20 pointer-events-none hidden lg:block`}
            initial={{ opacity: 0, y: 20, rotate: -10 }}
            whileInView={{ opacity: 0.3, y: 0, rotate: 0 }}
            transition={{
              delay: element.delay,
              duration: 0.8,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3,
            }}
            viewport={{ once: true }}
          >
            {element.emoji}
          </motion.div>
        ))}

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-6 text-midnight bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full font-semibold text-sm border border-white/20"
          >
            Developer Experience
          </Badge>

          <h2 className="mb-8 text-midnight text-4xl font-extrabold font-heading md:text-6xl lg:text-7xl">
            Your favorite
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              AI agent platform
            </span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto md:text-xl mb-8">
            Building with AI agents has never been so simple.
            <br />
            <span className="font-semibold">
              Start your agent economy journey today.
            </span>
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                className="bg-midnight hover:bg-midnight/90 transition-all duration-300 px-6 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl text-white border-0"
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")
                }
              >
                🚀 Start Building
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                variant="outline"
                className="bg-white/90 hover:bg-white border-2 border-gray-300 hover:border-midnight transition-all duration-300 px-6 py-3 font-medium rounded-xl shadow-lg hover:shadow-xl text-midnight backdrop-blur-sm"
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank")
                }
              >
                📚 View Docs
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Terminal Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-3xl blur-3xl opacity-30"></div>

          <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-1 shadow-xl border border-white/30">
            <TerminalCommand />
          </div>
        </motion.div>

        {/* Bottom stats/info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="text-2xl mb-2">🔥</div>
              <div className="font-bold text-midnight text-lg">Open Source</div>
              <div className="text-gray-600 text-sm">Built on ElizaOS</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-bold text-midnight text-lg">
                Lightning Fast
              </div>
              <div className="text-gray-600 text-sm">Powered by Solana</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="text-2xl mb-2">🌐</div>
              <div className="font-bold text-midnight text-lg">
                Decentralized
              </div>
              <div className="text-gray-600 text-sm">IPFS & libp2p</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-purple-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-200/30 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}
