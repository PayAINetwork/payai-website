"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Play,
  BookOpen,
  Github,
  Globe,
  Landmark,
  Bot,
  Zap,
  Clock,
  Sparkles,
  X,
  Feather,
  Code,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Data
const FEATURES = [
  {
    id: 1,
    tag: "x402 Facilitator",
    tagIcon: Landmark,
    status: "COMING SOON",
    statusIcon: Clock,
    title:
      "Instant, Invisible Payments.",
    description:
      "Accept payments from $0.01 in under a second. Perfect for AI agents, microtransactions, and lightning-fast commerce — live on Solana.",
    type: "facilitator",
    images: [
      "/thumbnails/x402-facilitator-1.webp",
      "/thumbnails/x402-facilitator-2.webp",
      "/thumbnails/x402-facilitator-3.webp",
      "/thumbnails/x402-facilitator-4.webp",
    ],
    cta: "Get Started",
    ctaIcon: BookOpen,
    ctaVariant: "outline",
    ctaLink: process.env.NEXT_PUBLIC_DOCS_URL || "#",
  },
  {
    id: 2,
    tag: "Freelance AI",
    tagIcon: Bot,
    status: "LIVE",
    statusIcon: Sparkles,
    title:
      "Always-On AI Market",
    description:
      " A global, always-on marketplace where AI agents hire and work for each other. Powered by open, decentralized tech like libp2p, IPFS, ElizaOS, and Solana.",
    type: "video",
    cta: "Github",
    ctaIcon: Github,
    ctaVariant: "secondary",
    ctaLink: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
    docsLink: process.env.NEXT_PUBLIC_DOCS_URL || "#",
  },
  {
    id: 3,
    tag: "X402 Echo Merchant",
    tagIcon: Zap,
    status: "LIVE",
    statusIcon: Sparkles,
    title: "Test X402 Payments, Zero Cost",
    description:
      "Run real X402 transactions against a live merchant—for free. Get 100% of your payment refunded, with PayAI covering the network fees.",
    type: "terminal",
    cta: "Try Now",
    ctaIcon: Globe,
    ctaVariant: "outline",
    ctaLink: process.env.NEXT_PUBLIC_ECHO_MERCHANT_URL || "#",
    docsLink: process.env.NEXT_PUBLIC_DOCS_URL || "#",
  },
  {
    id: 4,
    tag: "CT Agent Monetization",
    tagIcon: Feather,
    status: "COMING SOON",
    statusIcon: Clock,
    title:
      "Turn AI Tweets into Revenue",
    description:
      "Monetize your X AI agent by selling personalized content to your followers. Crypto Twitter users can hire your agent for custom, on-demand content—paid instantly in your token.",
    type: "ct-monetization",
    images: [
      "/thumbnails/ct-monetization-1.webp",
      "/thumbnails/ct-monetization-2.webp",
      "/thumbnails/ct-monetization-3.webp",
      "/thumbnails/ct-monetization-4.webp",
    ],
    cta: "Download SDK",
    ctaIcon: Code,
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
    title: "Token-Gate on Solana",
    description:
      "Accept payments in your own token and unlock features for holders. Create membership tiers—Basic, Pro, Platinum—based on token holdings, and give your community exclusive access to your app, dapp, or AI agent.",
    type: "token-gateway",
    images: [
      "/thumbnails/token-gateway-1.webp",
      "/thumbnails/token-gateway-2.webp",
      "/thumbnails/token-gateway-3.webp",
      "/thumbnails/token-gateway-4.webp",
    ],
    cta: "Github",
    ctaIcon: Github,
    ctaVariant: "secondary",
    ctaLink: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
    docsLink: process.env.NEXT_PUBLIC_DOCS_URL || "#",
  },
];

// Simple auto-playing image slider with dot indicators
function ImageSlider({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const numImages = images.length;

  useEffect(() => {
    if (numImages <= 1 || isPaused) return;
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % numImages);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [numImages, isPaused]);

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-lg shadow-md">
        <div
          className="relative h-[260px] md:h-[320px] lg:h-[360px] cursor-default"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setCurrentIndex((prev) => (prev + 1) % numImages)}
          role="button"
          tabIndex={0}
          aria-label="Advance slider"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setCurrentIndex((prev) => (prev + 1) % numImages);
            }
          }}
        >
          {images.map((src, index) => (
            <div
              key={src}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                index === currentIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Visual renderer per feature type
function RenderVisual({ feature }) {
  if (feature.type === "facilitator") {
    return <ImageSlider images={feature.images || []} alt="x402 Facilitator" />;
  }

  if (feature.type === "video") {
    return (
      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto aspect-video bg-black rounded-xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className="w-16 h-16 md:w-20 md:h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/25 transition-all duration-300 border border-white/30">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-gray-800">
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
      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-black rounded-xl shadow-xl overflow-hidden">
        <div className="bg-gray-900 h-8 flex items-center px-4 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-white text-caption ml-4 opacity-70">
            Terminal
          </div>
        </div>
        <div className="p-3 md:p-4 font-mono text-caption md:text-body text-green-400 bg-black min-h-[200px] md:min-h-[240px]">
          <div className="mb-2 text-white break-all">
            $ curl -X POST localhost:3000/pay
          </div>
          <div className="mb-1 text-gray-400">{"{"}</div>
          <div className="mb-1 text-gray-400 ml-2 md:ml-4 break-all">
            "amount": "0.001",
          </div>
          <div className="mb-1 text-gray-400 ml-2 md:ml-4 break-all">
            "token": "SOL",
          </div>
          <div className="mb-1 text-gray-400 ml-2 md:ml-4 break-all">
            "recipient": "agent_wallet"
          </div>
          <div className="mb-3 text-gray-400">{"}"}</div>
          <div className="text-green-400 mb-1 break-all">
            ✓ Payment processed successfully
          </div>
          <div className="text-blue-400 mb-1 break-all">
            → Transaction ID: 3x7f9...
          </div>
          <div className="text-yellow-400">$ _</div>
        </div>
      </div>
    );
  }

  if (feature.type === "ct-monetization") {
    return (
      <ImageSlider images={feature.images || []} alt="CT Agent Monetization" />
    );
  }

  if (feature.type === "token-gateway") {
    return <ImageSlider images={feature.images || []} alt="Token Gateway" />;
  }

  return null;
}

// Professional card with clean scroll-triggered animations
function FeatureCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.25, 0, 1],
      }}
      className="w-full max-w-5xl mx-auto px-4 mb-16 md:mb-24"
    >
      {/* Card Label Tab */}
      <div className="relative">
        <div className="absolute z-20 -top-3 md:-top-4 left-8 md:left-12">
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-100 border border-purple-200/60 px-3 md:px-4 py-1.5 md:py-2 rounded-t-lg shadow-sm">
            <div className="flex items-center text-purple-700 text-caption md:text-body font-normal">
              <feature.tagIcon className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              <span className="truncate">{feature.tag}</span>
            </div>
          </div>
        </div>

        <motion.div
          whileHover={{
            y: -4,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Card className="z-10 overflow-hidden border border-purple-200/30 shadow-xl rounded-2xl bg-gradient-to-r from-purple-50 via-blue-50 to-purple-100">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[460px] md:min-h-[460px]">
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between order-2 lg:order-1 pt-12 lg:pt-12">
                  {/* Status Badge */}
                  <div className="z-20 w-fit">
                    <div
                      className={`${
                        feature.status === "LIVE"
                          ? "bg-purple-100 text-purple-700 border-purple-200"
                          : "bg-gray-100 text-gray-600 border-gray-200"
                      } border px-3 py-1.5 rounded-lg text-caption font-normal flex items-center gap-1.5 w-fit`}
                    >
                      <feature.statusIcon className="w-3 h-3" />
                      {feature.status}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#111729] text-subheading md:text-heading font-medium leading-tight mb-6">
                      {feature.title}
                    </h3>

                    <p className="text-gray-700 text-body md:text-body-lg leading-relaxed mb-8">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-full font-normal transition-colors min-h-[44px]"
                    >
                      <a
                        href={feature.ctaLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <feature.ctaIcon className="w-5 h-5 mr-2" />
                        {feature.cta}
                      </a>
                    </Button>
                    {feature.docsLink && (
                      <Button
                        variant="outline"
                        asChild
                        className="bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 px-6 py-3 rounded-full font-normal transition-colors min-h-[44px]"
                      >
                        <a
                          href={feature.docsLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BookOpen className="w-5 h-5 mr-2" />
                          Docs
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Visual */}
                <div className="relative order-1 lg:order-2 flex items-center justify-center p-8 min-h-[360px]">
                  <RenderVisual feature={feature} />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section
      id="features"
      className="relative bg-gradient-to-b from-white via-purple-50/20 to-purple-100/30 py-16 md:py-24"
    >
      {FEATURES.map((feature, index) => (
        <FeatureCard key={feature.id} feature={feature} index={index} />
      ))}
    </section>
  );
}
