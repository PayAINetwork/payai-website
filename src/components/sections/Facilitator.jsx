"use client";

import Link from "next/link";
import { ArrowRight, Check, Loader2, Lock, ShieldCheck } from "lucide-react";

const FACILITATOR_FEATURES = [
  "Solana-first, multi-chain ready",
  "Refundable acknowledgments",
  "Atomic with any HTTP server",
  "Bridge &amp; vendor lock support",
];

function FlowCard() {
  return (
    <div className="rounded-2xl border border-[#E4E4E7] bg-white p-5 lg:p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)]">
      {/* Request bubble */}
      <div className="rounded-xl bg-[#F5F7FB] p-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-[#FFB020] flex items-center justify-center text-white font-semibold shrink-0">
            W
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#71717A]">Walmart</p>
            <p className="mt-1 text-sm text-[#09090B] leading-snug">
              Hey @agents, find me a recipe for spaghetti carbonara that takes
              under 15 minutes.
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-[#71717A]">Budget</span>
          <span className="text-sm font-medium text-[#09090B]">$0.01 USDC</span>
        </div>
      </div>

      {/* Search status */}
      <div className="mt-4 rounded-xl border border-[#E4E4E7] bg-white px-4 py-3 flex items-center gap-3">
        <Loader2 className="w-4 h-4 text-[#4D63F6] animate-spin" />
        <span className="text-sm text-[#09090B]">Finding the Right Agent</span>
      </div>

      {/* Receive payment */}
      <div className="mt-3 rounded-xl border border-[#E4E4E7] bg-white px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#0F172A] flex items-center justify-center">
              <Lock className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <p className="text-xs text-[#71717A]">Receive Payment</p>
              <p className="text-sm font-medium text-[#09090B]">0.01 USDC</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-[#16A34A] bg-[#16A34A]/10 px-2 py-1 rounded-md">
            <Check className="w-3 h-3" />
            Settled
          </div>
        </div>
      </div>
    </div>
  );
}

export function Facilitator() {
  return (
    <section id="facilitator" className="bg-white border-t border-[#E4E4E7]">
      <div className="container-payai py-14 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="text-xs lg:text-sm font-medium text-[#1D45D8]">
            x402 Facilitator
          </p>
          <h2 className="mt-3 text-2xl lg:text-[40px] font-medium text-[#09090B] leading-tight tracking-[-0.01em]">
            Payments Wired Directly
            <br />
            into the HTTP Layer
          </h2>
          <p className="mt-4 text-sm lg:text-base text-[#71717A] leading-relaxed max-w-[520px]">
            The x402 status code opens new categories of payments for machines.
            PayAI&apos;s facilitator turns any endpoint into a paid API — no
            keys, no accounts on the buyer side, no friction.
          </p>

          <ul className="mt-7 space-y-3">
            {FACILITATOR_FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#4D63F6]/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#4D63F6]" />
                </span>
                <span
                  className="text-sm lg:text-base text-[#09090B]"
                  dangerouslySetInnerHTML={{ __html: f }}
                />
              </li>
            ))}
          </ul>

          <Link
            href={process.env.NEXT_PUBLIC_FACILITATOR_URL || "#"}
            target="_blank"
            className="mt-8 inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-4 py-2.5 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg"
          >
            Explore x402 Facilitator
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px]">
            <FlowCard />
          </div>
        </div>
      </div>
    </section>
  );
}
