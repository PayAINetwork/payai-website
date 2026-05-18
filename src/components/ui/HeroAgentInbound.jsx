import Image from "next/image";
import { Landmark } from "lucide-react";

const AGENTS = [
  { name: "ChatGPT", src: "/agents/chatgpt.png", xPct: 25 },
  { name: "Claude", src: "/agents/claude.webp", xPct: 50 },
  { name: "OpenClaw", src: "/agents/openclaw.jpg", xPct: 75 },
];

// Vertical anchors in the 100-unit viewBox (matches preserveAspectRatio="none" stretching)
const MERCHANT_Y = 22; // bottom of merchant card
const AGENT_TOP_Y = 78; // top of agent icons

export function HeroAgentInbound() {
  const path = (xPct) => {
    const cy = (MERCHANT_Y + AGENT_TOP_Y) / 2;
    return `M ${xPct} ${AGENT_TOP_Y} C ${xPct} ${cy}, 50 ${cy}, 50 ${MERCHANT_Y}`;
  };

  return (
    <div className="relative w-full max-w-[460px] h-[320px]">
      {/* SVG connector layer (payments flowing UP from agents to merchant) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="hai-line" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#16A34A" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#16A34A" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {AGENTS.map((a, i) => {
          const d = path(a.xPct);
          return (
            <g key={a.name}>
              <path
                d={d}
                fill="none"
                stroke="#E4E4E7"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={d}
                fill="none"
                stroke="url(#hai-line)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                vectorEffect="non-scaling-stroke"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-20"
                  dur={`${1.4 + i * 0.25}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          );
        })}
      </svg>

      {/* Merchant card (hovering at top, horizontally centered) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ top: 0 }}
      >
        <div className="rounded-xl border border-[#E4E4E7] bg-white px-4 py-3 shadow-[0_18px_30px_-12px_rgba(15,23,42,0.25)] flex items-center gap-3 animate-float">
          <div className="w-10 h-10 rounded-lg bg-[linear-gradient(135deg,#4D63F6_0%,#1D45D8_100%)] flex items-center justify-center text-white shrink-0">
            <Landmark className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="text-[11px] text-[#71717A]">Your Merchant</p>
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-semibold text-[#09090B]">+$3</p>
              <span className="text-[10px] font-medium text-[#16A34A] bg-[#16A34A]/10 px-1.5 py-0.5 rounded">
                just now
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2 w-12 h-1.5 rounded-[50%] bg-[#0F172A]/20 blur-[3px]" />
      </div>

      {/* $1 labels on each connecting line (positioned at the line's midpoint) */}
      {AGENTS.map((a) => {
        const labelXPct = (50 + a.xPct) / 2;
        return (
          <div
            key={`label-${a.name}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-[10px] font-semibold text-[#16A34A] bg-white border border-[#E4E4E7] rounded-md px-1.5 py-0.5 shadow-[0_2px_6px_-2px_rgba(15,23,42,0.18)]"
            style={{ left: `${labelXPct}%`, top: "50%" }}
          >
            $1
          </div>
        );
      })}

      {/* Agent icons (absolutely positioned, centers match SVG line endpoints) */}
      {AGENTS.map((a) => (
        <div
          key={a.name}
          className="absolute bottom-0 -translate-x-1/2 w-14 h-14 rounded-full ring-2 ring-white shadow-[0_8px_16px_-4px_rgba(15,23,42,0.25)] overflow-hidden bg-white"
          style={{ left: `${a.xPct}%` }}
        >
          <Image
            src={a.src}
            alt={a.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
