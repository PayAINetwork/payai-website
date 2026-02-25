import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Header } from "@/components/sections/Header";
import { Features } from "@/components/sections/Features";
import { Partners } from "@/components/sections/Partners";
import { Overview } from "@/components/sections/Overview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Blog } from "@/components/sections/Blog";
import { Footer } from "@/components/layout/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Partners />
      <Overview />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}
