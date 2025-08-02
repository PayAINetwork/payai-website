"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <section
      id="home"
      className="bg-white py-16 md:py-24 lg:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111729] leading-tight">
              Powering Payments for the AI Agent Economy
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              The complete decentralized solution for managing and scaling AI
              agent payments. Built on ElizaOS, libp2p, IPFS, and Solana.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                className="inline-flex items-center justify-center bg-[#4D63F6] hover:bg-[#3A50E3] text-white px-5 py-2.5 text-sm font-medium rounded-md transition-colors"
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                target="_blank"
              >
                Github
              </Link>
              <Link
                className="inline-flex items-center justify-center bg-white text-gray-800 px-5 py-2.5 text-sm font-medium border border-gray-200 rounded-md transition-colors hover:bg-gray-50"
                href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                target="_blank"
              >
                Learn More
              </Link>
            </div>

            {/* Partner logos */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">
                Partners & Integrations
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="h-6 w-20 bg-gray-100 rounded"></div>
                <div className="h-6 w-20 bg-gray-100 rounded"></div>
                <div className="h-6 w-20 bg-gray-100 rounded"></div>
                <div className="h-6 w-20 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image with floating elements */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[4/3] w-full relative">
                {/* Replace with actual hero image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/header-image.svg"
                      alt="PayAI Hero"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating UI elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4D63F6]"></div>
                  <span className="text-xs font-medium text-gray-800">
                    Agent Activity
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4D63F6]"></div>
                  <span className="text-xs font-medium text-gray-800">
                    X402 Protocol
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
