"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Github, Linkedin, Send, BookText } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      title: "Twitter",
      href: process.env.NEXT_PUBLIC_TWITTER_URL,
      Icon: Twitter,
    },
    {
      title: "Telegram",
      href: process.env.NEXT_PUBLIC_TELEGRAM_URL,
      Icon: Send,
    },
    {
      title: "DexScreener",
      href: process.env.NEXT_PUBLIC_DEXSCREENER_URL,
      Icon: BookText,
    },
    { title: "Docs", href: process.env.NEXT_PUBLIC_DOCS_URL, Icon: BookText },
    { title: "Github", href: process.env.NEXT_PUBLIC_GITHUB_URL, Icon: Github },
    {
      title: "LinkedIn",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      Icon: Linkedin,
    },
  ].filter((l) => !!l.href);

  const developerLinks = [
    { label: "Documentation", href: process.env.NEXT_PUBLIC_DOCS_URL },
    { label: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB_URL },
  ].filter((l) => !!l.href);

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="px-[5%] pt-16 pb-24 relative z-0">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4L4 10L16 16L28 10L16 4Z"
                    fill="#E6EEFF"
                    stroke="#4D63F6"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 22L16 28L28 22"
                    stroke="#4D63F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 16L16 22L28 16"
                    stroke="#4D63F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-lg font-semibold text-midnight">
                  PayAI
                </span>
              </Link>
              <p className="mt-4 text-sm text-gray-600 max-w-xs">
                Powering payments for the AI Agent Economy. Tools and
                infrastructure for autonomous agent transactions.
              </p>

              {/* Social */}
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map(({ title, href, Icon }) => (
                  <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={title}
                    className="inline-flex items-center justify-center size-9 rounded-full border border-gray-200 bg-white text-midnight hover:text-[#3A50E3] hover:border-gray-300 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D63F6]/40"
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={2.25} />
                  </a>
                ))}
              </div>
            </div>

            {/* Developers (only linked items) */}
            <div>
              <h4 className="text-sm font-semibold text-midnight tracking-wide mb-4">
                Developers
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {developerLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      className="hover:text-midnight transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-midnight tracking-wide mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-midnight transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-midnight transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom watermark */}
      <div className="pointer-events-none select-none absolute inset-x-0 bottom-[-0.25rem] -z-10 text-[6rem] md:text-[9rem] lg:text-[12rem] leading-none font-bold text-gray-100/60 tracking-tight truncate">
        <div className="px-[5%]">payai.network</div>
      </div>
    </footer>
  );
}
