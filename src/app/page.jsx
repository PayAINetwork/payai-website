import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { Header1 } from "./components/Header1";
import { AgentMarketplace } from "./components/AgentMarketplace";
import { HowItWorks } from "./components/HowItWorks";
import { UseCases } from "./components/UseCases";
import { Cta25 } from "./components/Cta25";
import { Header47 } from "./components/Header47";
import { HeaderX402 } from "./components/HeaderX402";
import { Contact23 } from "./components/Contact23";

export default function Page() {
  return (
    <div>
      <Navbar1 />
      <Header1 />
      <AgentMarketplace />
      <HowItWorks />
      <UseCases />
      <Cta25 />
      <Header47 />
      <HeaderX402 />
      <Contact23 />
    </div>
  );
}
