"use client";

import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React from "react";

export function X402Protocol() {
  return (
    <section
      id="x402"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50/50 to-white"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12 lg:gap-20">
          <motion.div
            className="w-full max-w-lg space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-midnight text-6xl font-bold font-heading md:text-9xl lg:text-10xl">
              X402
            </h1>
            <p className="text-gray-600 leading-relaxed font-body md:text-md">
              An open protocol for internet-native payments
            </p>
          </motion.div>
          <motion.div
            className="w-full max-w-lg space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 leading-relaxed font-body md:text-md">
              x402 enables users to pay for resources via API without
              registration, emails, OAuth, or complex signatures. <br />
              <br />
              x402 unlocks new monetization models, offering developers and
              content creators a frictionless way to earn revenue from small
              transactions without forcing subscriptions or showing ads. <br />
            </p>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                title="Try X402"
                className="bg-midnight hover:bg-midnight/90 transition-all duration-200 px-6 py-3 font-medium rounded-xl shadow-sm hover:shadow-md text-white border-0"
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_X402_URL, "_blank")
                }
              >
                Try It Out Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
