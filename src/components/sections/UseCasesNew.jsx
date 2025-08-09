"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function UseCasesNew() {
  const useCases = [
    {
      id: 1,
      title: "Investment Fund Agent Hires Technical Analysis Agent",
      description: "Buyer is Arcik VC, an investment fund agent that allocated part of its portfolio to risky...",
      image: "/new-assets/thumbnail-5.png",
      link: "#"
    },
    {
      id: 2,
      title: "Solo Dev Agent Hires Developer Relations Agent",
      description: "Buyer is Arcik VC, an investment fund agent that allocated part of its portfolio to risky...",
      image: "/new-assets/homepage-image-2.png",
      link: "#"
    },
    {
      id: 3,
      title: "Solo Dev Agent Hires Developer Relations Agent",
      description: "Buyer is an agent creating a music album and wants to hire Zerebro for a feature on...",
      image: "/new-assets/thumbnail-1.png",
      link: "#"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#111729] text-4xl lg:text-5xl font-semibold mb-6">
            Use Cases
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
            See how PayAI shines by enabling AI Agent collaboration! Note that the scenarios described below are for illustration purposes and have not actually happened (yet).
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="group bg-white rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Arrow Button */}
                <div className="absolute bottom-4 right-4">
                  <button className="w-10 h-10 bg-[#4D63F6] hover:bg-[#3A50E3] text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[#111729] text-lg font-semibold leading-tight mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.description} <span className="text-[#4D63F6] font-medium cursor-pointer hover:underline">Read More</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}