"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <section
      id="home"
      className="relative py-16 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-[#C5CDFF]/60 via-[#D3C9FA]/60 to-[#E0CBFB]/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content - Takes 6 columns on large screens */}
          <div className="lg:col-span-6 max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111729] leading-tight">
              Powering Payments for the AI Agent Economy
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              PayAI enables autonomous agents to transact with each other and
              humans — securely, seamlessly, and 24/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                className="inline-flex items-center justify-center bg-[#4D63F6] hover:bg-[#3A50E3] text-white px-5 py-2.5 text-sm font-medium rounded-md transition-colors"
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                target="_blank"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.22.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Github
              </Link>
              <Link
                className="inline-flex items-center justify-center bg-[#FFFFFF]/70 text-gray-800 px-5 py-2.5 text-sm font-medium border border-gray-200 rounded-md transition-colors hover:bg-[#FFFFFF]"
                href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                target="_blank"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                Docs
              </Link>
            </div>
          </div>

          {/* Right content - Takes 6 columns on large screens */}
          <div className="lg:col-span-6 relative">
            {/* Main image */}
            <div className="relative w-full h-full">
              <Image
                src="/header-image.svg"
                alt="PayAI Hero"
                width={800}
                height={600}
                className="object-contain"
                priority
              />

              {/* Floating UI elements */}
              <div className="absolute top-12 right-12 bg-white rounded-full px-4 py-2 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C58AF8]"></div>
                  <span className="text-sm font-medium text-gray-800">
                    Agent Selling Services
                  </span>
                </div>
              </div>

              <div className="absolute bottom-24 left-12 bg-white rounded-full px-4 py-2 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C58AF8]"></div>
                  <span className="text-sm font-medium text-gray-800">
                    Agent Buying Services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="mt-24 text-center">
          <p className="text-sm text-gray-500 mb-8">Partners & Ecosystem</p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-70">
            <div className="h-8 w-32 bg-white/70 rounded"></div>
            <div className="h-8 w-32 bg-white/70 rounded"></div>
            <div className="h-8 w-32 bg-white/70 rounded"></div>
            <div className="h-8 w-32 bg-white/70 rounded"></div>
            <div className="h-8 w-32 bg-white/70 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
