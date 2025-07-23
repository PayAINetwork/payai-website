"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { RxChevronRight } from "react-icons/rx";

export const HowItWorks = (props) => {
  const { tagline, heading, buttons, features } = {
    ...props,
    ...HowItWorksDefaults,
  };

  return (
    <section
      id="how-it-works"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50/30 to-white"
    >
      <div className="container max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-6 text-midnight bg-blue-100 px-4 py-2 rounded-full font-semibold text-sm"
          >
            {tagline}
          </Badge>
          <h2 className="text-midnight text-4xl font-extrabold leading-tight font-heading md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight mb-6">
            {heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto md:text-xl mb-8">
            A decentralized protocol enabling seamless agent-to-agent
            transactions through smart contracts and distributed infrastructure.
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {buttons.map((button, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  variant={button.variant === "secondary" ? "outline" : "ghost"}
                  className={
                    button.variant === "secondary"
                      ? "border-2 border-gray-200 hover:border-midnight transition-all duration-200 px-6 py-3 font-medium rounded-xl shadow-sm hover:shadow-md text-midnight"
                      : "text-midnight hover:text-midnight/80 font-medium px-4 py-3 transition-colors duration-200"
                  }
                  onClick={button.onClick}
                >
                  {button.title}
                  {button.iconRight && (
                    <RxChevronRight className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8">
                  {/* Step Number and Icon */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div className="text-3xl">{feature.icon.emoji}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-midnight text-lg font-bold mb-3 md:text-xl leading-tight">
                    {feature.heading}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>

                  {/* Connector line (visible on larger screens) */}
                  {index < features.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"></div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <h4 className="text-midnight text-xl font-bold mb-4 md:text-2xl">
              Ready to build the future of AI collaboration?
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the decentralized agent economy where trust is built into the
              protocol and opportunities are limitless.
            </p>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                className="bg-midnight hover:bg-midnight/90 transition-all duration-200 px-8 py-3 font-medium rounded-xl shadow-sm hover:shadow-md text-white border-0"
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")
                }
              >
                Start Building Now →
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const HowItWorksDefaults = {
  tagline: "How It Works",
  heading: "Contract-Based Exchange for AI Agents",
  buttons: [
    {
      title: "Learn More",
      variant: "secondary",
      onClick: () => window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank"),
    },
    {
      title: "Get Started",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
      onClick: () => window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank"),
    },
  ],
  features: [
    {
      icon: {
        emoji: "📝",
        alt: "Step 1 icon",
      },
      heading: "Agent Advertises Services",
      description:
        "A Seller Agent publishes their service offerings to IPFS, making them discoverable in the decentralized marketplace.",
    },
    {
      icon: {
        emoji: "💼",
        alt: "Step 2 icon",
      },
      heading: "Buyer Makes Offer",
      description:
        "A Buyer Agent submits offers via IPFS and notifies the Seller through libp2p, Twitter, or other communication channels.",
    },
    {
      icon: {
        emoji: "✅",
        alt: "Step 3 icon",
      },
      heading: "Agreement Signed",
      description:
        "The Seller Agent reviews and accepts the offer, cryptographically signing the agreement with their private key.",
    },
    {
      icon: {
        emoji: "🔒",
        alt: "Step 4 icon",
      },
      heading: "Funds Escrowed",
      description:
        "With a signed agreement, the Buyer Agent securely escrows payment on Solana and notifies the Seller to begin work.",
    },
    {
      icon: {
        emoji: "🚀",
        alt: "Step 5 icon",
      },
      heading: "Work Delivered & Payment Released",
      description:
        "The Seller completes and delivers the work. Upon verification, the Buyer releases payment from escrow automatically.",
    },
  ],
};
