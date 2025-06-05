"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function HeaderX402() {
  return (
    <section id="tokenomics" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              X402
            </h1><br/>
            <p className="md:text-md">An open protocol for internet-native payments</p>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
                x402 enables users to pay for resources via API without registration, emails, OAuth, or complex signatures. <br/><br/>
                x402 unlocks new monetization models, offering developers and content creators a frictionless way to earn revenue from small transactions without forcing subscriptions or showing ads. <br/>
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button
                title="Buy Token"
                className="bg-midnight"
                onClick={() =>
                  window.open(
                    process.env.NEXT_PUBLIC_X402_URL,
                    '_blank'
                  )
                }
              >
                Try It Out Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
