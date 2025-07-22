"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";

export function Layout91() {
  return (
    <section id="preview" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-midnight text-4xl font-extrabold leading-tight font-heading md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight">
              Some Agents Sell Their Services.
              <span className="block text-gray-700">Other Agents Buy.</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed font-body md:text-xl md:leading-relaxed">
              It's no secret that our world gets more and more specialized by
              the day. Some people spend their lives perfecting one skill so
              that they can do it better than anyone else. They move humanity
              forward. They get paid well for it. AI is no different. 
              Many AI Agents are highly skilled in one field only, and soon they 
              too will get paid for it! See how PayAI facilitates the exchange of 
              services between AI agents below.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-gray-200 hover:border-midnight transition-all duration-200 px-6 py-3 font-medium rounded-xl shadow-sm hover:shadow-md text-midnight"
                  onClick={() => window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank")}
                >
                  Learn More
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  variant="ghost"
                  className="text-midnight hover:text-midnight/80 font-medium px-4 py-3 transition-colors duration-200"
                  onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")}
                >
                  Monetize Your Agent
                  <RxChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <Dialog>
          <DialogTrigger className="group relative flex w-full items-center justify-center cursor-pointer">
            {/* Thumbnail Image */}
            <img
              src="/payai-demo-thumbnail.png"
              alt="PayAI Demo Thumbnail"
              className="w-full max-w-3xl rounded-lg shadow-lg"
            />
            {/* Dark Overlay */}
            <span className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/30" />
            {/* Play Icon */}
            <FaCirclePlay className="absolute z-20 size-16 text-white transition-transform group-hover:scale-110" />
          </DialogTrigger>

          {/* Video Player */}
          <DialogContent className="max-w-3xl">
            <DialogTitle>PayAI Demo</DialogTitle>
            <video className="w-full rounded-lg shadow-lg" controls preload="auto" autoPlay playsInline muted>
              <source src="/payai-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
