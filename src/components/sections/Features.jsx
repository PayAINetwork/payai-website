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
  Plug,
  Landmark,
  Bot,
  Zap,
  Clock,
  Sparkles,
  X,
  Feather,
  Code,
  Rocket,
  Pointer,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Hook: Swipe navigation helpers for sliders
function useSwipeNavigation({
  numItems,
  onNext,
  onPrev,
  onPause,
  onResume,
  threshold = 40,
}) {
  const touchStartXRef = useRef(null);
  const touchDeltaXRef = useRef(0);
  const isTouchingRef = useRef(false);
  const swipeHandledRef = useRef(false);

  const handleTouchStart = (e) => {
    if (numItems <= 1) return;
    isTouchingRef.current = true;
    swipeHandledRef.current = false;
    touchStartXRef.current = e.touches[0].clientX;
    touchDeltaXRef.current = 0;
    onPause?.();
  };

  const handleTouchMove = (e) => {
    if (!isTouchingRef.current || touchStartXRef.current === null) return;
    const currentX = e.touches[0].clientX;
    touchDeltaXRef.current = currentX - touchStartXRef.current;
  };

  const handleTouchEnd = () => {
    if (!isTouchingRef.current) return;
    const deltaX = touchDeltaXRef.current;
    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0) {
        onNext?.();
      } else {
        onPrev?.();
      }
      swipeHandledRef.current = true;
    }
    isTouchingRef.current = false;
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
    onResume?.();
  };

  const handleClick = (e) => {
    if (swipeHandledRef.current || isTouchingRef.current) {
      swipeHandledRef.current = false;
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const isLeft = clickX < rect.width / 2;
    if (isLeft) {
      onPrev?.();
    } else {
      onNext?.();
    }
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onClick: handleClick,
  };
}

// Data
const FEATURES = [
  {
    id: 1,
    tag: "x402 Facilitator",
    tagIcon: Landmark,
    status: "LIVE",
    statusIcon: Sparkles,
    title: "Instant, Invisible Payments.",
    description:
      "Accept payments from $0.01 in under a second. Perfect for AI agents, microtransactions, and lightning-fast commerce — live on Solana.",
    type: "facilitator",
    images: [
      "/thumbnails/x402-facilitator-1.webp",
      "/thumbnails/x402-facilitator-2.webp",
      "/thumbnails/x402-facilitator-3.webp",
      "/thumbnails/x402-facilitator-4.webp",
    ],
    primaryCta: {
      label: "Get Started",
      icon: Rocket,
      href: process.env.NEXT_PUBLIC_DOCS_URL_X402_FACILITATOR || "#",
    },
  },
  {
    id: 2,
    tag: "X402 Echo Merchant",
    tagIcon: Zap,
    status: "LIVE",
    statusIcon: Sparkles,
    title: "Test X402 Payments, Zero Cost",
    description:
      "Run real X402 transactions against a live merchant—for free. Get 100% of your payment refunded, with PayAI covering the network fees.",
    type: "terminal",
    primaryCta: {
      label: "Try Now",
      icon: Pointer,
      href: process.env.NEXT_PUBLIC_WEBSITE_URL_X402_ECHO || "#",
    },
    secondaryCta: {
      label: "Docs",
      icon: BookOpen,
      href: process.env.NEXT_PUBLIC_DOCS_URL_X402_ECHO || "#",
    },
  },
  {
    id: 3,
    tag: "Freelance AI",
    tagIcon: Bot,
    status: "LIVE",
    statusIcon: Sparkles,
    title: "Always-On AI Market",
    description:
      " A global, always-on marketplace where AI agents hire and work for each other. Powered by open, decentralized tech like libp2p, IPFS, ElizaOS, and Solana.",
    type: "video",
    primaryCta: {
      label: "Get Plugin",
      icon: Plug,
      href: process.env.NEXT_PUBLIC_GITHUB_URL_FREELANCE_AI || "#",
    },
    secondaryCta: {
      label: "Docs",
      icon: BookOpen,
      href: process.env.NEXT_PUBLIC_DOCS_URL_FREELANCE_AI || "#",
    },
  },
  {
    id: 4,
    tag: "CT Agent Monetization",
    tagIcon: Feather,
    status: "COMING SOON",
    statusIcon: Clock,
    title: "Turn AI Tweets into Revenue",
    description:
      "Monetize your X AI agent by selling personalized content to your followers. Crypto Twitter users can hire your agent for custom, on-demand content—paid instantly in your token.",
    type: "ct-monetization",
    images: [
      "/thumbnails/ct-monetization-1.webp",
      "/thumbnails/ct-monetization-2.webp",
      "/thumbnails/ct-monetization-3.webp",
      "/thumbnails/ct-monetization-4.webp",
    ],
    primaryCta: {
      label: "Download SDK",
      icon: Code,
      href: process.env.NEXT_PUBLIC_GITHUB_URL_CT_MONETIZATION || "#",
      disabled: true,
    },
    secondaryCta: {
      label: "Docs",
      icon: BookOpen,
      href: process.env.NEXT_PUBLIC_DOCS_URL_CT_MONETIZATION || "#",
      disabled: false,
    },
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
    primaryCta: {
      label: "Github",
      icon: Github,
      href: process.env.NEXT_PUBLIC_GITHUB_URL_TOKEN_GATEWAY || "#",
      disabled: true,
    },
    secondaryCta: {
      label: "Docs",
      icon: BookOpen,
      href: process.env.NEXT_PUBLIC_DOCS_URL_TOKEN_GATEWAY || "#",
      disabled: false,
    },
  },
];

// Simple auto-playing image slider with dot indicators
function ImageSlider({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const numImages = images.length;

  const swipe = useSwipeNavigation({
    numItems: numImages,
    threshold: 40,
    onNext: () => setCurrentIndex((prev) => (prev + 1) % numImages),
    onPrev: () => setCurrentIndex((prev) => (prev - 1 + numImages) % numImages),
    onPause: () => setIsPaused(true),
    onResume: () => setIsPaused(false),
  });

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
          onTouchStart={swipe.onTouchStart}
          onTouchMove={swipe.onTouchMove}
          onTouchEnd={swipe.onTouchEnd}
          onClick={swipe.onClick}
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
                index === currentIndex ? "opacity-100" : "opacity-0",
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
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                index === currentIndex ? "bg-blue-600" : "bg-gray-300",
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
                <div className="p-8 lg:p-12 flex flex-col justify-between order-2 lg:order-1 pt-0 md:pt-4 lg:pt-12">
                  <div>
                    <h3 className="mt-4 md:mt-6 text-[#111729] text-subheading md:text-heading font-medium leading-tight mb-4">
                      {feature.title}
                    </h3>

                    {/* Status Badge below title */}
                    <div className="mb-6 w-fit">
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

                    <p className="text-gray-700 text-body md:text-body-lg leading-relaxed mb-8">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {feature.secondaryCta &&
                      (feature.secondaryCta.disabled ? (
                        <Button
                          className="inline-flex items-center justify-center bg-white/60 px-6 py-3 text-body font-normal border border-gray-200 rounded-full min-h-[44px] text-gray-400 cursor-not-allowed shadow-none"
                          disabled
                          title="Coming soon"
                        >
                          <feature.secondaryCta.icon className="w-5 h-5 mr-2" />
                          {feature.secondaryCta.label}
                        </Button>
                      ) : (
                        <Button
                          asChild
                          className="inline-flex items-center justify-center bg-white/70 px-6 py-3 text-body font-normal border border-gray-200 rounded-full transition-colors hover:bg-white min-h-[44px]"
                        >
                          <a
                            href={feature.secondaryCta.href}
                            target="_blank"
                            rel="noreferrer"
                            className="gap-0"
                          >
                            <feature.secondaryCta.icon className="w-5 h-5 mr-2" />
                            {feature.secondaryCta.label}
                          </a>
                        </Button>
                      ))}
                    {feature.primaryCta &&
                      (feature.primaryCta.disabled ? (
                        <Button
                          className="inline-flex items-center justify-center bg-primary/60 px-6 py-3 text-body font-normal rounded-full min-h-[44px] text-white/90 cursor-not-allowed shadow-none"
                          disabled
                          title="Coming soon"
                        >
                          <feature.primaryCta.icon className="w-5 h-5 mr-2" />
                          {feature.primaryCta.label}
                        </Button>
                      ) : (
                        <Button
                          asChild
                          className="inline-flex items-center justify-center bg-primary hover:bg-primary-700 px-6 py-3 text-body font-normal rounded-full transition-colors min-h-[44px]"
                        >
                          <a
                            href={feature.primaryCta.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white gap-0"
                          >
                            <feature.primaryCta.icon className="w-5 h-5 mr-2" />
                            {feature.primaryCta.label}
                          </a>
                        </Button>
                      ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="relative order-1 lg:order-2 flex items-center justify-center p-8 pt-12 lg:pt-8 min-h-[360px]">
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
    <section id="features" className="bg-white flex border-y border-[#E4E4E7]">
      <Image
        src="/features/bg-side.svg"
        alt="background-left"
        width="80"
        height="572"
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2  border-x border-[#E4E4E7]">
        <div className="px-[60px] py-20 grid grid-cols-2">
          <div className="col-span-2">
            <h2 className="text-[#09090B] font-medium text-[36px]">
              PayAI simplifies x402 payments for merchants
            </h2>
            <p className="text-[#0A0A0A]/60 mt-4">
              PayAI is a facilitator of the x402 payment standard, supporting
              usage-based payments for AI Agents, SaaS, and traditional
              applications. It enables fast and secure payments across digital
              currencies.
            </p>
          </div>
          <div>
            <h2 className="text-[#09090B] font-medium text-[36px]">
              1 Seconds
            </h2>
            <p className="text-[#0A0A0A]/60 mt-4">
              Payments are verified and settled.
            </p>
          </div>
          <div>
            <h2 className="text-[#09090B] font-medium text-[36px]">99.9%</h2>
            <p className="text-[#0A0A0A]/60 mt-4">
              Payment Success Rate across supported networks
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="px-8 py-10 border border-[#EDEDED] hover:bg-[#F6F8FF] hover:border-b-[3px] hover:border-b-[#1D45D8]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3.375C15.1075 3.375 12.2799 4.23274 9.87479 5.83976C7.46972 7.44677 5.5952 9.73089 4.48827 12.4033C3.38134 15.0756 3.09171 18.0162 3.65602 20.8532C4.22033 23.6902 5.61323 26.2961 7.65857 28.3414C9.70391 30.3868 12.3098 31.7797 15.1468 32.344C17.9838 32.9083 20.9244 32.6187 23.5968 31.5117C26.2691 30.4048 28.5532 28.5303 30.1602 26.1252C31.7673 23.7201 32.625 20.8926 32.625 18C32.6209 14.1225 31.0788 10.4049 28.3369 7.66309C25.5951 4.92125 21.8775 3.37909 18 3.375ZM18 30.375C15.5525 30.375 13.1599 29.6492 11.1248 28.2894C9.08977 26.9297 7.50363 24.9969 6.567 22.7357C5.63036 20.4745 5.3853 17.9863 5.86279 15.5858C6.34028 13.1852 7.51889 10.9802 9.24956 9.24955C10.9802 7.51888 13.1852 6.34027 15.5858 5.86278C17.9863 5.38529 20.4745 5.63036 22.7357 6.56699C24.997 7.50363 26.9297 9.08976 28.2894 11.1248C29.6492 13.1599 30.375 15.5525 30.375 18C30.3713 21.2809 29.0663 24.4264 26.7463 26.7463C24.4264 29.0663 21.2809 30.3713 18 30.375ZM23.625 20.8125C23.625 21.8568 23.2102 22.8583 22.4717 23.5967C21.7333 24.3352 20.7318 24.75 19.6875 24.75H19.125V25.875C19.125 26.1734 19.0065 26.4595 18.7955 26.6705C18.5845 26.8815 18.2984 27 18 27C17.7016 27 17.4155 26.8815 17.2045 26.6705C16.9935 26.4595 16.875 26.1734 16.875 25.875V24.75H14.625C14.3266 24.75 14.0405 24.6315 13.8295 24.4205C13.6185 24.2095 13.5 23.9234 13.5 23.625C13.5 23.3266 13.6185 23.0405 13.8295 22.8295C14.0405 22.6185 14.3266 22.5 14.625 22.5H19.6875C20.1351 22.5 20.5643 22.3222 20.8807 22.0057C21.1972 21.6893 21.375 21.2601 21.375 20.8125C21.375 20.3649 21.1972 19.9357 20.8807 19.6193C20.5643 19.3028 20.1351 19.125 19.6875 19.125H16.3125C15.2682 19.125 14.2667 18.7102 13.5283 17.9717C12.7898 17.2333 12.375 16.2318 12.375 15.1875C12.375 14.1432 12.7898 13.1417 13.5283 12.4033C14.2667 11.6648 15.2682 11.25 16.3125 11.25H16.875V10.125C16.875 9.82663 16.9935 9.54048 17.2045 9.3295C17.4155 9.11853 17.7016 9 18 9C18.2984 9 18.5845 9.11853 18.7955 9.3295C19.0065 9.54048 19.125 9.82663 19.125 10.125V11.25H21.375C21.6734 11.25 21.9595 11.3685 22.1705 11.5795C22.3815 11.7905 22.5 12.0766 22.5 12.375C22.5 12.6734 22.3815 12.9595 22.1705 13.1705C21.9595 13.3815 21.6734 13.5 21.375 13.5H16.3125C15.865 13.5 15.4357 13.6778 15.1193 13.9943C14.8028 14.3107 14.625 14.7399 14.625 15.1875C14.625 15.6351 14.8028 16.0643 15.1193 16.3807C15.4357 16.6972 15.865 16.875 16.3125 16.875H19.6875C20.7318 16.875 21.7333 17.2898 22.4717 18.0283C23.2102 18.7667 23.625 19.7682 23.625 20.8125Z"
                fill="#1D45D8"
              />
            </svg>

            <h3 className="text-lg mt-14">Pay-Per-Request Pricing</h3>
            <p className="text-[#71717A] mt-2">
              Charge per request, action, or usage — ideal for APIs, AI agents,
              and real-time services.
            </p>
          </div>
          <div className="px-8 py-10 border border-[#EDEDED] hover:bg-[#F6F8FF] hover:border-b-[3px] hover:border-b-[#1D45D8]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.3455 16.6176C30.3029 16.4373 30.2164 16.2703 30.0937 16.1315C29.9711 15.9926 29.816 15.8862 29.6423 15.8217L21.5409 12.7828L23.6025 2.47076C23.6492 2.23117 23.6167 1.98289 23.5099 1.76339C23.403 1.5439 23.2278 1.36509 23.0104 1.25396C22.7931 1.14283 22.5455 1.10541 22.305 1.14734C22.0645 1.18926 21.8442 1.30826 21.6773 1.48639L5.92733 18.3614C5.79941 18.4962 5.70687 18.6606 5.65798 18.8398C5.60909 19.0191 5.60537 19.2077 5.64716 19.3888C5.68894 19.5699 5.77493 19.7377 5.89744 19.8775C6.01994 20.0172 6.17516 20.1244 6.3492 20.1895L14.4534 23.2284L12.3975 33.5292C12.3508 33.7688 12.3833 34.0171 12.4901 34.2366C12.5969 34.4561 12.7722 34.6349 12.9896 34.746C13.2069 34.8571 13.4545 34.8946 13.6949 34.8526C13.9354 34.8107 14.1557 34.6917 14.3226 34.5136L30.0726 17.6386C30.1982 17.5038 30.2888 17.3401 30.3364 17.1621C30.384 16.9841 30.3871 16.7971 30.3455 16.6176ZM15.3801 30.0937L16.8525 22.7278C16.9052 22.4666 16.8634 22.1951 16.7347 21.9618C16.6059 21.7284 16.3985 21.5484 16.1494 21.4537L8.71874 18.6623L20.6184 5.91326L19.1475 13.2792C19.0948 13.5404 19.1365 13.8119 19.2653 14.0452C19.3941 14.2785 19.6015 14.4586 19.8506 14.5533L27.2756 17.3376L15.3801 30.0937Z"
                fill="#1D45D8"
              />
            </svg>

            <h3 className="text-lg mt-14">Instant Settlement</h3>
            <p className="text-[#71717A] mt-2">
              Payments settle immediately, with no delays or manual
              reconciliation.
            </p>
          </div>
          <div className="px-8 py-10 border border-[#EDEDED] hover:bg-[#F6F8FF] hover:border-b-[3px] hover:border-b-[#1D45D8]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.125 6.75H19.125V2.25C19.125 1.95163 19.0065 1.66548 18.7955 1.4545C18.5845 1.24353 18.2984 1.125 18 1.125C17.7016 1.125 17.4155 1.24353 17.2045 1.4545C16.9935 1.66548 16.875 1.95163 16.875 2.25V6.75H7.875C6.68153 6.75 5.53693 7.22411 4.69302 8.06802C3.84911 8.91193 3.375 10.0565 3.375 11.25V27C3.375 28.1935 3.84911 29.3381 4.69302 30.182C5.53693 31.0259 6.68153 31.5 7.875 31.5H28.125C29.3185 31.5 30.4631 31.0259 31.307 30.182C32.1509 29.3381 32.625 28.1935 32.625 27V11.25C32.625 10.0565 32.1509 8.91193 31.307 8.06802C30.4631 7.22411 29.3185 6.75 28.125 6.75ZM30.375 27C30.375 27.5967 30.1379 28.169 29.716 28.591C29.294 29.0129 28.7217 29.25 28.125 29.25H7.875C7.27826 29.25 6.70597 29.0129 6.28401 28.591C5.86205 28.169 5.625 27.5967 5.625 27V11.25C5.625 10.6533 5.86205 10.081 6.28401 9.65901C6.70597 9.23705 7.27826 9 7.875 9H28.125C28.7217 9 29.294 9.23705 29.716 9.65901C30.1379 10.081 30.375 10.6533 30.375 11.25V27ZM23.0625 19.125H12.9375C11.8932 19.125 10.8917 19.5398 10.1533 20.2783C9.41484 21.0167 9 22.0182 9 23.0625C9 24.1068 9.41484 25.1083 10.1533 25.8467C10.8917 26.5852 11.8932 27 12.9375 27H23.0625C24.1068 27 25.1083 26.5852 25.8467 25.8467C26.5852 25.1083 27 24.1068 27 23.0625C27 22.0182 26.5852 21.0167 25.8467 20.2783C25.1083 19.5398 24.1068 19.125 23.0625 19.125ZM19.6875 21.375V24.75H16.3125V21.375H19.6875ZM11.25 23.0625C11.25 22.6149 11.4278 22.1857 11.7443 21.8693C12.0607 21.5528 12.4899 21.375 12.9375 21.375H14.0625V24.75H12.9375C12.4899 24.75 12.0607 24.5722 11.7443 24.2557C11.4278 23.9393 11.25 23.5101 11.25 23.0625ZM23.0625 24.75H21.9375V21.375H23.0625C23.5101 21.375 23.9393 21.5528 24.2557 21.8693C24.5722 22.1857 24.75 22.6149 24.75 23.0625C24.75 23.5101 24.5722 23.9393 24.2557 24.2557C23.9393 24.5722 23.5101 24.75 23.0625 24.75ZM10.125 15.1875C10.125 14.8537 10.224 14.5275 10.4094 14.25C10.5948 13.9725 10.8584 13.7562 11.1667 13.6285C11.4751 13.5007 11.8144 13.4673 12.1417 13.5324C12.4691 13.5975 12.7697 13.7583 13.0057 13.9943C13.2417 14.2303 13.4025 14.5309 13.4676 14.8583C13.5327 15.1856 13.4993 15.5249 13.3715 15.8333C13.2438 16.1416 13.0275 16.4052 12.75 16.5906C12.4725 16.776 12.1463 16.875 11.8125 16.875C11.3649 16.875 10.9357 16.6972 10.6193 16.3807C10.3028 16.0643 10.125 15.6351 10.125 15.1875ZM22.5 15.1875C22.5 14.8537 22.599 14.5275 22.7844 14.25C22.9698 13.9725 23.2334 13.7562 23.5417 13.6285C23.8501 13.5007 24.1894 13.4673 24.5167 13.5324C24.8441 13.5975 25.1447 13.7583 25.3807 13.9943C25.6167 14.2303 25.7775 14.5309 25.8426 14.8583C25.9077 15.1856 25.8743 15.5249 25.7465 15.8333C25.6188 16.1416 25.4025 16.4052 25.125 16.5906C24.8475 16.776 24.5213 16.875 24.1875 16.875C23.7399 16.875 23.3107 16.6972 22.9943 16.3807C22.6778 16.0643 22.5 15.6351 22.5 15.1875Z"
                fill="#1D45D8"
              />
            </svg>

            <h3 className="text-lg mt-14">Client & Agent Payments</h3>
            <p className="text-[#71717A] mt-2">
              Enable seamless payments between clients, apps, and AI agents
              through web flows.
            </p>
          </div>
          <div className="px-8 py-10 border border-[#EDEDED] hover:bg-[#F6F8FF] hover:border-b-[3px] hover:border-b-[#1D45D8]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.375 13.5H14.625C14.3266 13.5 14.0405 13.6185 13.8295 13.8295C13.6185 14.0405 13.5 14.3266 13.5 14.625V21.375C13.5 21.6734 13.6185 21.9595 13.8295 22.1705C14.0405 22.3815 14.3266 22.5 14.625 22.5H21.375C21.6734 22.5 21.9595 22.3815 22.1705 22.1705C22.3815 21.9595 22.5 21.6734 22.5 21.375V14.625C22.5 14.3266 22.3815 14.0405 22.1705 13.8295C21.9595 13.6185 21.6734 13.5 21.375 13.5ZM20.25 20.25H15.75V15.75H20.25V20.25ZM32.625 20.25H30.375V15.75H32.625C32.9234 15.75 33.2095 15.6315 33.4205 15.4205C33.6315 15.2095 33.75 14.9234 33.75 14.625C33.75 14.3266 33.6315 14.0405 33.4205 13.8295C33.2095 13.6185 32.9234 13.5 32.625 13.5H30.375V7.875C30.375 7.27826 30.1379 6.70597 29.716 6.28401C29.294 5.86205 28.7217 5.625 28.125 5.625H22.5V3.375C22.5 3.07663 22.3815 2.79048 22.1705 2.5795C21.9595 2.36853 21.6734 2.25 21.375 2.25C21.0766 2.25 20.7905 2.36853 20.5795 2.5795C20.3685 2.79048 20.25 3.07663 20.25 3.375V5.625H15.75V3.375C15.75 3.07663 15.6315 2.79048 15.4205 2.5795C15.2095 2.36853 14.9234 2.25 14.625 2.25C14.3266 2.25 14.0405 2.36853 13.8295 2.5795C13.6185 2.79048 13.5 3.07663 13.5 3.375V5.625H7.875C7.27826 5.625 6.70597 5.86205 6.28401 6.28401C5.86205 6.70597 5.625 7.27826 5.625 7.875V13.5H3.375C3.07663 13.5 2.79048 13.6185 2.5795 13.8295C2.36853 14.0405 2.25 14.3266 2.25 14.625C2.25 14.9234 2.36853 15.2095 2.5795 15.4205C2.79048 15.6315 3.07663 15.75 3.375 15.75H5.625V20.25H3.375C3.07663 20.25 2.79048 20.3685 2.5795 20.5795C2.36853 20.7905 2.25 21.0766 2.25 21.375C2.25 21.6734 2.36853 21.9595 2.5795 22.1705C2.79048 22.3815 3.07663 22.5 3.375 22.5H5.625V28.125C5.625 28.7217 5.86205 29.294 6.28401 29.716C6.70597 30.1379 7.27826 30.375 7.875 30.375H13.5V32.625C13.5 32.9234 13.6185 33.2095 13.8295 33.4205C14.0405 33.6315 14.3266 33.75 14.625 33.75C14.9234 33.75 15.2095 33.6315 15.4205 33.4205C15.6315 33.2095 15.75 32.9234 15.75 32.625V30.375H20.25V32.625C20.25 32.9234 20.3685 33.2095 20.5795 33.4205C20.7905 33.6315 21.0766 33.75 21.375 33.75C21.6734 33.75 21.9595 33.6315 22.1705 33.4205C22.3815 33.2095 22.5 32.9234 22.5 32.625V30.375H28.125C28.7217 30.375 29.294 30.1379 29.716 29.716C30.1379 29.294 30.375 28.7217 30.375 28.125V22.5H32.625C32.9234 22.5 33.2095 22.3815 33.4205 22.1705C33.6315 21.9595 33.75 21.6734 33.75 21.375C33.75 21.0766 33.6315 20.7905 33.4205 20.5795C33.2095 20.3685 32.9234 20.25 32.625 20.25ZM28.125 28.125H7.875V7.875H28.125V21.3567C28.125 21.3567 28.125 21.3694 28.125 21.375C28.125 21.3806 28.125 21.3877 28.125 21.3933V28.125Z"
                fill="#1D45D8"
              />
            </svg>

            <h3 className="text-lg mt-14">x402 Standard Adoption</h3>
            <p className="text-[#71717A] mt-2">
              Adopt the x402 standard without handling blockchain complexity,
              fees, or settlement logic.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/features/bg-side.svg"
        alt="background-right"
        width="80"
        height="572"
      />
    </section>
  );
}
