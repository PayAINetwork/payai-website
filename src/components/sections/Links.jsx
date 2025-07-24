"use client";

import React from "react";
import { BiBook, BiLineChart, BiLogoGithub } from "react-icons/bi";
import { BsTwitterX, BsTelegram, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

export function Links() {
  const links = [
    {
      title: "Twitter",
      icon: BsTwitterX,
      url: process.env.NEXT_PUBLIC_TWITTER_URL,
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      title: "Telegram",
      icon: BsTelegram,
      url: process.env.NEXT_PUBLIC_TELEGRAM_URL,
      color: "text-sky-600 hover:text-sky-700",
    },
    {
      title: "DexScreener",
      icon: BiLineChart,
      url: process.env.NEXT_PUBLIC_DEXSCREENER_URL,
      color: "text-green-600 hover:text-green-700",
    },
    {
      title: "Docs",
      icon: BiBook,
      url: process.env.NEXT_PUBLIC_DOCS_URL,
      color: "text-purple-600 hover:text-purple-700",
    },
    {
      title: "Github",
      icon: BiLogoGithub,
      url: process.env.NEXT_PUBLIC_GITHUB_URL,
      color: "text-gray-700 hover:text-gray-800",
    },
    {
      title: "LinkedIn",
      icon: BsLinkedin,
      url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      color: "text-gray-700 hover:text-gray-800",
    },
  ];

  return (
    <section id="links" className="bg-gray-50 px-[5%] py-12 md:py-16">
      <div className="container max-w-7xl mx-auto">
        {/* Links Grid - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-midnight text-2xl font-bold mb-2">
              Connect With Us
            </h3>
            <p className="text-gray-600 text-sm">
              Join our community and stay updated
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  className="group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-gray-300 min-w-[100px]">
                    <IconComponent
                      className={`size-6 mb-2 ${link.color} transition-colors`}
                    />
                    <span className="text-xs font-medium text-gray-700 group-hover:text-midnight transition-colors">
                      {link.title}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center space-y-4 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              © 2025 PayAI. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 max-w-2xl mx-auto">
              $PAYAI is a utility token for use within the PayAI platform. Not
              for investment purposes.
            </p>
            <a
              href={
                process.env.NEXT_PUBLIC_DOCS_URL +
                "/project-info/token-use-and-legal-disclaimer"
              }
              target="_blank"
              className="text-xs text-midnight hover:text-midnight/80 underline transition-colors duration-200 inline-block"
            >
              Read full disclaimer →
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center pt-2">
            <a
              href="/privacy-policy"
              className="text-xs text-gray-500 hover:text-midnight transition-colors duration-200 px-3 py-1 rounded hover:bg-gray-100"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-xs text-gray-500 hover:text-midnight transition-colors duration-200 px-3 py-1 rounded hover:bg-gray-100"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
