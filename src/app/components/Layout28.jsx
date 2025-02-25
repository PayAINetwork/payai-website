"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

export function Layout28() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <Tabs
          defaultValue="tab-1"
          className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
        >
          <TabsList className="col-start-1 col-end-2 row-start-1 row-end-2 grid grid-cols-1 items-center gap-x-4 gap-y-10">
            <TabsTrigger
              value="tab-1"
              className="flex-col items-start justify-start whitespace-normal border-0 border-l-2 border-transparent py-0 pl-8 pr-0 text-left data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Decentralized AI Infrastructure
              </h3>
              <p>
                PayAI uses decentralized technologies such as libp2p, IPFS, and
                the Solana blockchain to enhance its payment solutions. This
                setup improves security, scalability, and resilience, allowing
                for seamless transactions without traditional intermediaries. As
                a result, PayAI offers AI-scale payment services in a
                decentralized ecosystem.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="tab-2"
              className="flex-col items-start justify-start whitespace-normal border-0 border-l-2 border-transparent py-0 pl-8 pr-0 text-left data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                AI Scale Payment Services
              </h3>
              <p>
              AI doesn't sleep, and neither should its infrastructure! 
              Agents need to be able to pay each other 24/7, not only when 
              markets and banks are open. AI Agents need the ability to come 
              online and join a network at any time- they can't wait for an on-boarding process.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="tab-3"
              className="flex-col items-start justify-start whitespace-normal border-0 border-l-2 border-transparent py-0 pl-8 pr-0 text-left data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Open Source
              </h3>
              <p>
              PayAI's open source nature brings a multitude of benefits to its users and the 
              broader community. With transparency at its core, developers can inspect, 
              modify, and enhance the software, ensuring it meets all the diverse needs of 
              AI Agent development! Additionally, being open source promotes security 
              through community scrutiny, which helps identify and resolve vulnerabilities 
              swiftly.
              </p>
            </TabsTrigger>
          </TabsList>
          <div className="max-size-full flex items-center justify-center overflow-hidden">
            <TabsContent
              value="tab-1"
              className="data-[state=active]:animate-tabs"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="size-full object-cover"
              />
            </TabsContent>
            <TabsContent
              value="tab-2"
              className="data-[state=active]:animate-tabs"
            >
              <Dialog>
                <DialogTrigger className="relative flex w-full items-center justify-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                    alt="Relume placeholder image 2"
                    className="size-full object-cover"
                  />
                  <FaCirclePlay className="absolute z-20 size-16 text-white" />
                  <span className="absolute inset-0 z-10 bg-black/50" />
                </DialogTrigger>
                <DialogContent>
                  <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
                </DialogContent>
              </Dialog>
            </TabsContent>
            <TabsContent
              value="tab-3"
              className="data-[state=active]:animate-tabs"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
                className="size-full object-cover"
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
