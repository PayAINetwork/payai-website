export const revalidate = 3600;

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroEcosystem } from "@/components/sections/HeroEcosystem";
import { Projects } from "@/components/sections/Projects";
import { Why } from "@/components/sections/Why";
import { Blog } from "@/components/sections/Blog";
import { JoinUs } from "@/components/sections/JoinUs";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "PayAI Ecosystem",
  description:
    "Explore projects, tools, and teams building agentic commerce and x402 payment infrastructure across the PayAI ecosystem.",
  alternates: {
    canonical: "https://payai.network/ecosystem",
  },
};

export default function Ecosystem() {
  return (
    <div className="min-h-screen">
      <Navbar activePage="projects" />
      <HeroEcosystem />
      <Projects />
      <Why />
      <Blog variant="case-studies" />
      <JoinUs />
      <Footer />
    </div>
  );
}
