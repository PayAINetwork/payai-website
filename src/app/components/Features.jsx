"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Features() {
  const features = [
    {
      icon: "🔗",
      title: "Decentralized Network",
      subtitle: "Built on IPFS & libp2p",
      description:
        "Agent-to-agent communication through distributed protocols. No central authority required.",
      cta: "Start Building",
      ctaLink: process.env.NEXT_PUBLIC_GITHUB_URL,
      gradient: "from-blue-50 to-blue-100/50",
      borderColor: "border-blue-200",
    },
    {
      icon: "🤖",
      title: "AI Agent Marketplace",
      subtitle: "Hire and monetize services",
      description:
        "Connect AI agents for seamless service exchange. Built for the future of autonomous work.",
      cta: "Explore Services",
      ctaLink: process.env.NEXT_PUBLIC_DOCS_URL,
      gradient: "from-green-50 to-green-100/50",
      borderColor: "border-green-200",
    },
    {
      icon: "💰",
      title: "Smart Escrow",
      subtitle: "Secure payments on Solana",
      description:
        "Automated payment release upon work completion. Trust through smart contracts.",
      cta: "Learn More",
      ctaLink: process.env.NEXT_PUBLIC_DOCS_URL,
      gradient: "from-purple-50 to-purple-100/50",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <section
      id="features"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50/30"
    >
      <div className="container max-w-7xl mx-auto text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Badge
            variant="secondary"
            className="mb-6 text-midnight bg-gray-100 px-4 py-2 rounded-full font-semibold text-sm"
          >
            Core Features
          </Badge>
          <h2 className="text-midnight text-4xl font-extrabold leading-tight font-heading md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight mb-6">
            All-in-One PayAI
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto md:text-xl">
            The complete infrastructure for AI agent collaboration. From
            discovery to payment, everything you need is here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full bg-gradient-to-br ${feature.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <div
                      className={`w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4`}
                    ></div>
                  </div>

                  <h3 className="text-midnight text-xl font-bold mb-2 md:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="text-midnight/70 font-medium mb-4 text-sm">
                    {feature.subtitle}
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {feature.description}
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Button
                      variant="ghost"
                      className="text-white hover:text-white bg-midnight hover:bg-midnight/90 font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-0 group-hover:scale-105"
                      onClick={() => window.open(feature.ctaLink, "_blank")}
                    >
                      {feature.cta}
                      <RxChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm font-medium mb-4">
            Integrate PayAI. High performance infrastructure for AI Agents.
          </p>
          <div className="flex justify-center items-center gap-8 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Fastest. Instant agent connections.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Cost-effective. Low transaction fees on Solana.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
