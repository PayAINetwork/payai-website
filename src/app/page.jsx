import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Header } from "@/components/sections/Header";
import { Features } from "@/components/sections/Features";
import { AgentMarketplace } from "@/components/sections/AgentMarketplace";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCases } from "@/components/sections/UseCases";
import { CallToAction } from "@/components/sections/CallToAction";
import { Tokenomics } from "@/components/sections/Tokenomics";
import { X402Protocol } from "@/components/sections/X402Protocol";
import { Links } from "@/components/sections/Links";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <AgentMarketplace />
      <HowItWorks />
      <UseCases />
      <Tokenomics />
      <X402Protocol />
      <CallToAction />
      <Links />
    </div>
  );
}
