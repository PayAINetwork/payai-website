import { ArrowUpRight } from "lucide-react";

const NETWORKS = [
  { id: "solana", name: "Solana", color: "#9945FF", letter: "S", on: true },
  { id: "eth", name: "ETH", color: "#627EEA", letter: "E", on: true },
  { id: "base", name: "Base", color: "#0052FF", letter: "B", on: true },
  { id: "polygon", name: "Polygon", color: "#8247E5", letter: "P", on: true },
  { id: "tempo", name: "Tempo", color: "#16A34A", letter: "T", on: false },
];

const CATALOG = [
  { name: "LobsterCash", color: "#E11D48", letter: "L" },
  { name: "AgentCash", color: "#0F172A", letter: "A" },
  { name: "AgentWallet", color: "#4D63F6", letter: "A" },
  { name: "MPP Catalog", color: "#0EA5E9", letter: "M" },
];

function MonoTile({ letter, color, size = 20 }) {
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
      className={`relative inline-flex h-[18px] w-8 items-center rounded-full transition-colors ${
        on ? "bg-[#4D63F6]" : "bg-[#E4E4E7]"
      }`}
    >
      <span
        className={`inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow transition-transform ${
          on ? "translate-x-[16px]" : "translate-x-[2px]"
        }`}
      />
    </div>
  );
}

function Sparkline() {
  const points = [
    [0, 28], [12, 24], [24, 26], [36, 18], [48, 22],
    [60, 14], [72, 16], [84, 8], [96, 10], [108, 4],
  ];
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`)
    .join(" ");
  const area = `${d} L 108 32 L 0 32 Z`;
  return (
    <svg viewBox="0 0 108 32" width="108" height="32" className="overflow-visible">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4D63F6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#4D63F6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkFill)" />
      <path
        d={d}
        fill="none"
        stroke="#4D63F6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DashboardPanel({ footerLabel = "Latency", footerValue = "800ms" }) {
  return (
    <div className="w-full max-w-[520px] rounded-2xl border border-[#E4E4E7] bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)] overflow-hidden">
      <div className="px-5 py-4 border-b border-[#EDEDED] flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-[#71717A]">Total Revenue</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-xl font-semibold text-[#09090B]">$12.4K</span>
            <span className="inline-flex items-center gap-0.5 text-[11px] font-medium text-[#16A34A] bg-[#16A34A]/10 px-1.5 py-0.5 rounded-md">
              <ArrowUpRight className="w-3 h-3" />
              8.2%
            </span>
          </div>
        </div>
        <Sparkline />
      </div>

      <div className="grid grid-cols-2 divide-x divide-[#EDEDED]">
        <div className="px-5 py-4">
          <p className="text-xs text-[#71717A] mb-3">Network Coverage</p>
          <ul className="space-y-2.5">
            {NETWORKS.map((n) => (
              <li key={n.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MonoTile letter={n.letter} color={n.color} size={20} />
                  <span className="text-sm text-[#09090B]">{n.name}</span>
                </div>
                <Toggle on={n.on} />
              </li>
            ))}
          </ul>
        </div>

        <div className="px-5 py-4">
          <p className="text-xs text-[#71717A]">Buyers in Catalog</p>
          <p className="mt-1 text-xl font-semibold text-[#09090B]">203K+</p>

          <p className="text-xs text-[#71717A] mt-4 mb-2">Catalog</p>
          <ul className="space-y-2">
            {CATALOG.map((c) => (
              <li key={c.name} className="flex items-center gap-2">
                <MonoTile letter={c.letter} color={c.color} size={20} />
                <span className="text-sm text-[#09090B]">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-[#EDEDED] flex items-center justify-between">
        <p className="text-xs text-[#71717A]">{footerLabel}</p>
        <p className="text-sm font-medium text-[#09090B]">{footerValue}</p>
      </div>
    </div>
  );
}
