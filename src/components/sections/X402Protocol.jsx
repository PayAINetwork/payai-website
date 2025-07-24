"use client";

import { Button } from "@relume_io/relume-ui";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import React from "react";

export function X402Protocol() {
  const features = [
    {
      icon: "🔑",
      title: "No Registration",
      description: "Skip emails, OAuth, and complex signatures",
    },
    {
      icon: "⚡",
      title: "Instant Payments",
      description: "Pay for resources via API immediately",
    },
    {
      icon: "💰",
      title: "Micro-transactions",
      description: "Enable small payments without subscriptions",
    },
    {
      icon: "🌐",
      title: "Open Protocol",
      description: "Internet-native payment infrastructure",
    },
  ];

  return (
    <section
      id="x402"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50/50 to-white"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <Badge
                variant="secondary"
                className="mb-6 text-midnight px-4 py-2 rounded-full font-semibold text-sm"
              >
                Payment Protocol
              </Badge>
              <h1 className="text-midnight text-4xl font-extrabold font-heading md:text-6xl lg:text-7xl mb-6">
                X402
              </h1>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100 mb-6">
                <p className="text-lg font-semibold text-green-700 mb-2">
                  An open protocol for internet-native payments
                </p>
                <p className="text-sm text-gray-600">
                  Revolutionizing how digital resources are monetized
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed font-body md:text-lg">
                x402 enables users to pay for resources via API without
                registration, emails, OAuth, or complex signatures. It unlocks
                new monetization models, offering developers and content
                creators a frictionless way to earn revenue from small
                transactions.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                title="Try X402"
                className="bg-midnight hover:bg-midnight/90 transition-all duration-300 px-6 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl text-white border-0"
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_X402_URL, "_blank")
                }
              >
                🚀 Try It Out Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <h3 className="text-midnight text-lg font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Use Case Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
                <CardContent className="p-6">
                  <h4 className="text-midnight text-lg font-bold mb-3">
                    💡 Real-World Example
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    An AI agent can instantly pay for API calls, content access,
                    or computational resources without setting up accounts or
                    subscriptions. Just pay-as-you-go with x402.
                  </p>
                  <div className="flex items-center text-xs text-green-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span>Instant • Frictionless • Decentralized</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-midnight text-xl font-bold mb-4 md:text-2xl">
              The Future of Digital Payments
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🔓</div>
                <div className="font-semibold text-midnight">
                  Permissionless
                </div>
                <div className="text-sm text-gray-600">
                  No gatekeepers or approvals
                </div>
              </div>
              <div>
                <div className="text-2xl mb-2">📱</div>
                <div className="font-semibold text-midnight">Universal</div>
                <div className="text-sm text-gray-600">
                  Works with any application
                </div>
              </div>
              <div>
                <div className="text-2xl mb-2">🔄</div>
                <div className="font-semibold text-midnight">Composable</div>
                <div className="text-sm text-gray-600">
                  Build new payment models
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
