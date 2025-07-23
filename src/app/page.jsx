import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { AgentMarketplace } from "./components/AgentMarketplace";
import { HowItWorks } from "./components/HowItWorks";
import { UseCases } from "./components/UseCases";
import { CallToAction } from "./components/CallToAction";
import { Tokenomics } from "./components/Tokenomics";
import { X402Protocol } from "./components/X402Protocol";
import { Links } from "./components/Links";

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
