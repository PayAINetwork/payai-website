import React from "react";

const wordmarkClass = "font-medium text-[18px] tracking-tight text-[#09090B]";

export function CrossmintMark() {
  return (
    <div className="flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path
          d="M11 2 L20 11 L11 20 L2 11 Z"
          fill="#04AAFD"
        />
        <path
          d="M11 6 L16 11 L11 16 L6 11 Z"
          fill="white"
        />
      </svg>
      <span className={wordmarkClass}>Crossmint</span>
    </div>
  );
}

export function SolanaMark() {
  return (
    <div className="flex items-center gap-2">
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden>
        <defs>
          <linearGradient id="solGrad" x1="0" y1="0" x2="22" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9945FF" />
            <stop offset="1" stopColor="#14F195" />
          </linearGradient>
        </defs>
        <path d="M3.5 14.5 L17.5 14.5 L20 17 L6 17 Z" fill="url(#solGrad)" />
        <path d="M3.5 8 L17.5 8 L20 10.5 L6 10.5 Z" fill="url(#solGrad)" />
        <path d="M6 1 L20 1 L17.5 3.5 L3.5 3.5 Z" fill="url(#solGrad)" />
      </svg>
      <span
        className="font-semibold text-[18px] tracking-[0.18em]"
        style={{
          background: "linear-gradient(90deg,#9945FF 0%, #14F195 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        SOLANA
      </span>
    </div>
  );
}

export function EthereumMark() {
  return (
    <div className="flex items-center gap-2">
      <svg width="16" height="22" viewBox="0 0 16 22" fill="none" aria-hidden>
        <path d="M8 1 L8 8.5 L14.5 11.5 Z" fill="#343434" />
        <path d="M8 1 L1.5 11.5 L8 8.5 Z" fill="#8C8C8C" />
        <path d="M8 14.5 L8 21 L14.5 12.7 Z" fill="#3C3C3B" />
        <path d="M8 21 L8 14.5 L1.5 12.7 Z" fill="#8C8C8C" />
        <path d="M8 13.4 L14.5 11.5 L8 8.5 Z" fill="#141414" />
        <path d="M1.5 11.5 L8 13.4 L8 8.5 Z" fill="#393939" />
      </svg>
      <span className={wordmarkClass + " lowercase"}>ethereum</span>
    </div>
  );
}

export function BaseMark() {
  return (
    <div className="flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="11" fill="#0052FF" />
        <path
          d="M11 18.5c4.14 0 7.5-3.36 7.5-7.5S15.14 3.5 11 3.5c-3.93 0-7.15 3.02-7.47 6.87h11.05v1.26H3.53C3.85 15.48 7.07 18.5 11 18.5Z"
          fill="white"
        />
      </svg>
      <span className={wordmarkClass + " lowercase"}>base</span>
    </div>
  );
}

export function PolygonMark() {
  return (
    <div className="flex items-center gap-2">
      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" aria-hidden>
        <path
          d="M16.5 7.2c-.4-.23-.9-.23-1.3 0L12 9 9.8 10.3 6.5 12.2c-.4.23-.9.23-1.3 0L2.7 10.7c-.4-.23-.65-.66-.65-1.13V6.62c0-.46.25-.9.65-1.12L5.2 4.05c.4-.23.9-.23 1.3 0L9 5.55v2.6L6.5 9.6 4 8.1v3l2.5 1.5L9 11.1l2.2-1.3L13.5 8.5l3.3-1.9c.4-.23.9-.23 1.3 0l2.5 1.5c.4.23.65.66.65 1.13v2.95c0 .46-.25.9-.65 1.12l-2.5 1.5c-.4.23-.9.23-1.3 0L15 13.45v-2.6L17.5 9.4 20 10.9V7.95l-2.5-1.5Z"
          fill="#7B3FE4"
        />
      </svg>
      <span className={wordmarkClass + " lowercase"}>polygon</span>
    </div>
  );
}

export function ArbitrumMark() {
  return (
    <div className="flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="11" fill="#213147" />
        <path d="M10.7 5.7 14 12.5l-2.1 1.2-1.85-3.8-1.95 4-2.1-1.2 3.4-7c.25-.5.7-.5 1.3 0Z" fill="#12AAFF" />
        <path d="M15.1 12.5 16.6 14l-2 1.15-1.5-1.4 2-1.25Z" fill="#9DCCED" />
      </svg>
      <span className="font-medium text-[18px] tracking-[0.18em] text-[#09090B]">
        ARBITRUM
      </span>
    </div>
  );
}

export function OpenAIMark() {
  return (
    <div className="flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M29.7 13.1a8 8 0 0 0-.7-6.6 8.1 8.1 0 0 0-8.7-3.9A8 8 0 0 0 14.3 0a8.1 8.1 0 0 0-7.7 5.6 8 8 0 0 0-5.4 3.9 8.1 8.1 0 0 0 1 9.4 8 8 0 0 0 .7 6.6 8.1 8.1 0 0 0 8.7 3.9 8 8 0 0 0 6 2.6 8.1 8.1 0 0 0 7.7-5.6 8 8 0 0 0 5.4-3.9 8.1 8.1 0 0 0-1-9.4Zm-12 16.8a6 6 0 0 1-3.9-1.4l.2-.1 6.5-3.8a1 1 0 0 0 .5-.9V14.5l2.7 1.6v7.7a6 6 0 0 1-6 6Zm-12.9-5.5a6 6 0 0 1-.7-4l.2.1 6.5 3.8c.3.2.7.2 1 0l8-4.6v3.1L13.2 27a6 6 0 0 1-8.2-2.2ZM3.2 10.6a6 6 0 0 1 3.2-2.7v7.8c0 .4.2.7.5.9l8 4.6-2.7 1.6-6.6-3.8a6 6 0 0 1-2.4-8.1Zm22.6 5.3-8-4.6 2.6-1.6 6.6 3.8a6 6 0 0 1-.9 10.7v-7.8c0-.3-.2-.7-.5-.9Zm2.6-4-.2-.1-6.5-3.8c-.3-.2-.7-.2-1 0l-8 4.6V9.5L19.4 6a6 6 0 0 1 8.9 6Zm-17.4 5.4-2.7-1.6V8c0-3.3 2.7-6 6-6a6 6 0 0 1 3.8 1.4l-.2.1L9.3 7.3c-.3.2-.5.5-.5.9v8Zm1.5-3.1L16 12l3.5 2v4l-3.5 2-3.5-2Z"
          fill="#0D0D0D"
        />
      </svg>
      <span className="font-medium text-[18px] tracking-tight text-[#09090B]">
        OpenAI
      </span>
    </div>
  );
}

export function AnthropicMark() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M14.5 3h2.7l5.8 18h-2.9l-1.4-4.4h-6L11.4 21H8.5l6-18Zm-.1 11.1h4.4l-2.2-7.1-2.2 7.1Z"
          fill="#181818"
        />
        <path d="M7.2 3h2.6L5.4 21H2.8L7.2 3Z" fill="#D97757" />
      </svg>
      <span className="font-medium text-[18px] tracking-[0.18em] text-[#09090B]">
        ANTHROPIC
      </span>
    </div>
  );
}

export function CoinbaseMark() {
  return (
    <div className="flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="11" fill="#0052FF" />
        <rect x="7" y="7" width="8" height="8" rx="1" fill="white" />
      </svg>
      <span className={wordmarkClass + " lowercase"}>coinbase</span>
    </div>
  );
}

export const PARTNER_LOGOS = [
  { key: "crossmint", Component: CrossmintMark },
  { key: "solana", Component: SolanaMark },
  { key: "ethereum", Component: EthereumMark },
  { key: "base", Component: BaseMark },
  { key: "polygon", Component: PolygonMark },
  { key: "arbitrum", Component: ArbitrumMark },
  { key: "openai", Component: OpenAIMark },
  { key: "anthropic", Component: AnthropicMark },
  { key: "coinbase", Component: CoinbaseMark },
];
