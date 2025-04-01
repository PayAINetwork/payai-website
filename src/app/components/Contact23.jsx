"use client";

import React from "react";
import { BiBook, BiLineChart, BiLogoGithub } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

export function Contact23() {
  return (
    <section id="links" className="bg-midnight px-[5%] pt-16 md:pt-24 lg:pt-28 pb-6 md:pt-12 md:pb-4 lg:pt-16 lg:py-8">
      <div className="container text-white">
        <div className="rb-12 mb-12 flex max-w-lg flex-col md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Connect</p>
          <h2 className="text-white rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Links
          </h2>
        </div>
        <div className="grid auto-cols-fr gap-x-8 gap-y-12 sm:gap-x-8 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank">
            <div className="flex flex-col items-center justify-start text-center hover:cursor-pointer hover:bg-opacity-80 hover:scale-105 hover:shadow-md active:scale-100 active:shadow-sm">
              <div className="mb-5 sm:mb-6">
                <BsTwitterX className="size-12" />
              </div>
              <h3 className="text-white mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
                Twitter
              </h3>
            </div>
          </a>
          <a href={process.env.NEXT_PUBLIC_DEXSCREENER_URL} target="_blank">
            <div className="flex flex-col items-center justify-start text-center hover:cursor-pointer hover:bg-opacity-80 hover:scale-105 hover:shadow-md active:scale-100 active:shadow-sm">
              <div className="mb-5 sm:mb-6">
                <BiLineChart className="size-12" />
              </div>
              <h3 className="text-white mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
                DexScreener
              </h3>
            </div>
          </a>
          <a href={process.env.NEXT_PUBLIC_DOCS_URL} target="_blank">
            <div className="flex flex-col items-center justify-start text-center hover:cursor-pointer hover:bg-opacity-80 hover:scale-105 hover:shadow-md active:scale-100 active:shadow-sm">
              <div className="mb-5 sm:mb-6">
                <BiBook className="size-12" />
              </div>
              <h3 className="text-white mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
                Docs
              </h3>
            </div>
          </a>
          <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank">
            <div className="flex flex-col items-center justify-start text-center hover:cursor-pointer hover:bg-opacity-80 hover:scale-105 hover:shadow-md active:scale-100 active:shadow-sm">
              <div className="mb-5 sm:mb-6">
                <BiLogoGithub className="size-12" />
              </div>
              <h3 className="text-white mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
                Github
              </h3>
            </div>
          </a>
        </div>
        <div className="text-white flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-16">
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <p className="mt-8 md:mt-0">© 2025 PayAI. All rights reserved. <br />$PAYAI is a utility token for use within the PayAI platform. Not for investment purposes.
                <a 
                    href={process.env.NEXT_PUBLIC_DOCS_URL + "/project-info/token-use-and-legal-disclaimer"}
                    target="_blank"
                >
                    Read full disclaimer.
                </a>
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
}
