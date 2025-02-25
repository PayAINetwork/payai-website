"use client";

import React from "react";

export function Footer4() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <p className="mt-8 md:mt-0">© 2025 PayAI. All rights reserved.</p>
          </ul>
        </div>
      </div>
    </footer>
  );
}
