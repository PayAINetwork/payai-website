import Image from "next/image";
import { Radio } from "lucide-react";

/* ---------- Network logos (small, circular) ---------- */

function SolanaLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="hb-sol-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9945FF" />
          <stop offset="100%" stopColor="#14F195" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="16" fill="url(#hb-sol-bg)" />
      <path d="M9 21.5 L20.5 21.5 L23 24 L11.5 24 Z" fill="white" />
      <path d="M9 14.7 L20.5 14.7 L23 17.2 L11.5 17.2 Z" fill="white" />
      <path d="M11.5 8 L23 8 L20.5 10.5 L9 10.5 Z" fill="white" />
    </svg>
  );
}

function BaseLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle cx="16" cy="16" r="16" fill="#0052FF" />
      <path
        d="M16 26c5.52 0 10-4.48 10-10S21.52 6 16 6c-5.24 0-9.53 4.03-9.96 9.16h14.74v1.68H6.04C6.47 21.97 10.76 26 16 26Z"
        fill="white"
      />
    </svg>
  );
}

function PolygonLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle cx="16" cy="16" r="16" fill="#8247E5" />
      <path
        d="M21 12.5c-.4-.23-.9-.23-1.3 0L16 14.6l-2.2 1.3-3.3 1.9c-.4.23-.9.23-1.3 0L6.7 16.3c-.4-.23-.65-.66-.65-1.13v-2.95c0-.46.25-.9.65-1.12L9.2 9.65c.4-.23.9-.23 1.3 0L13 11.15v2.6L10.5 15.2 8 13.7v3l2.5 1.5L13 16.7l2.2-1.3 2.3-1.4 3.3-1.9c.4-.23.9-.23 1.3 0l2.5 1.5c.4.23.65.66.65 1.13v2.95c0 .46-.25.9-.65 1.12l-2.5 1.5c-.4.23-.9.23-1.3 0l-2.5-1.5v-2.6l2.5-1.45 2.5 1.5v-2.95L21 12.5Z"
        fill="white"
      />
    </svg>
  );
}

function AvalancheLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle cx="16" cy="16" r="16" fill="#E84142" />
      <path
        d="M17.6 9.4c.6-1 2-1 2.6 0l5.5 9.7c.6 1-.1 2.3-1.3 2.3h-4.9c-.5 0-1-.3-1.3-.7l-.6-1c-.3-.5-.3-1.2 0-1.7l3-5.2-3-5.4Zm-9.4 12 4-7c.6-1 2-1 2.6 0l4 7c.6 1-.1 2.3-1.3 2.3H9.5c-1.2 0-1.9-1.3-1.3-2.3Z"
        fill="white"
      />
    </svg>
  );
}

function SkaleLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle cx="16" cy="16" r="16" fill="#0A1F3C" />
      <path
        d="M9 12.5h14l-2.2 2.5H11.2L9 12.5Zm0 4h14L20.8 19H11.2L9 16.5Zm2.2 4h11.6L20.6 23h-7.2l-2.2-2.5Z"
        fill="#3FB1F7"
      />
    </svg>
  );
}

/* ---------- Catalog badges (circular monogram tiles) ---------- */

function CatalogBadge({ letters, fg, bg, font = "text-[11px]" }) {
  return (
    <div
      className={`w-full h-full rounded-full flex items-center justify-center font-semibold ${font}`}
      style={{ backgroundColor: bg, color: fg }}
    >
      {letters}
    </div>
  );
}

/* ---------- Data ---------- */

const PROTOCOLS = [
  { name: "x402", color: "#4D63F6" },
  { name: "mpp", color: "#16A34A" },
];

const NETWORKS_VISIBLE = [
  { name: "Solana", Logo: SolanaLogo },
  { name: "Base", Logo: BaseLogo },
  { name: "Polygon", Logo: PolygonLogo },
  { name: "Avalanche", Logo: AvalancheLogo },
  { name: "Skale", Logo: SkaleLogo },
];

const NETWORKS_OVERFLOW = [
  "Optimism",
  "Arbitrum",
  "BNB Chain",
  "Linea",
  "Sui",
];

const CATALOGS_VISIBLE = [
  {
    name: "pay.sh",
    Logo: () => <CatalogBadge letters="p" fg="white" bg="#0F172A" font="text-sm" />,
  },
  {
    name: "agentic.market",
    Logo: () => <CatalogBadge letters="am" fg="white" bg="#4D63F6" />,
  },
  {
    name: "CDP Bazaar",
    Logo: () => <CatalogBadge letters="C" fg="white" bg="#0052FF" font="text-sm" />,
  },
  {
    name: "PayAI Bazaar",
    Logo: () => <CatalogBadge letters="P" fg="white" bg="#1D45D8" font="text-sm" />,
  },
  {
    name: "x402scan",
    Logo: () => <CatalogBadge letters="x4" fg="white" bg="#9333EA" />,
  },
];

const CATALOGS_OVERFLOW = ["mpp.dev", "agents.directory", "x402.org"];

const NETWORKS_TOTAL = NETWORKS_VISIBLE.length + NETWORKS_OVERFLOW.length;
const CATALOGS_TOTAL = CATALOGS_VISIBLE.length + CATALOGS_OVERFLOW.length;

/* ---------- Building blocks ---------- */

function ProtocolChip({ item }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-[#E4E4E7] bg-white text-[11px] font-medium text-[#09090B] whitespace-nowrap shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: item.color }}
      />
      {item.name}
    </span>
  );
}

function LogoCircle({ name, Logo }) {
  return (
    <div
      className="w-8 h-8 rounded-full ring-1 ring-[#E4E4E7] bg-white overflow-hidden shrink-0"
      title={name}
      aria-label={name}
    >
      <Logo />
      <span className="sr-only">{name}</span>
    </div>
  );
}

function MoreCount({ count, names }) {
  return (
    <span className="text-[11px] font-medium text-[#71717A] whitespace-nowrap">
      + {count} others
      <span className="sr-only">: {names.join(", ")}</span>
    </span>
  );
}

function Stack({ label, count, children }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#71717A]">
          {label}
        </p>
        <span className="text-[10px] text-[#16A34A] font-medium">
          {count} live
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

/* ---------- Main panel ---------- */

export function HeroBroadcast() {
  const FROM = { x: 138, y: 210 };
  const TO_PROTOCOLS = { x: 210, y: 80 };
  const TO_NETWORKS = { x: 210, y: 210 };
  const TO_CATALOGS = { x: 210, y: 340 };

  const path = (to) => {
    const cx = (FROM.x + to.x) / 2;
    return `M ${FROM.x} ${FROM.y} C ${cx} ${FROM.y}, ${cx} ${to.y}, ${to.x} ${to.y}`;
  };

  const totalSurfaces = PROTOCOLS.length + NETWORKS_TOTAL + CATALOGS_TOTAL;

  return (
    <div className="relative w-full max-w-[560px] rounded-2xl border border-[#E4E4E7] bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)] overflow-hidden">
      {/* Top status strip */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#EDEDED] bg-gradient-to-r from-[#F8F9FF] to-white">
        <div className="flex items-center gap-2">
          <Radio className="w-3.5 h-3.5 text-[#4D63F6]" />
          <p className="text-xs font-medium text-[#09090B]">
            Distribution Console
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#16A34A]">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex w-full h-full rounded-full bg-[#16A34A] opacity-60 animate-ping" />
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
          </span>
          Broadcasting
        </span>
      </div>

      {/* Body */}
      <div className="relative px-5 py-6">
        {/* SVG connector layer */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 560 420"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="hb-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4D63F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#4D63F6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {[TO_PROTOCOLS, TO_NETWORKS, TO_CATALOGS].map((to, i) => (
            <g key={i}>
              <path
                d={path(to)}
                fill="none"
                stroke="#E4E4E7"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={path(to)}
                fill="none"
                stroke="url(#hb-line)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                vectorEffect="non-scaling-stroke"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-20"
                  dur={`${1.4 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          ))}
        </svg>

        {/* Foreground */}
        <div className="relative grid grid-cols-[auto_1fr] gap-6 items-center">
          {/* Left column: merchant card + hovering PayAI mark */}
          <div className="flex flex-col items-center gap-6 w-[140px]">
            <div className="w-full rounded-xl border border-[#E4E4E7] bg-white px-3.5 py-4 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.2)] flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[linear-gradient(135deg,#4D63F6_0%,#1D45D8_100%)] flex items-center justify-center text-white font-semibold text-base">
                M
              </div>
              <p className="text-sm font-semibold text-[#09090B] truncate w-full">
                Your Merchant
              </p>
            </div>

            {/* Hovering PayAI lettermark */}
            <div className="flex flex-col items-center">
              <Image
                src="/payai-lettermark.svg"
                alt="PayAI"
                width={40}
                height={40}
                className="w-10 h-10 animate-float drop-shadow-[0_8px_12px_rgba(77,99,246,0.35)]"
              />
              <div className="mt-2 w-7 h-1.5 rounded-[50%] bg-[#0F172A]/25 blur-[3px]" />
            </div>
          </div>

          {/* Output stacks */}
          <div className="flex flex-col gap-5">
            <Stack label="Protocols" count={PROTOCOLS.length}>
              {PROTOCOLS.map((p) => (
                <ProtocolChip key={p.name} item={p} />
              ))}
            </Stack>

            <Stack label="Networks" count={NETWORKS_TOTAL}>
              {NETWORKS_VISIBLE.map((n) => (
                <LogoCircle key={n.name} name={n.name} Logo={n.Logo} />
              ))}
              <MoreCount count={NETWORKS_OVERFLOW.length} names={NETWORKS_OVERFLOW} />
            </Stack>

            <Stack label="Catalogs" count={CATALOGS_TOTAL}>
              {CATALOGS_VISIBLE.map((c) => (
                <LogoCircle key={c.name} name={c.name} Logo={c.Logo} />
              ))}
              <MoreCount count={CATALOGS_OVERFLOW.length} names={CATALOGS_OVERFLOW} />
            </Stack>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-[#EDEDED] bg-[#FAFAFB] flex items-center justify-between">
        <p className="text-[11px] text-[#71717A]">Auto-listed via PayAI</p>
        <p className="text-[11px] font-medium text-[#09090B]">
          One integration · {totalSurfaces} surfaces
        </p>
      </div>
    </div>
  );
}
