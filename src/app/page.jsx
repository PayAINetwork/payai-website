import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
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
      <AgentMarketplace />
      <HowItWorks />
      <UseCases />
      <CallToAction />
      <Tokenomics />
      <X402Protocol />
      <Links />
    </div>
  );
}
