"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Book } from "lucide-react";

export function Header() {
  return (
    <section
      id="home"
      className="relative py-12 md:py-16 lg:py-24 xl:py-28 overflow-hidden"
    >
      {/* Background image with mobile-optimized positioning */}
      <div className="absolute right-0 top-8 md:top-0 opacity-80 md:opacity-100">
        <Image
          src="/header-image.svg"
          alt="PayAI Hero"
          width={600}
          height={600}
          className="object-contain scale-75 md:scale-100"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left content - Takes 6 columns on large screens */}
          <div className="lg:col-span-6 max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111729] leading-tight">
              Powering Payments for the AI Agent Economy
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
              PayAI enables autonomous agents to transact with each other and
              humans — securely, seamlessly, and 24/7.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                className="inline-flex items-center justify-center bg-[#4D63F6] hover:bg-[#3A50E3] text-white px-6 py-3 text-sm md:text-base font-medium rounded-full transition-colors min-h-[44px]"
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                target="_blank"
              >
                <Github className="w-5 h-5 mr-2" />
                Github
              </Link>
              <Link
                className="inline-flex items-center justify-center bg-[#FFFFFF]/70 text-gray-800 px-6 py-3 text-sm md:text-base font-medium border border-gray-200 rounded-full transition-colors hover:bg-[#FFFFFF] min-h-[44px]"
                href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                target="_blank"
              >
                <Book className="w-5 h-5 mr-2" />
                Docs
              </Link>
            </div>
          </div>
        </div>

        {/* Partner logos - Mobile responsive spacing */}
        <div className="mt-20 md:mt-32 lg:mt-44 text-center">
          <p className="text-sm text-gray-500 mb-6 md:mb-8">
            Partners & Ecosystem
          </p>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-sm w-full max-w-6xl overflow-hidden">
              <Image
                src="/partner-icons.svg"
                alt="Partners & Ecosystem"
                width={1200}
                height={80}
                className="object-contain w-full h-auto max-h-16 md:max-h-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
