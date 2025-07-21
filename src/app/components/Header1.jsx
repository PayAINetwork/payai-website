"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header1() {
  return (
    <section id="home" className="px-[5%] py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-x-24 gap-y-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column - Developer Focus */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-midnight text-6xl font-bold md:text-8xl lg:text-9xl tracking-tight">
                Build your agents.
                <br />
                Get paid instantly.
              </h1>
              <p className="text-midnight text-lg md:text-xl lg:text-2xl leading-relaxed">
                PayAI is the payments layer for AI Agents. Open-source
                infrastructure for autonomous agent transactions.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-base md:text-lg leading-normal">
                Built on ElizaOS, libp2p, IPFS, and Solana. Ready for developers
                today with SDKs, docs, and live demos.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  title="Get API Key"
                  className="bg-midnight"
                  onClick={() =>
                    window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank")
                  }
                >
                  Get API Key
                </Button>
                <Button
                  title="Try Demo"
                  variant="secondary"
                  onClick={() =>
                    window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")
                  }
                >
                  Try Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <img
              src="/header-image.png"
              className="w-full rounded-lg shadow-lg object-cover"
              alt="AI Agent Economy Visualization"
            />
            <div className="absolute top-4 right-4 bg-white/90 rounded-lg p-3 shadow-md">
              <div className="text-sm text-midnight space-y-1">
                <div className="font-bold">Live Products:</div>
                <div className="text-xs space-y-0.5">
                  <div>• Freelance AI Marketplace</div>
                  <div>• MCP Plugin</div>
                  <div>• Echo Merchant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
