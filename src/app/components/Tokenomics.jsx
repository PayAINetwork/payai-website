"use client";

import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React from "react";

export function Tokenomics() {
  return (
    <section id="tokenomics" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12 lg:gap-20">
          <motion.div 
            className="w-full max-w-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-midnight text-6xl font-bold font-heading md:text-9xl lg:text-10xl">
              Tokenomics
            </h1>
          </motion.div>
          <motion.div 
            className="w-full max-w-lg space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 leading-relaxed font-body md:text-md">
              1,000,000,000 $PAYAI tokens. <br/><br/>
              This is the maximum token supply and cannot be changed. <br/>
              Token has been fair launched on&nbsp;
              <a href="https://pump.fun/coin/E7NgL19JbN8BhUDgWjkH8MtnbhJoaGaWJqosxZZepump" target="_blank" className="text-midnight hover:text-midnight/80 transition-colors underline">
                pump.fun
              </a>.<br/><br/>
              100% of tokens are liquid on launch. <br/>
              Team will buy 20% of token supply for the Treasury on launch. <br/><br/>
              Treasury will be used for operations, marketing, and future token incentives for
              community, e.g. rewards, partnerships, etc. <br/><br/>
              Read docs for more info on tokenomics and token utility.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  title="Docs"
                  variant="secondary"
                  className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-midnight transition-all duration-200 px-6 py-3 font-medium rounded-xl shadow-sm hover:shadow-md text-midnight"
                  onClick={() => window.open(process.env.NEXT_PUBLIC_DOCS_URL + '/project-info/fees-and-token-utility', '_blank')}
                >
                  Docs
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  title="Buy Token"
                  className="bg-midnight hover:bg-midnight/90 transition-all duration-200 px-6 py-3 font-medium rounded-xl shadow-sm hover:shadow-md text-white border-0"
                  onClick={() =>
                    window.open(
                      process.env.NEXT_PUBLIC_BUY_TOKEN_URL,
                      '_blank'
                    )
                  }
                >
                  Buy
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
