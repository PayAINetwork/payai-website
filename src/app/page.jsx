export const revalidate = 3600;

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Header } from "@/components/sections/Header";
import { Partners } from "@/components/sections/Partners";
import { AgentSDK } from "@/components/sections/AgentSDK";
import { Facilitator } from "@/components/sections/Facilitator";
import { MeetBuyers } from "@/components/sections/MeetBuyers";
import { IntegrateOnce } from "@/components/sections/IntegrateOnce";
import { CommandCenter } from "@/components/sections/CommandCenter";
import { BuilderTestimonials } from "@/components/sections/BuilderTestimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { Footer } from "@/components/layout/Footer";
import { ShuffledLogosProvider } from "@/context/ShuffledLogosContext";

export default function Page() {
  return (
    <ShuffledLogosProvider>
      <div>
        <Navbar />
        <Header />
        <Partners />
        <AgentSDK />
        <Facilitator />
        <MeetBuyers />
        <IntegrateOnce />
        <CommandCenter />
        <BuilderTestimonials />
        <FAQ />
        <Blog />
        <Footer />
      </div>
    </ShuffledLogosProvider>
  );
}
