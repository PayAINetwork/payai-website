"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useShuffledLogos } from "@/context/ShuffledLogosContext";

const MERCHANTS = [
  {
    name: "LobsterCash",
    color: "#E11D48",
    letter: "L",
    badge: "Active Buyers",
    description:
      "Secure payment layer for AI agents with wallets, cards, and programmable controls across chains.",
    href: "#",
  },
  {
    name: "AgentCash",
    color: "#0F172A",
    letter: "A",
    badge: "Active Buyers",
    description:
      "Wallet for AI agents to hold balances and pay across x402 APIs. Sub-cent transfers on any network.",
    href: "#",
  },
  {
    name: "AgentWallet",
    color: "#4D63F6",
    letter: "A",
    badge: "Active Buyers",
    description:
      "Spending and approval workflows for agentic teams. Multi-network with usage-aware authorization.",
    href: "#",
  },
  {
    name: "SpongeWallet",
    color: "#22C55E",
    letter: "S",
    badge: "Active Buyers",
    description:
      "Secure crypto wallet management for autonomous spend agents. Built on PayAI SDK rails.",
    href: "#",
  },
  {
    name: "MPP",
    color: "#0EA5E9",
    letter: "M",
    badge: "Active Buyers",
    description:
      "Seamlessly use MPP-enabled services with one click. Pay across any x402 endpoint with USDC.",
    href: "#",
  },
  {
    name: "Coinbase Bazaar",
    color: "#0052FF",
    letter: "C",
    badge: "Active Buyers",
    description:
      "Discovery surface where agents find new endpoints to pay for. Auto-listed via PayAI catalog.",
    href: "#",
  },
];

function MerchantCard({ m }) {
  return (
    <div className="bg-white border border-[#E4E4E7] p-5 lg:p-6 flex flex-col">
      <div className="flex items-center justify-between">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold"
          style={{ backgroundColor: m.color }}
        >
          {m.letter}
        </div>
        <span className="text-[11px] font-medium text-[#16A34A] bg-[#16A34A]/10 px-2 py-1 rounded-md inline-flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
          {m.badge}
        </span>
      </div>

      <h3 className="mt-5 text-base lg:text-lg font-medium text-[#09090B]">
        {m.name}
      </h3>
      <p className="mt-2 text-sm text-[#71717A] leading-relaxed flex-1">
        {m.description}
      </p>

      <Link
        href={m.href}
        className="mt-5 inline-flex items-center justify-center self-start text-sm font-medium text-[#09090B] border border-[#E4E4E7] rounded-lg px-3 py-1.5 hover:bg-[#F5F7FB] transition-colors"
      >
        View Site
        <ArrowUpRight className="w-4 h-4 ml-1.5" />
      </Link>
    </div>
  );
}

function CompaniesStrip() {
  const logos = useShuffledLogos();
  return (
    <div className="mt-8 lg:mt-10 flex flex-col items-center">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 max-w-[640px]">
        {logos.map((p) => (
          <Image
            key={p.name}
            src={p.logo}
            alt={p.name}
            width={36}
            height={36}
            className="w-9 h-9 rounded-lg object-cover ring-1 ring-[#E4E4E7]"
          />
        ))}
      </div>
      <p className="mt-4 text-xs lg:text-sm text-[#71717A]">
        Trusted by{" "}
        <span className="font-semibold text-[#09090B]">1000+ companies</span> of
        all sizes
      </p>
    </div>
  );
}

export function IntegrateOnce() {
  return (
    <section id="integrate-once" className="bg-white border-t border-[#E4E4E7]">
      <div className="container-payai py-14 lg:py-24">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="text-2xl lg:text-[40px] font-medium text-[#09090B] leading-tight tracking-[-0.01em]">
            Integrate Once.
            <br />
            Get Listed Everywhere.
          </h2>
          <p className="mt-4 text-sm lg:text-base text-[#71717A] max-w-[540px] mx-auto">
            When you go live on PayAI, your service is automatically listed in
            every major agentic catalog, bazaar, and marketplace. AI agents
            browsing for services find you instantly.
          </p>
        </div>

        <CompaniesStrip />

        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E4E4E7] border border-[#E4E4E7]">
          {MERCHANTS.map((m) => (
            <MerchantCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
