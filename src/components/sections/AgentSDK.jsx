"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InstallTerminalTyping } from "@/components/ui/InstallTerminalTyping";

const SDK_NETWORKS = [
  { id: "solana", name: "Solana", color: "#9945FF", letter: "S", on: true },
  { id: "eth", name: "ETH", color: "#627EEA", letter: "E", on: true },
  { id: "base", name: "Base", color: "#0052FF", letter: "B", on: true },
  { id: "polygon", name: "Polygon", color: "#8247E5", letter: "P", on: true },
  { id: "tempo", name: "Tempo", color: "#16A34A", letter: "T", on: false },
];

function MonoTile({ letter, color, size = 22 }) {
  return (
    <div
      className="flex items-center justify-center rounded-md font-semibold text-white shrink-0"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        fontSize: size * 0.5,
        lineHeight: 1,
      }}
    >
      {letter}
    </div>
  );
}

function Toggle({ on }) {
  return (
    <div
      className={`relative inline-flex h-[20px] w-9 items-center rounded-full transition-colors ${
        on ? "bg-[#4D63F6]" : "bg-[#E4E4E7]"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          on ? "translate-x-[18px]" : "translate-x-[2px]"
        }`}
      />
    </div>
  );
}

function MerchantSDKPanel() {
  return (
    <div className="relative rounded-xl border border-[#E4E4E7] bg-white p-6 lg:p-8 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)]">
      <span className="absolute top-5 right-5 inline-flex items-center gap-1 text-[11px] font-medium text-white bg-[linear-gradient(90deg,#4D63F6_0%,#1D45D8_100%)] px-2 py-1 rounded-md">
        New Feature
      </span>

      <p className="text-xs lg:text-sm font-medium text-[#1D45D8]">
        Merchant Agent SDK
      </p>
      <h3 className="mt-2 text-2xl lg:text-[32px] font-medium text-[#09090B] leading-tight tracking-[-0.01em]">
        One Integration.
        <br />
        Every Payment Gateway.
      </h3>
      <p className="mt-3 text-sm text-[#71717A] leading-relaxed max-w-[440px]">
        Stop integrating payment gateways one by one. PayAI&apos;s SDK
        aggregates them all. Powered by Crossmint, your service instantly has
        wallets on every major blockchain — so you never have to choose where
        the network lives.
      </p>

      <ul className="mt-6 space-y-3">
        {SDK_NETWORKS.map((n) => (
          <li key={n.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MonoTile letter={n.letter} color={n.color} />
              <span className="text-sm text-[#09090B]">{n.name}</span>
            </div>
            <Toggle on={n.on} />
          </li>
        ))}
      </ul>

      <Link
        href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
        target="_blank"
        className="mt-8 inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-4 py-2.5 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg"
      >
        Explore the SDK
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
}

export function AgentSDK() {
  return (
    <section id="agent-sdk" className="bg-white">
      <div className="container-payai py-14 lg:py-24">
        {/* Section header */}
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="text-2xl lg:text-[40px] font-medium text-[#09090B] leading-tight tracking-[-0.01em]">
            Accept Agentic Payments.
            <br />
            Any network, any protocol.
          </h2>
          <p className="mt-4 text-sm lg:text-base text-[#71717A] max-w-[520px] mx-auto">
            A drop-in HTTP payment layer and SDK to aggregate every gateway —
            PayAI has you covered.
          </p>
        </div>

        {/* Two-column card */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <InstallTerminalTyping />
          <MerchantSDKPanel />
        </div>
      </div>
    </section>
  );
}
