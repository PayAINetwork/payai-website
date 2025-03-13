"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="tokenomics" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Tokenomics
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              1,000,000,000 $PAYAI tokens. <br/><br/>
              This is the maximum token supply and cannot be changed. <br/>
              Token has been fair launched on&nbsp;
              <a href="https://pump.fun/coin/E7NgL19JbN8BhUDgWjkH8MtnbhJoaGaWJqosxZZepump" target="_blank" className="underline">
                pump.fun
              </a>.<br/><br/>
              100% of tokens are liquid on launch. <br/>
              Team will buy 20% of token supply for the Treasury on launch. <br/><br/>
              Treasury will be used for operations, marketing, and future token incentives for
              community, e.g. rewards, partnerships, etc. <br/><br/>
              Read docs for more info on tokenomics and token utility.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button
                title="Docs"
                variant="secondary"
                onClick={() => window.open(process.env.NEXT_PUBLIC_DOCS_URL + '/project-info/fees-and-token-utility', '_blank')}
              >
                Docs
              </Button>
              <Button
                title="Buy Token"
                className="bg-midnight"
                onClick={() =>
                  window.open(
                    process.env.NEXT_PUBLIC_BUY_TOKEN_URL,
                    '_blank'
                  )
                }
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
