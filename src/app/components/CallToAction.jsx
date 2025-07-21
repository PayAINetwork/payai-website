"use client";

import React from "react";
import { motion } from "framer-motion";
import TerminalCommand from "@/app/components/TerminalCommand";

export function CallToAction() {
  return (
    <section id="cta25" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container text-center max-w-5xl mx-auto">
        <motion.h2 
          className="mb-16 text-midnight text-5xl font-bold font-heading md:mb-16 md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get Started Today
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <TerminalCommand />
        </motion.div>
      </div>
    </section>
  );
}
