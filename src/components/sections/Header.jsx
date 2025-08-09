"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Book } from "lucide-react";

export function Header() {
  return (
    <section
      id="home"
      className="relative py-16 md:py-24 lg:py-28 overflow-hidden"
    >
      <div className="absolute right-0">
        <Image
          src="/header-image.svg"
          alt="PayAI Hero"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>
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
                className="inline-flex items-center justify-center bg-[#4D63F6] hover:bg-[#3A50E3] text-white px-5 py-2.5 text-sm font-medium rounded-full transition-colors"
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                target="_blank"
              >
                <Github className="w-5 h-5 mr-2" />
                Github
              </Link>
              <Link
                className="inline-flex items-center justify-center bg-[#FFFFFF]/70 text-gray-800 px-5 py-2.5 text-sm font-medium border border-gray-200 rounded-full transition-colors hover:bg-[#FFFFFF]"
                href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                target="_blank"
              >
                <Book className="w-5 h-5 mr-2" />
                Docs
              </Link>
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="mt-44 text-center">
          <p className="text-sm text-gray-500 mb-8">Partners & Ecosystem</p>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-sm">
              <Image
                src="/partner-icons.svg"
                alt="Partners & Ecosystem"
                width={1200}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
