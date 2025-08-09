"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import React from "react";
import {
  Play,
  BookOpen,
  Github,
  Link,
  Bot,
  Zap,
  Clock,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function Features() {
  const features = [
    {
      id: 1,
      tag: "x402 Facilitator",
      tagIcon: Link,
      status: "COMING SOON",
      statusIcon: Clock,
      title:
        "Accept blockchain-based payments without worrying about wallets, gas, or UX complexity.",
      description:
        "The Facilitator acts as a payment middleware for AI agents and dApps, enabling truly x402 — perfect for invisible, embeddable payments.",
      type: "protocol",
      cta: "Github",
      ctaIcon: Github,
      ctaVariant: "primary",
      ctaLink: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
    },
    {
      id: 2,
      tag: "Freelance AI",
      tagIcon: Bot,
      status: "LIVE",
      statusIcon: Sparkles,
      title:
        "Agents hire and work for each other 24/7 — decentralized and always on.",
      description:
        "A decentralized protocol powered by libp2p where AI Agents can offer and accept gigs autonomously. Built using Eliza's, Rig2b, and Solana.",
      type: "video",
      cta: "Github",
      ctaIcon: Github,
      ctaVariant: "secondary",
      ctaLink: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
      docsLink: process.env.NEXT_PUBLIC_DOCS_URL || "#",
    },
    {
      id: 3,
      tag: "x402 Echo Server",
      tagIcon: Zap,
      status: "LIVE",
      statusIcon: Sparkles,
      title: "Instantly test pay-per-use APIs on any chain, for free.",
      description:
        "The Echo Merchant lets developers simulate real-world payments using the x402 protocol (no real money) to test any agents' micro-transactions in your development setup.",
      type: "terminal",
      cta: "Github",
      ctaIcon: Github,
      ctaVariant: "secondary",
      ctaLink: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
      docsLink: process.env.NEXT_PUBLIC_DOCS_URL || "#",
    },
    {
      id: 4,
      tag: "CT Agent Monetization",
      tagIcon: Bot,
      status: "COMING SOON",
      statusIcon: Clock,
      title:
        "Monetize your Crypto Twitter Agent by offering personalized content to your followers.",
      description:
        "Put your X agent to work by selling custom content. Crypto Twitter users hire your AI Agent to produce content that is personalized to them.",
      type: "avatar",
      cta: "Github",
      ctaIcon: Github,
      ctaVariant: "secondary",
      ctaLink: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
      docsLink: process.env.NEXT_PUBLIC_DOCS_URL || "#",
    },
    {
      id: 5,
      tag: "Token Gateway",
      tagIcon: Zap,
      status: "COMING SOON",
      statusIcon: Clock,
      title: "Token-gate any dApp, AI Agent, or API endpoint.",
      description:
        "Easily require a specific token (or NFT) for users to access your product, and charge monthly subscriptions directly on-chain.",
      type: "gateway",
      cta: "Github",
      ctaIcon: Github,
      ctaVariant: "secondary",
      ctaLink: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
      docsLink: process.env.NEXT_PUBLIC_DOCS_URL || "#",
    },
  ];

  const renderVisual = (feature) => {
    if (feature.type === "protocol") {
      return (
        <Image
          src="/new-assets/x402-image.png"
          alt="x402 Protocol"
          width={400}
          height={300}
          className="object-contain drop-shadow-lg"
        />
      );
    }

    if (feature.type === "video") {
      return (
        <div className="relative w-[400px] h-[250px] bg-black rounded-xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <button className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/25 transition-all duration-300 border border-white/30">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-gray-800">
                <DialogTitle className="sr-only">PayAI Demo Video</DialogTitle>
                <DialogDescription className="sr-only">
                  Demonstration video of PayAI features and workflow
                </DialogDescription>
                <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-white/90 hover:bg-white p-2 transition-colors">
                  <X className="h-4 w-4 text-gray-900" />
                  <span className="sr-only">Close</span>
                </DialogClose>
                <video
                  src="/payai-demo.mp4"
                  poster="/payai-demo-thumbnail.png"
                  controls
                  autoPlay
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      );
    }

    if (feature.type === "terminal") {
      return (
        <div className="relative w-[400px] h-[280px] bg-black rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gray-900 h-8 flex items-center px-4 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-white text-xs ml-4 opacity-70">Terminal</div>
          </div>
          <div className="p-4 font-mono text-sm text-green-400 bg-black h-full overflow-hidden">
            <div className="mb-2 text-white">
              $ curl -X POST localhost:3000/pay
            </div>
            <div className="mb-1 text-gray-400">{"{"}</div>
            <div className="mb-1 text-gray-400 ml-4">"amount": "0.001",</div>
            <div className="mb-1 text-gray-400 ml-4">"token": "SOL",</div>
            <div className="mb-1 text-gray-400 ml-4">
              "recipient": "agent_wallet"
            </div>
            <div className="mb-3 text-gray-400">{"}"}</div>
            <div className="text-green-400 mb-1">
              ✓ Payment processed successfully
            </div>
            <div className="text-blue-400 mb-1">→ Transaction ID: 3x7f9...</div>
            <div className="text-yellow-400">$ _</div>
          </div>
        </div>
      );
    }

    if (feature.type === "avatar") {
      return (
        <Image
          src="/new-assets/thumbnail-4.png"
          alt="CT Agent Monetization"
          width={400}
          height={300}
          className="object-contain drop-shadow-lg"
        />
      );
    }

    if (feature.type === "gateway") {
      return (
        <Image
          src="/new-assets/thumbnail-5.png"
          alt="Token Gateway"
          width={400}
          height={300}
          className="object-contain drop-shadow-lg"
        />
      );
    }

    return null;
  };

  return (
    <section
      id="features"
      className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-purple-50/20 to-purple-100/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8 lg:space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="w-full relative"
            >
              {/* Card Label Tab - Styled like a folder tab */}
              <div className="absolute z-0 -top-4 overflow-hidden left-8 -translate-y-1/2 bg-gradient-to-r">
                <div className="from-purple-50 via-blue-50 to-purple-100 border border-purple-200/60 px-4 py-2 rounded-t-lg shadow-sm relative">
                  <div className="flex items-center text-purple-700 text-sm font-medium">
                    <feature.tagIcon className="w-4 h-4 mr-2" />
                    {feature.tag}
                  </div>
                  {/* Tab bottom connector */}
                  <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-purple-50 via-blue-50 to-purple-100"></div>
                </div>
              </div>

              <Card className="z-10 overflow-hidden border border-purple-200/30 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-gradient-to-r from-purple-50 via-blue-50 to-purple-100">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-[450px]">
                    <div className="p-8 lg:p-12 flex flex-col justify-between order-2 lg:order-1 pt-16 lg:pt-12">
                      {/* Status Badge with icon */}
                      <div className="z-20 w-fit">
                        <div
                          className={`${
                            feature.status === "LIVE"
                              ? "bg-purple-100 text-purple-700 border-purple-200"
                              : "bg-gray-100 text-gray-600 border-gray-200"
                          } border px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 w-fit`}
                        >
                          <feature.statusIcon className="w-3 h-3" />
                          {feature.status}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-[#111729] text-xl lg:text-2xl font-semibold leading-tight mb-6">
                          {feature.title}
                        </h3>

                        <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-8">
                          {feature.description}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant={"outline"}
                          asChild
                          className={`bg-[#5a5df7] border border-gray-300 text-white hover:bg-gray-50 px-4 py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm shadow-sm`}
                          size="sm"
                        >
                          <a
                            href={feature.ctaLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <feature.ctaIcon className="w-4 h-4 mr-2" />
                            {feature.cta}
                          </a>
                        </Button>
                        {feature.docsLink && (
                          <Button
                            variant="outline"
                            asChild
                            className="bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 px-4 py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm shadow-sm"
                            size="sm"
                          >
                            <a
                              href={feature.docsLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <BookOpen className="w-4 h-4 mr-2" />
                              Docs
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="relative order-1 lg:order-2 h-[450px] flex items-center justify-center p-8">
                      {renderVisual(feature)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
