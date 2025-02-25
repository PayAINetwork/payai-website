"use client";

import React from "react";
import TerminalCommand from "@/app/components/TerminalCommand";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container text-center">
        <h2 className="rb-5 mb-16 text-5xl font-bold md:mb-16 md:text-7xl lg:text-8xl">
          Get Started Today
        </h2>
        {/* <div className="relative mx-auto w-full max-w-2xl p-4 rounded-lg bg-black text-white shadow-lg 
            font-mono text-lg before:absolute before:inset-0 before:bg-gradient-to-b 
            before:from-black before:to-transparent">
          <pre>
            $ pnpm install @elizaos/eliza<br/>
            $ pnpm add @eliza-plugins/payai
          </pre>
        </div> */}
        <TerminalCommand />
        {/* <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button 
            title="Docs" 
            className="bg-black" 
            onClick={() => window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank")}
          >
            Docs
          </Button>
          <Button 
            title="Github" 
            variant="secondary" 
            onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")}
          >
            Github
          </Button>
        </div> */}
      </div>
    </section>
  );
}
