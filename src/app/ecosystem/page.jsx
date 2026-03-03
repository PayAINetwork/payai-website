import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroEcosystem } from "@/components/sections/HeroEcosystem";
import { Projects } from "@/components/sections/Projects";
import { Why } from "@/components/sections/Why";
import { Blog } from "@/components/sections/Blog";
import { JoinUs } from "@/components/sections/JoinUs";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
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
