import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { div } from "framer-motion/client";

const OVERVIEW_DATA = [
  {
    src: "/overview/facilitator.svg",
    title: "Start Selling Immediately",
    description:
      "Accept payments from $0.01 to $1,000,000. Perfect for all use cases. Whether it is microtransactions for AI Agents, one-time sales for digital content, or recurring sales for SaaS.",
    isLive: true,
    badge: "x402 Facilitator",
  },
  {
    src: "/overview/merchant.svg",
    title: "Test Payments Against a Live Merchant",
    description:
      "Run real x402 transactions against a live merchant—for free. Get 100% of your test payment refunded, with PayAI covering the network fees.",
    isLive: true,
    badge: "x402 Echo Merchant",
  },
  {
    src: "/overview/payment.svg",
    title: "Receive payments to one account, distribute to multiple.",
    description:
      "Payment empowers marketplaces and workflows where there are multiple final recipients.",
    isLive: false,
    badge: "Payment Splitting",
  },
  {
    src: "/overview/token.svg",
    title: "Cross-Network Payments",
    description:
      "Get paid no matter where your customers are. More networks, more sales.",
    isLive: false,
    badge: "Token Gateway",
  },
];

const OverviewCard = ({ src, title, description, badge, isLive }) => {
  return (
    <div className="flex border-y border-[#E4E4E7] h-[450px]">
      <Image
        src="/features/bg-side.svg"
        alt="background-left"
        width="80"
        height="450"
        className="h-[450px] object-cover"
      />
      <div className="grid grid-cols-2 border border-[#E4E4E7] bg-white h-[450px] w-full">
        <div className="px-8 py-10 w-full flex flex-col justify-between">
          <div className="flex gap-3">
            <span className="px-4 py-2 rounded-[10px] border border-[#4D63F6] font-medium text-[#1D45D8] shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
              {badge}
            </span>
            <span className="inline-flex items-center gap-2 px-4 rounded-[10px] border border-[#E4E4E7] font-medium text-[#09090B] shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
              {isLive ? (
                <>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_558_22991)">
                      <circle
                        cx="12"
                        cy="12"
                        r="7"
                        fill="url(#paint0_linear_558_22991)"
                      />
                      <circle cx="12" cy="12" r="7.5" stroke="white" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd_558_22991"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="2"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect1_dropShadow_558_22991"
                        />
                        <feOffset />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0862745 0 0 0 0 0.639216 0 0 0 0 0.290196 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_558_22991"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="4"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect2_dropShadow_558_22991"
                        />
                        <feOffset />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0862745 0 0 0 0 0.639216 0 0 0 0 0.290196 0 0 0 0.2 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_558_22991"
                          result="effect2_dropShadow_558_22991"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_558_22991"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_558_22991"
                        x1="12"
                        y1="5"
                        x2="12"
                        y2="19"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#29DD6B" />
                        <stop offset="1" stopColor="#25AA56" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span>Live Now</span>
                </>
              ) : (
                <>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 5.25V10.5H14.4375M18.375 10.5C18.375 11.5342 18.1713 12.5582 17.7756 13.5136C17.3798 14.4691 16.7997 15.3372 16.0685 16.0685C15.3372 16.7997 14.4691 17.3798 13.5136 17.7756C12.5582 18.1713 11.5342 18.375 10.5 18.375C9.46584 18.375 8.44181 18.1713 7.48637 17.7756C6.53093 17.3798 5.6628 16.7997 4.93153 16.0685C4.20027 15.3372 3.6202 14.4691 3.22445 13.5136C2.82869 12.5582 2.625 11.5342 2.625 10.5C2.625 8.41142 3.45469 6.40838 4.93153 4.93153C6.40838 3.45469 8.41142 2.625 10.5 2.625C12.5886 2.625 14.5916 3.45469 16.0685 4.93153C17.5453 6.40838 18.375 8.41142 18.375 10.5Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>Coming Soon</span>
                </>
              )}
            </span>
          </div>
          <div>
            <h3 className="text-[32px] font-medium text-[#09090B]">{title}</h3>
            <p className="text-[#0A0A0A]/60 mt-2">{description}</p>
            <div className="mt-8 flex flex-row flex-wrap gap-3">
              <Link
                className="inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-4 py-2.5 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg transition-colors hover:bg-[#FFFFFF]"
                href={process.env.NEXT_PUBLIC_WEBSITE_URL_X402_ECHO || "#"}
                target="_blank"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                className="inline-flex items-center justify-center  bg-[#FFFFFF]/70 text-gray-800 px-4 py-2.5 text-sm font-medium border border-[$#E4E4E7] rounded-lg transition-colors hover:bg-[#FFFFFF] shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                href={process.env.NEXT_PUBLIC_WEBSITE_URL_X402_ECHO || "#"}
                target="_blank"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <Image src={src} alt={title} fill className="object-cover" />
        </div>
      </div>
      <Image
        src="/features/bg-side.svg"
        alt="background-right"
        width="80"
        height="450"
        className="h-[450px] object-cover"
      />
    </div>
  );
};

export const Overview = () => {
  return (
    <section className="bg-white">
      <div className="container pt-20 pb-8">
        <div className="max-w-[540px]">
          <h2 className="text-[36px] text-[#09090B] font-medium">
            Fast, Scalable, and Ready for Any Use Case
          </h2>
          <p className="text-lg text-[#0A0A0A]/60 mt-4">
            PayAI is a faciltiator for the x402 protocol, enabling merchants to
            accept stablecoin payments and micropayments with just a few lines
            of code.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        {OVERVIEW_DATA.map((item, index) => (
          <OverviewCard
            key={index}
            src={item.src}
            title={item.title}
            description={item.description}
            badge={item.badge}
            isLive={item.isLive}
          />
        ))}
      </div>
    </section>
  );
};
