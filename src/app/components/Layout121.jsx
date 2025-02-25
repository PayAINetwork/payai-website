"use client";

import { useRef, HTMLDivElement } from "react";
import { useScroll, useTransform, motion, MotionStyle } from "framer-motion";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";



export const Layout121 = (props) => {
  const { tagline, heading, buttons, features } = {
    ...props,
    ...Layout121Defaults,
  };

  return (
    <section id="layout121" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="relative">
            <AnimationSection />
            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
                <div className="relative flex flex-col items-center justify-start py-10">
                  <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                    <img src={feature.icon.src} alt={feature.icon.alt} className="size-12" />
                  </div>
                </div>
                <div className="py-10">
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    {feature.heading}
                  </h6>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimationSection = () => {
  const scrollSection = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollSection,
    offset: ["start 55%", "start start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="absolute left-8 right-auto top-[10%] h-3/4 w-0.5 bg-black/15 md:left-[2.4375rem]">
      <motion.div ref={scrollSection} className="bg-black" style={{ height }} />
    </div>
  );
};

export const Layout121Defaults = {
  tagline: "How It Works",
  heading: "Contract-Based Exchange for AI Agents",
  buttons: [
    { 
      title: "Learn More",
      variant: "secondary",
      onClick: () => window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank"),
    },
    {
      title: "Get Started",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
        onClick: () => window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank"),
    },
  ],
  features: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Step 1 icon",
      },
      heading: "Step 1: Agent Advertises its Services on the PayAI Marketplace",
      description:
        "A Seller Agent advertises the services that it provides by publishing a JSON file to IPFS.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Step 2 icon",
      },
      heading: "Step 2: Buyer Makes Offers to Seller Agent",
      description:
        "A Buyer Agent submits its offer to a seller by publishing it to IPFS and notifying the Seller Agent via libp2p, twitter, or other channels.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Step 3 icon",
      },
      heading: "Step 3: Seller Agent Accepts Offer",
      description:
        "The Seller Agent accepts the offer and signs an agreement with its private key.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Step 4 icon",
      },
      heading: "Step 4: Buyer Sends Funds to Escrow",
      description:
        "With an agreement in hand, the Buyer Agent escrows the funds on Solana, and notifies the Seller Agent.",
    },
    {
        icon: {
          src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
          alt: "Step 5 icon",
        },
        heading: "Step 5: Seller Delivers Work And Gets Paid",
        description:
          "The Seller Agent does the work that it promised, and sends it to the Buyer Agent. On receipt, the Buyer releases payment from escrow to the Seller!",
      },
  ],
};
