"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Github, Linkedin, Send, BookText } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const socialLinks = [
    {
      title: "Twitter",
      href: process.env.NEXT_PUBLIC_TWITTER_URL,
      Icon: Twitter,
    },
    {
      title: "Telegram",
      href: process.env.NEXT_PUBLIC_TELEGRAM_URL,
      Icon: Send,
    },
    {
      title: "DexScreener",
      href: process.env.NEXT_PUBLIC_DEXSCREENER_URL,
      Icon: BookText,
    },
    { title: "Docs", href: process.env.NEXT_PUBLIC_DOCS_URL, Icon: BookText },
    { title: "Github", href: process.env.NEXT_PUBLIC_GITHUB_URL, Icon: Github },
    {
      title: "LinkedIn",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      Icon: Linkedin,
    },
  ].filter((l) => !!l.href);

  const developerLinks = [
    { label: "Documentation", href: process.env.NEXT_PUBLIC_DOCS_URL },
    { label: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB_URL },
  ].filter((l) => !!l.href);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="px-[5%] pt-16 pb-24 relative z-0">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
          >
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/" className="flex items-center gap-2">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4L4 10L16 16L28 10L16 4Z"
                      fill="#E6EEFF"
                      stroke="#4D63F6"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 22L16 28L28 22"
                      stroke="#4D63F6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 16L16 22L28 16"
                      stroke="#4D63F6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-body-lg font-medium text-midnight">
                    PayAI
                  </span>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-4 text-body text-gray-600 max-w-xs"
              >
                Powering payments for the AI Agent Economy. Tools and
                infrastructure for autonomous agent transactions.
              </motion.p>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-6 flex items-center gap-3"
              >
                {socialLinks.map(({ title, href, Icon }, index) => (
                  <motion.a
                    key={title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.7 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={title}
                    className="inline-flex items-center justify-center size-9 rounded-full border border-gray-200 bg-white text-midnight hover:text-primary-700 hover:border-gray-300 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={2.25} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Developers (only linked items) */}
            <motion.div variants={itemVariants}>
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-body font-medium text-midnight tracking-wide mb-4"
              >
                Developers
              </motion.h4>
              <ul className="space-y-3 text-body text-gray-600">
                {developerLinks.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      whileHover={{ x: 4, color: "#111729" }}
                      transition={{ duration: 0.2 }}
                      href={item.href}
                      target="_blank"
                      className="hover:text-midnight transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div variants={itemVariants}>
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-body font-medium text-midnight tracking-wide mb-4"
              >
                Legal
              </motion.h4>
              <ul className="space-y-3 text-body text-gray-600">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="/privacy-policy"
                      className="hover:text-midnight transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </motion.div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="/terms-of-service"
                      className="hover:text-midnight transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </motion.div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom watermark */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="pointer-events-none select-none absolute inset-x-0 bottom-[-0.25rem] -z-10 text-[6rem] md:text-[9rem] lg:text-[12rem] leading-none font-bold text-gray-100/60 tracking-tight truncate"
      >
        <div className="px-[5%]">payai.network</div>
      </motion.div>
    </motion.footer>
  );
}
