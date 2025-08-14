import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Header } from "@/components/sections/Header";
import { Features } from "@/components/sections/Features";
import { Blog } from "@/components/sections/Blog";
import { Footer } from "@/components/layout/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Blog />
      <Footer />
    </div>
  );
}
