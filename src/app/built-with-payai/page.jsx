import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroBuiltWithPayai } from "@/components/sections/HeroBuiltWithPayai";
import { Projects } from "@/components/sections/Projects";
import { Why } from "@/components/sections/Why";
import { Blog } from "@/components/sections/Blog";
import { JoinUs } from "@/components/sections/JoinUs";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBuiltWithPayai />
      <Projects />
      <Why />
      <Blog showPrimary={false} />
      <JoinUs />
      <Footer />
    </div>
  );
}
