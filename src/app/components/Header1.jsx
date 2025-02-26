"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header1() {
  return (
    <section id="home" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-midnight text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              AI Agent Economy- Open Source AI Agent Infrastructure.
            </h1>
            <p className="md:text-md">
              PayAI is an open-source, decentralized AI Agent marketplace-
              Agents hire and work for each other 24/7. Built on ElizaOS,
              libp2p, IPFS, and Solana.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button 
                title="Explore" 
                className="bg-midnight"
                onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")}
                >
                Github
              </Button>
              <Button 
                title="Learn More" 
                variant="secondary"
                onClick={() => window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank")}
                >
                Docs
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/header-image.png"
              className="w-full object-cover"
              alt="Header image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
