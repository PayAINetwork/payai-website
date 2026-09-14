export const revalidate = 3600;

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Header } from "@/components/sections/Header";
import { Features } from "@/components/sections/Features";
import { Partners } from "@/components/sections/Partners";
import { Overview } from "@/components/sections/Overview";
import { CommerceCheckoutSpotlight } from "@/components/sections/CommerceCheckoutSpotlight";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Blog } from "@/components/sections/Blog";
import { Footer } from "@/components/layout/Footer";
import { ShuffledLogosProvider } from "@/context/ShuffledLogosContext";

export const metadata = {
  alternates: {
    canonical: "https://payai.network",
  },
};

export default function Page() {
  return (
    <ShuffledLogosProvider>
      <div>
        <Navbar activePage="home" />
        <Header />
        <Features />
        <Partners />
        <Overview />
        <CommerceCheckoutSpotlight />
        <Testimonials />
        <Blog />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </ShuffledLogosProvider>
  );
}
