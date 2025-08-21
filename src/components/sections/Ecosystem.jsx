"use client";

import React from "react";

export function Ecosystem() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 bg-gradient-to-b from-purple-100/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm border border-gray-200/30 rounded-3xl p-12 lg:p-16">
          {/* Header section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
            <div>
              <h2 className="text-[#111729] text-3xl lg:text-4xl font-semibold leading-tight">
                Backed by a Growing Ecosystem
              </h2>
            </div>
            <div>
              <p className="text-gray-500 text-base leading-relaxed">
                Join a thriving network of AI developers, Web3 builders, and ecosystem partners using PayAI to build the agent economy.
              </p>
            </div>
          </div>
          
          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-left">
              <div className="text-4xl lg:text-5xl font-bold text-[#4D63F6] mb-2">
                3,000+
              </div>
              <div className="text-gray-500 text-sm">
                Agent-to-Agent Interactions
              </div>
            </div>
            
            <div className="text-left">
              <div className="text-4xl lg:text-5xl font-bold text-[#4D63F6] mb-2">
                10+
              </div>
              <div className="text-gray-500 text-sm">
                Ecosystem Partners
              </div>
            </div>
            
            <div className="text-left">
              <div className="text-4xl lg:text-5xl font-bold text-[#4D63F6] mb-2">
                5
              </div>
              <div className="text-gray-500 text-sm">
                Developer SDKs Released
              </div>
            </div>
            
            <div className="text-left">
              <div className="text-4xl lg:text-5xl font-bold text-[#4D63F6] mb-2">
                12
              </div>
              <div className="text-gray-500 text-sm">
                Demos Live &amp; In Testing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}