"use client";

import React from "react";
import { BiBook, BiLineChart, BiLogoGithub } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

export function Contact23() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 flex max-w-lg flex-col md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Connect</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Quick Links
          </h2>
        </div>
        <div className="grid auto-cols-fr gap-x-8 gap-y-12 sm:gap-x-8 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank">
            <div className="flex flex-col items-center justify-start text-center hover:cursor-pointer hover:bg-opacity-80 hover:scale-105 hover:shadow-md active:scale-100 active:shadow-sm">
              <div className="mb-5 sm:mb-6">
                <BsTwitterX className="size-12" />
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
                Twitter
              </h3>
            </div>
          </a>
          <a href={process.env.NEXT_PUBLIC_DEXSCREENER_URL} target="_blank">
            <div className="flex flex-col items-center justify-start text-center hover:cursor-pointer hover:bg-opacity-80 hover:scale-105 hover:shadow-md active:scale-100 active:shadow-sm">
              <div className="mb-5 sm:mb-6">
                <BiLineChart className="size-12" />
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
                DexScreener
              </h3>
            </div>
          </a>
          <a href={process.env.NEXT_PUBLIC_DOCS_URL} target="_blank">
            <div className="flex flex-col items-center justify-start text-center hover:cursor-pointer hover:bg-opacity-80 hover:scale-105 hover:shadow-md active:scale-100 active:shadow-sm">
              <div className="mb-5 sm:mb-6">
                <BiBook className="size-12" />
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
                Docs
              </h3>
            </div>
          </a>
          <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank">
            <div className="flex flex-col items-center justify-start text-center hover:cursor-pointer hover:bg-opacity-80 hover:scale-105 hover:shadow-md active:scale-100 active:shadow-sm">
              <div className="mb-5 sm:mb-6">
                <BiLogoGithub className="size-12" />
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
                Github
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
