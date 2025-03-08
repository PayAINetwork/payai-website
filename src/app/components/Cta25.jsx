"use client";

import React from "react";
import TerminalCommand from "@/app/components/TerminalCommand";

export function Cta25() {
  return (
    <section id="cta25" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container text-center">
        <h2 className="rb-5 mb-16 text-5xl font-bold md:mb-16 md:text-7xl lg:text-8xl">
          Get Started Today
        </h2>
        <TerminalCommand />
      </div>
    </section>
  );
}
