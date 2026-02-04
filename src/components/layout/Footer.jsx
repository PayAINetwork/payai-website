"use client";

import {
  Twitter,
  Github,
  Linkedin,
  Send,
  BookText,
  ChartCandlestick,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    {
      title: "Twitter",
      href: process.env.NEXT_PUBLIC_TWITTER_URL,
      Icon: Twitter,
    },
    {
      title: "LinkedIn",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      Icon: Linkedin,
    },
    {
      title: "Telegram",
      href: process.env.NEXT_PUBLIC_TELEGRAM_URL,
      Icon: Send,
    },
    { title: "Github", href: process.env.NEXT_PUBLIC_GITHUB_URL, Icon: Github },
    { title: "Docs", href: process.env.NEXT_PUBLIC_DOCS_URL, Icon: BookText },
    {
      title: "DexScreener",
      href: process.env.NEXT_PUBLIC_DEXSCREENER_URL,
      Icon: ChartCandlestick,
    },
  ];

  const developerLinks = [
    { label: "Documentation", href: process.env.NEXT_PUBLIC_DOCS_URL },
    { label: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB_URL },
  ].filter((l) => !!l.href);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <footer className="bg-white">
      <div className="border-y border-[#EDEDED]">
        <div className="container-payai bg-white w-full">
          <div className="grid lg:grid-cols-3 border-x divide-x divide-[#E4E4E7] border-[#E4E4E7]">
            <div className="w-full lg:col-span-3 p-4 lg:py-8 lg:px-10 flex flex-col lg:flex-row justify-between items-center border-b border-[#E4E4E7]">
              <div className="max-w-md">
                <Image
                  src="/horizontal-lockup.svg"
                  alt="PayAI Logo"
                  width={118}
                  height={52}
                />
                <p className="mt-3 font-medium text-[#09090B]">
                  Stay Up to Date with PayAI
                </p>
                <p className="mt-1.5 text-sm text-[#71717A]">
                  Get the latest product updates, ecosystem news, and insights
                  on real-time AI payments delivered to your inbox.
                </p>
              </div>

              <div className="mt-4 lg:mt-0 relative w-[300px] lg:w-[500px] h-14">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="w-full h-full border border-[#E4E4E7] rounded-xl px-4 pr-[160px] py-2.5 focus:outline-none"
                />

                <Link
                  href="#"
                  target="_blank"
                  className="absolute right-1 top-1 bottom-1 inline-flex items-center justify-center
      bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)]
      text-white px-4 py-2.5 text-sm font-medium rounded-lg
      shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]
      transition-colors hover:bg-[#FFFFFF]"
                >
                  Subscribe Now
                </Link>
              </div>
            </div>
            <div className="px-4 py-6 lg:p-10">
              <h4 className="text-sm text-[#71717A]">COMPANY</h4>
              <ul className="space-y-3 text-sm text-[#09090B] mt-6">
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/sales">Sales</Link>
                </li>
              </ul>
            </div>

            <div className="px-4 py-6 lg:p-10">
              <h4 className="text-sm text-[#71717A]">SUPPORT</h4>
              <ul className="space-y-3 text-sm text-[#09090B] mt-6">
                <li>
                  <Link href="/help">Help Center</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="px-4 py-6 lg:p-10">
              <h4 className="text-sm text-[#71717A]">LEGAL</h4>
              <ul className="space-y-3 text-sm text-[#09090B] mt-6">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms</Link>
                </li>
              </ul>
            </div>

            {/* FOOTER */}
            <div className="lg:col-span-3 border-t flex flex-row lg:flex-row flex-wrap gap-2 items-center justify-center lg:justify-between border-[#E4E4E7] py-6 lg:px-10">
              <div className="lg:hidden flex gap-4 items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_558_75752"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <path d="M20 0H0V20H20V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_558_75752)">
                    <path
                      d="M11.5133 8.75562L17.4327 1.875H16.0302L10.8902 7.84938L6.78515 1.875H2.05078L8.25828 10.9094L2.05078 18.125H3.45328L8.88078 11.8156L13.2158 18.125H17.9508L11.5133 8.75562ZM9.59203 10.9888L8.96328 10.0894L3.9589 2.93125H6.11328L10.152 8.70812L10.7808 9.6075L16.0308 17.1169H13.8764L9.59203 10.9888Z"
                      fill="black"
                    />
                  </g>
                </svg>

                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4595 11.5714V18.889H8.06641V6.24428H11.2672L11.3238 9.39982H11.1202C11.452 8.3442 11.9534 7.52987 12.6244 6.95682C13.3031 6.37623 14.1777 6.08594 15.2484 6.08594C16.1231 6.08594 16.8846 6.27821 17.5331 6.66275C18.189 7.03976 18.6942 7.58642 19.0486 8.30273C19.4105 9.0115 19.5915 9.85977 19.5915 10.8475V18.889H16.1985V11.4356C16.1985 10.6515 15.9949 10.0369 15.5877 9.59209C15.1881 9.14722 14.6301 8.92479 13.9138 8.92479C13.4388 8.92479 13.0128 9.03035 12.6358 9.24148C12.2663 9.44506 11.976 9.74289 11.7649 10.135C11.5613 10.5271 11.4595 11.0059 11.4595 11.5714Z"
                    fill="black"
                  />
                  <path
                    d="M1.77748 18.889V6.24419H5.17054V18.889H1.77748ZM3.47401 4.59291C2.96128 4.59291 2.52395 4.42325 2.16203 4.08396C1.8001 3.74465 1.61914 3.33371 1.61914 2.85115C1.61914 2.36858 1.8001 1.95764 2.16203 1.61834C2.52395 1.27903 2.96128 1.10938 3.47401 1.10938C3.98674 1.10938 4.42406 1.27903 4.78599 1.61834C5.15546 1.95009 5.34019 2.36103 5.34019 2.85115C5.34019 3.33371 5.15546 3.74465 4.78599 4.08396C4.42406 4.42325 3.98674 4.59291 3.47401 4.59291Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75003 0C13.5844 0 17.5 3.91562 17.5 8.75006C17.4988 12.5094 15.1006 15.8494 11.5394 17.0513C11.1019 17.1388 10.9375 16.8651 10.9375 16.6357C10.9375 16.3401 10.9488 15.3994 10.9488 14.2294C10.9488 13.4094 10.6756 12.8844 10.3581 12.6107C12.305 12.3919 14.3506 11.6482 14.3506 8.29062C14.3506 7.32812 14.0113 6.55125 13.4538 5.93937C13.5413 5.72062 13.8475 4.82375 13.3663 3.62062C13.3663 3.62062 12.6331 3.38 10.96 4.5175C10.26 4.32062 9.51633 4.2225 8.77253 4.2225C8.02875 4.2225 7.285 4.32062 6.585 4.5175C4.91188 3.39125 4.17875 3.62062 4.17875 3.62062C3.6975 4.82375 4.00375 5.72062 4.09125 5.93937C3.53375 6.55187 3.19438 7.33937 3.19438 8.29062C3.19438 11.6376 5.22875 12.3926 7.17563 12.6113C6.92375 12.8301 6.69438 13.2132 6.6175 13.7813C6.11438 14.0113 4.85625 14.3832 4.06938 13.0594C3.905 12.7969 3.41313 12.1519 2.72438 12.1626C1.99125 12.1738 2.42938 12.5782 2.735 12.7419C3.10688 12.9494 3.53313 13.7263 3.63188 13.9782C3.80688 14.4701 4.37563 15.4113 6.57375 15.0063C6.57375 15.7394 6.585 16.4282 6.585 16.6357C6.585 16.8657 6.42063 17.1276 5.98313 17.0513C2.40875 15.8613 -0.00186891 12.5169 1.0872e-06 8.74936C1.0872e-06 3.915 3.91563 0 8.75003 0Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8813 2.04595C17.7844 1.96233 17.6666 1.90672 17.5405 1.88511C17.4144 1.86349 17.2848 1.8767 17.1656 1.92329L1.33283 8.11939C1.10844 8.20664 0.91847 8.36443 0.791518 8.56899C0.664565 8.77355 0.607501 9.01382 0.628917 9.25362C0.650332 9.49342 0.749068 9.71977 0.910259 9.8986C1.07145 10.0774 1.28637 10.1991 1.52267 10.2452L5.62501 11.0506V15.6249C5.62421 15.874 5.69825 16.1177 5.83755 16.3242C5.97684 16.5308 6.17498 16.6908 6.40626 16.7835C6.6372 16.8778 6.89116 16.9004 7.13513 16.8484C7.37909 16.7964 7.60178 16.6723 7.77423 16.492L9.75236 14.4405L12.8906 17.1874C13.1171 17.3882 13.4091 17.4993 13.7117 17.4999C13.8444 17.4998 13.9762 17.4789 14.1024 17.4381C14.3086 17.3727 14.494 17.2544 14.6403 17.095C14.7865 16.9356 14.8885 16.7406 14.936 16.5295L18.107 2.73423C18.1354 2.60982 18.1294 2.48003 18.0896 2.35878C18.0498 2.23753 17.9778 2.12939 17.8813 2.04595ZM13.1047 4.85845L6.10548 9.87095L2.23048 9.11079L13.1047 4.85845ZM6.87501 15.6249V11.9155L8.81173 13.6139L6.87501 15.6249ZM13.7133 16.2499L7.25392 10.5858L16.5508 3.92251L13.7133 16.2499Z"
                    fill="#09090B"
                  />
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.125 3.75H12.5C12.0149 3.75 11.5364 3.86295 11.1025 4.07991C10.6685 4.29688 10.2911 4.61189 10 5C9.70892 4.61189 9.33147 4.29688 8.89754 4.07991C8.46362 3.86295 7.98514 3.75 7.5 3.75H1.875C1.70924 3.75 1.55027 3.81585 1.43306 3.93306C1.31585 4.05027 1.25 4.20924 1.25 4.375V15.625C1.25 15.7908 1.31585 15.9497 1.43306 16.0669C1.55027 16.1842 1.70924 16.25 1.875 16.25H7.5C7.99728 16.25 8.47419 16.4475 8.82583 16.7992C9.17746 17.1508 9.375 17.6277 9.375 18.125C9.375 18.2908 9.44085 18.4497 9.55806 18.5669C9.67527 18.6842 9.83424 18.75 10 18.75C10.1658 18.75 10.3247 18.6842 10.4419 18.5669C10.5592 18.4497 10.625 18.2908 10.625 18.125C10.625 17.6277 10.8225 17.1508 11.1742 16.7992C11.5258 16.4475 12.0027 16.25 12.5 16.25H18.125C18.2908 16.25 18.4497 16.1842 18.5669 16.0669C18.6842 15.9497 18.75 15.7908 18.75 15.625V4.375C18.75 4.20924 18.6842 4.05027 18.5669 3.93306C18.4497 3.81585 18.2908 3.75 18.125 3.75ZM7.5 15H2.5V5H7.5C7.99728 5 8.47419 5.19754 8.82583 5.54917C9.17746 5.90081 9.375 6.37772 9.375 6.875V15.625C8.83458 15.2183 8.17633 14.9989 7.5 15ZM17.5 15H12.5C11.8237 14.9989 11.1654 15.2183 10.625 15.625V6.875C10.625 6.37772 10.8225 5.90081 11.1742 5.54917C11.5258 5.19754 12.0027 5 12.5 5H17.5V15Z"
                    fill="#09090B"
                  />
                </svg>
              </div>
              <div className="flex gap-2 items-center px-3 py-2 bg-[#F0F0F0]/50 rounded-full">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="7"
                      fill="url(#paint0_linear_558_22991)"
                    >
                      <animate
                        attributeName="r"
                        from="7"
                        to="11"
                        dur="1.8s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="1"
                        to="0"
                        dur="1.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <g filter="url(#filter0_dd_558_22991)">
                      <circle
                        cx="12"
                        cy="12"
                        r="7"
                        fill="url(#paint0_linear_558_22991)"
                      >
                        <animate
                          attributeName="r"
                          values="6.8;7;6.8"
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                      </circle>
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
                        />
                        <feOffset />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0862745 0 0 0 0 0.639216 0 0 0 0 0.290196 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
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
                <span className="text-[#0A0A0A]/80">All systems normal</span>
              </div>
              <p className="text-[#0A0A0A]">© 2026 PayAI, Inc.</p>
              <div className="hidden lg:flex gap-4 items-center">
                <Link href={process.env.NEXT_PUBLIC_X_URL || "#"} target="_blank">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_558_75752"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <path d="M20 0H0V20H20V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_558_75752)">
                    <path
                      d="M11.5133 8.75562L17.4327 1.875H16.0302L10.8902 7.84938L6.78515 1.875H2.05078L8.25828 10.9094L2.05078 18.125H3.45328L8.88078 11.8156L13.2158 18.125H17.9508L11.5133 8.75562ZM9.59203 10.9888L8.96328 10.0894L3.9589 2.93125H6.11328L10.152 8.70812L10.7808 9.6075L16.0308 17.1169H13.8764L9.59203 10.9888Z"
                      fill="black"
                    />
                  </g>
                </svg>
                </Link>
                <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"} target="_blank">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4595 11.5714V18.889H8.06641V6.24428H11.2672L11.3238 9.39982H11.1202C11.452 8.3442 11.9534 7.52987 12.6244 6.95682C13.3031 6.37623 14.1777 6.08594 15.2484 6.08594C16.1231 6.08594 16.8846 6.27821 17.5331 6.66275C18.189 7.03976 18.6942 7.58642 19.0486 8.30273C19.4105 9.0115 19.5915 9.85977 19.5915 10.8475V18.889H16.1985V11.4356C16.1985 10.6515 15.9949 10.0369 15.5877 9.59209C15.1881 9.14722 14.6301 8.92479 13.9138 8.92479C13.4388 8.92479 13.0128 9.03035 12.6358 9.24148C12.2663 9.44506 11.976 9.74289 11.7649 10.135C11.5613 10.5271 11.4595 11.0059 11.4595 11.5714Z"
                    fill="black"
                  />
                  <path
                    d="M1.77748 18.889V6.24419H5.17054V18.889H1.77748ZM3.47401 4.59291C2.96128 4.59291 2.52395 4.42325 2.16203 4.08396C1.8001 3.74465 1.61914 3.33371 1.61914 2.85115C1.61914 2.36858 1.8001 1.95764 2.16203 1.61834C2.52395 1.27903 2.96128 1.10938 3.47401 1.10938C3.98674 1.10938 4.42406 1.27903 4.78599 1.61834C5.15546 1.95009 5.34019 2.36103 5.34019 2.85115C5.34019 3.33371 5.15546 3.74465 4.78599 4.08396C4.42406 4.42325 3.98674 4.59291 3.47401 4.59291Z"
                    fill="black"
                  />
                </svg>
                </Link>
                <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"} target="_blank">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75003 0C13.5844 0 17.5 3.91562 17.5 8.75006C17.4988 12.5094 15.1006 15.8494 11.5394 17.0513C11.1019 17.1388 10.9375 16.8651 10.9375 16.6357C10.9375 16.3401 10.9488 15.3994 10.9488 14.2294C10.9488 13.4094 10.6756 12.8844 10.3581 12.6107C12.305 12.3919 14.3506 11.6482 14.3506 8.29062C14.3506 7.32812 14.0113 6.55125 13.4538 5.93937C13.5413 5.72062 13.8475 4.82375 13.3663 3.62062C13.3663 3.62062 12.6331 3.38 10.96 4.5175C10.26 4.32062 9.51633 4.2225 8.77253 4.2225C8.02875 4.2225 7.285 4.32062 6.585 4.5175C4.91188 3.39125 4.17875 3.62062 4.17875 3.62062C3.6975 4.82375 4.00375 5.72062 4.09125 5.93937C3.53375 6.55187 3.19438 7.33937 3.19438 8.29062C3.19438 11.6376 5.22875 12.3926 7.17563 12.6113C6.92375 12.8301 6.69438 13.2132 6.6175 13.7813C6.11438 14.0113 4.85625 14.3832 4.06938 13.0594C3.905 12.7969 3.41313 12.1519 2.72438 12.1626C1.99125 12.1738 2.42938 12.5782 2.735 12.7419C3.10688 12.9494 3.53313 13.7263 3.63188 13.9782C3.80688 14.4701 4.37563 15.4113 6.57375 15.0063C6.57375 15.7394 6.585 16.4282 6.585 16.6357C6.585 16.8657 6.42063 17.1276 5.98313 17.0513C2.40875 15.8613 -0.00186891 12.5169 1.0872e-06 8.74936C1.0872e-06 3.915 3.91563 0 8.75003 0Z"
                    fill="black"
                  />
                </svg>
                </Link>
                <Link href={process.env.NEXT_PUBLIC_TELEGRAM_URL || "#"} target="_blank">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8813 2.04595C17.7844 1.96233 17.6666 1.90672 17.5405 1.88511C17.4144 1.86349 17.2848 1.8767 17.1656 1.92329L1.33283 8.11939C1.10844 8.20664 0.91847 8.36443 0.791518 8.56899C0.664565 8.77355 0.607501 9.01382 0.628917 9.25362C0.650332 9.49342 0.749068 9.71977 0.910259 9.8986C1.07145 10.0774 1.28637 10.1991 1.52267 10.2452L5.62501 11.0506V15.6249C5.62421 15.874 5.69825 16.1177 5.83755 16.3242C5.97684 16.5308 6.17498 16.6908 6.40626 16.7835C6.6372 16.8778 6.89116 16.9004 7.13513 16.8484C7.37909 16.7964 7.60178 16.6723 7.77423 16.492L9.75236 14.4405L12.8906 17.1874C13.1171 17.3882 13.4091 17.4993 13.7117 17.4999C13.8444 17.4998 13.9762 17.4789 14.1024 17.4381C14.3086 17.3727 14.494 17.2544 14.6403 17.095C14.7865 16.9356 14.8885 16.7406 14.936 16.5295L18.107 2.73423C18.1354 2.60982 18.1294 2.48003 18.0896 2.35878C18.0498 2.23753 17.9778 2.12939 17.8813 2.04595ZM13.1047 4.85845L6.10548 9.87095L2.23048 9.11079L13.1047 4.85845ZM6.87501 15.6249V11.9155L8.81173 13.6139L6.87501 15.6249ZM13.7133 16.2499L7.25392 10.5858L16.5508 3.92251L13.7133 16.2499Z"
                    fill="#09090B"
                  />
                </svg>
                </Link>
                 <Link href={process.env.NEXT_PUBLIC_DOCS_PAYAI_NETWORK || "#"} target="_blank">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.125 3.75H12.5C12.0149 3.75 11.5364 3.86295 11.1025 4.07991C10.6685 4.29688 10.2911 4.61189 10 5C9.70892 4.61189 9.33147 4.29688 8.89754 4.07991C8.46362 3.86295 7.98514 3.75 7.5 3.75H1.875C1.70924 3.75 1.55027 3.81585 1.43306 3.93306C1.31585 4.05027 1.25 4.20924 1.25 4.375V15.625C1.25 15.7908 1.31585 15.9497 1.43306 16.0669C1.55027 16.1842 1.70924 16.25 1.875 16.25H7.5C7.99728 16.25 8.47419 16.4475 8.82583 16.7992C9.17746 17.1508 9.375 17.6277 9.375 18.125C9.375 18.2908 9.44085 18.4497 9.55806 18.5669C9.67527 18.6842 9.83424 18.75 10 18.75C10.1658 18.75 10.3247 18.6842 10.4419 18.5669C10.5592 18.4497 10.625 18.2908 10.625 18.125C10.625 17.6277 10.8225 17.1508 11.1742 16.7992C11.5258 16.4475 12.0027 16.25 12.5 16.25H18.125C18.2908 16.25 18.4497 16.1842 18.5669 16.0669C18.6842 15.9497 18.75 15.7908 18.75 15.625V4.375C18.75 4.20924 18.6842 4.05027 18.5669 3.93306C18.4497 3.81585 18.2908 3.75 18.125 3.75ZM7.5 15H2.5V5H7.5C7.99728 5 8.47419 5.19754 8.82583 5.54917C9.17746 5.90081 9.375 6.37772 9.375 6.875V15.625C8.83458 15.2183 8.17633 14.9989 7.5 15ZM17.5 15H12.5C11.8237 14.9989 11.1654 15.2183 10.625 15.625V6.875C10.625 6.37772 10.8225 5.90081 11.1742 5.54917C11.5258 5.19754 12.0027 5 12.5 5H17.5V15Z"
                    fill="#09090B"
                  />
                </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
