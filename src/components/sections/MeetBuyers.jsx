"use client";

import { Layers, ToggleRight, ShieldCheck } from "lucide-react";

const NODES = [
  { id: "tempo", label: "Tempo", color: "#16A34A", letter: "T", x: 50, y: 18, type: "chain" },
  { id: "u1", label: "U1", color: "#F59E0B", letter: "A", x: 18, y: 30, type: "user" },
  { id: "solana", label: "Solana", color: "#9945FF", letter: "S", x: 80, y: 32, type: "chain" },
  { id: "u2", label: "U2", color: "#06B6D4", letter: "M", x: 8, y: 60, type: "user" },
  { id: "base", label: "Base", color: "#0052FF", letter: "B", x: 50, y: 55, type: "chain", center: true },
  { id: "polygon", label: "Polygon", color: "#8247E5", letter: "P", x: 92, y: 60, type: "chain" },
  { id: "u3", label: "U3", color: "#EF4444", letter: "K", x: 28, y: 86, type: "user" },
  { id: "u4", label: "U4", color: "#0EA5E9", letter: "J", x: 72, y: 86, type: "user" },
];

const CENTER = NODES.find((n) => n.center);
const SPOKES = NODES.filter((n) => !n.center);

const PILLARS = [
  {
    Icon: Layers,
    title: "One wallet, every chain",
    body:
      "Crossmint-powered wallets on every supported chain, so your agents and your buyers never have to bridge.",
  },
  {
    Icon: ToggleRight,
    title: "Toggle networks from the dashboard",
    body:
      "Enable or pause coverage with a switch. Expand your reach in seconds without code or new deploys.",
  },
  {
    Icon: ShieldCheck,
    title: "Secure by design",
    body:
      "Non-custodial, hardware-rooted security and on-chain settlement keep funds safe at every step.",
  },
];

function Node({ node, size = 56 }) {
  const sizeRem = size;
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
    >
      <div
        className="rounded-full flex items-center justify-center font-semibold text-white shadow-[0_10px_30px_-10px_rgba(15,23,42,0.35)] ring-4 ring-white"
        style={{
          width: sizeRem,
          height: sizeRem,
          backgroundColor: node.color,
          fontSize: sizeRem * 0.36,
        }}
      >
        {node.letter}
      </div>
      {node.type === "chain" && (
        <p className="mt-1.5 text-[11px] text-[#71717A] text-center whitespace-nowrap">
          {node.label}
        </p>
      )}
    </div>
  );
}

function SpokesGraph() {
  return (
    <div className="relative w-full max-w-[820px] mx-auto h-[360px] lg:h-[420px]">
      {/* Connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="spokeLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4D63F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4D63F6" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {SPOKES.map((n) => (
          <line
            key={n.id}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={n.x}
            y2={n.y}
            stroke="url(#spokeLine)"
            strokeWidth="0.25"
            strokeDasharray="0.6 0.6"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Concentric rings around center */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E4E4E7]"
        style={{
          left: `${CENTER.x}%`,
          top: `${CENTER.y}%`,
          width: 180,
          height: 180,
        }}
      />
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E4E4E7]/60"
        style={{
          left: `${CENTER.x}%`,
          top: `${CENTER.y}%`,
          width: 320,
          height: 320,
        }}
      />

      {/* Nodes */}
      {SPOKES.map((n) => (
        <Node key={n.id} node={n} size={n.type === "chain" ? 56 : 44} />
      ))}
      <Node node={CENTER} size={76} />
    </div>
  );
}

export function MeetBuyers() {
  return (
    <section id="meet-buyers" className="bg-white border-t border-[#E4E4E7]">
      <div className="container-payai py-14 lg:py-24">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="text-2xl lg:text-[40px] font-medium text-[#09090B] leading-tight tracking-[-0.01em]">
            Meet Buyers Where They Are
          </h2>
          <p className="mt-4 text-sm lg:text-base text-[#71717A]">
            Never miss a sale. Be where the buyers are. Accept any currency on
            any network.
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          <SpokesGraph />
        </div>

        <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PILLARS.map(({ Icon, title, body }) => (
            <div key={title}>
              <div className="w-10 h-10 rounded-lg bg-[#4D63F6]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#4D63F6]" />
              </div>
              <h3 className="mt-4 text-base lg:text-lg font-medium text-[#09090B]">
                {title}
              </h3>
              <p className="mt-2 text-sm text-[#71717A] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
