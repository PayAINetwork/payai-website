"use client";

import React from "react";
import { BiBook, BiLineChart, BiLogoGithub } from "react-icons/bi";
import { BsTwitterX, BsTelegram } from "react-icons/bs";
import { motion } from "framer-motion";

export function Links() {
  const linkVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="links" className="bg-midnight px-[5%] pt-16 md:pt-24 lg:pt-28 pb-6 md:pb-12 lg:pb-16">
      <div className="container text-white max-w-7xl mx-auto">
        <motion.div 
          className="mb-12 flex max-w-lg flex-col md:mb-18 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-semibold md:mb-4">Connect</p>
          <h2 className="text-white text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
            Links
          </h2>
        </motion.div>
        
        <div className="grid auto-cols-fr gap-x-8 gap-y-12 sm:gap-x-8 md:grid-cols-2 md:gap-y-16 lg:grid-cols-5">
          <motion.a 
            href={process.env.NEXT_PUBLIC_TWITTER_URL} 
            target="_blank"
            variants={linkVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex flex-col items-center justify-start text-center p-6 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="mb-5 sm:mb-6">
                <BsTwitterX className="size-12" />
              </div>
              <h3 className="text-white text-2xl font-bold leading-[1.4] md:text-3xl lg:text-4xl">
                Twitter
              </h3>
            </motion.div>
          </motion.a>

          <motion.a 
            href={process.env.NEXT_PUBLIC_TELEGRAM_URL} 
            target="_blank"
            variants={linkVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex flex-col items-center justify-start text-center p-6 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="mb-5 sm:mb-6">
                <BsTelegram className="size-12" />
              </div>
              <h3 className="text-white text-2xl font-bold leading-[1.4] md:text-3xl lg:text-4xl">
                Telegram
              </h3>
            </motion.div>
          </motion.a>

          <motion.a 
            href={process.env.NEXT_PUBLIC_DEXSCREENER_URL} 
            target="_blank"
            variants={linkVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex flex-col items-center justify-start text-center p-6 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="mb-5 sm:mb-6">
                <BiLineChart className="size-12" />
              </div>
              <h3 className="text-white text-2xl font-bold leading-[1.4] md:text-3xl lg:text-4xl">
                DexScreener
              </h3>
            </motion.div>
          </motion.a>

          <motion.a 
            href={process.env.NEXT_PUBLIC_DOCS_URL} 
            target="_blank"
            variants={linkVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex flex-col items-center justify-start text-center p-6 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="mb-5 sm:mb-6">
                <BiBook className="size-12" />
              </div>
              <h3 className="text-white text-2xl font-bold leading-[1.4] md:text-3xl lg:text-4xl">
                Docs
              </h3>
            </motion.div>
          </motion.a>

          <motion.a 
            href={process.env.NEXT_PUBLIC_GITHUB_URL} 
            target="_blank"
            variants={linkVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex flex-col items-center justify-start text-center p-6 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="mb-5 sm:mb-6">
                <BiLogoGithub className="size-12" />
              </div>
              <h3 className="text-white text-2xl font-bold leading-[1.4] md:text-3xl lg:text-4xl">
                Github
              </h3>
            </motion.div>
          </motion.a>
        </div>

        {/* Footer content with animations */}
        <motion.div 
          className="text-white flex flex-col items-center justify-center text-center space-y-4 pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm">© 2025 PayAI. All rights reserved.</p>
          <p className="text-sm max-w-2xl">
            $PAYAI is a utility token for use within the PayAI platform. Not for investment purposes.
          </p>
          <a 
            href={process.env.NEXT_PUBLIC_DOCS_URL + "/project-info/token-use-and-legal-disclaimer"}
            target="_blank"
            className="text-sm hover:underline transition-colors duration-200"
          >
            Read full disclaimer here.
          </a>
          <div className="flex gap-x-6 text-sm">
            <a href="/privacy-policy" className="hover:underline transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:underline transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
