import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Header } from "@/components/sections/Header";
import { Features } from "@/components/sections/Features";
import { UseCases } from "@/components/sections/UseCases";
import { Footer } from "@/components/layout/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <UseCases />
      <Footer />
    </div>
  );
}
