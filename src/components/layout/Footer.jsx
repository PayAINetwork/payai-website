"use client";

import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { LEGAL_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="border-y border-[#EDEDED]">
        <div className="container-payai bg-white w-full">
          <div className="grid lg:grid-cols-4 border-x divide-x divide-[#E4E4E7] border-[#E4E4E7]">
            <div className="w-full lg:col-span-4 p-4 lg:py-8 lg:px-10 flex flex-col lg:flex-row justify-between items-center border-b border-[#E4E4E7]">
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
                  href={
                    process.env.NEXT_PUBLIC_SUBSCRIBE_URL ||
                    process.env.NEXT_PUBLIC_BLOG_PAYAI_NETWORK ||
                    "https://blog.payai.network"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <a href={process.env.NEXT_PUBLIC_CAREERS_URL} target="_blank" rel="noopener noreferrer">Careers</a>
                </li>
                <li>
                  <a href={process.env.NEXT_PUBLIC_SALES_URL} target="_blank" rel="noopener noreferrer">Sales</a>
                </li>
              </ul>
            </div>

            <div className="px-4 py-6 lg:p-10">
              <h4 className="text-sm text-[#71717A]">SUPPORT</h4>
              <ul className="space-y-3 text-sm text-[#09090B] mt-6">
                <li>
                  <a href={process.env.NEXT_PUBLIC_BLOG_PAYAI_NETWORK} target="_blank" rel="noopener noreferrer">Blog</a>
                </li>
                <li>
                  <a href={process.env.NEXT_PUBLIC_DISCORD_URL} target="_blank" rel="noopener noreferrer">Discord</a>
                </li>
                <li>
                  <a href={process.env.NEXT_PUBLIC_DOCS_PAYAI_NETWORK} target="_blank" rel="noopener noreferrer">Documentation</a>
                </li>
                <li>
                  <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noopener noreferrer">Github</a>
                </li>
              </ul>
            </div>

            {/*
              Agent- and developer-facing surfaces. Linked from the rendered
              page so they are discoverable by crawlers and by anyone reading
              the site, not only by agents that already know the conventions.
            */}
            <div className="px-4 py-6 lg:p-10">
              <h4 className="text-sm text-[#71717A]">DEVELOPERS</h4>
              <ul className="space-y-3 text-sm text-[#09090B] mt-6">
                <li>
                  <Link href="/developers">Developer Portal</Link>
                </li>
                <li>
                  <Link href="/x402-commerce-checkout">Anthropic Commerce Checkout</Link>
                </li>
                <li>
                  <a href="/openapi.json">API Reference</a>
                </li>
                <li>
                  <a href="/llms.txt">Agent Guide (llms.txt)</a>
                </li>
                <li>
                  <a href={process.env.NEXT_PUBLIC_FACILITATOR_URL} target="_blank" rel="noopener noreferrer">Facilitator API</a>
                </li>
                <li>
                  <Link href="/ecosystem">Ecosystem</Link>
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
            <div className="lg:col-span-4 border-t flex flex-row lg:flex-row flex-wrap gap-2 items-center justify-center lg:justify-between border-[#E4E4E7] py-6 lg:px-10">
              <Link href="/contact" className="px-3 py-2 text-[#0A0A0A]/80 underline">
                Integration support
              </Link>
              <p className="text-[#0A0A0A]">© 2026 {LEGAL_NAME}</p>
              <SocialLinks className="order-first lg:order-none" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
