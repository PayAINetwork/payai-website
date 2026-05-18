"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

const COMMAND = "npx accept-agentic-payments";
const DASHBOARD_URL = "https://merchant.payai.network";

const LINES = [
  { type: "ok", text: "Detected Next.js 15" },
  { type: "ok", text: "Installed @payai/agent-payments" },
  { type: "prompt", text: "Select protocols", value: "x402, mpp" },
  { type: "prompt", text: "Select networks", value: "Solana, Base, Polygon" },
  { type: "ok", text: "Wrote app/api/payments/route.ts" },
  { type: "ok", text: "Listed on 8 catalogs" },
  {
    type: "celebrate",
    text: "You're live.",
    linkText: "Visit dashboard →",
    href: DASHBOARD_URL,
  },
];

const IDLE_MS = 600;
const TYPE_INTERVAL_MS = 65;
const POST_TYPE_PAUSE_MS = 500;
const OUTPUT_INTERVAL_MS = 650;
const HOLD_MS = 3500;
const FADE_MS = 600;

export function InstallTerminalTyping() {
  const [phase, setPhase] = useState("idle"); // idle | typing | output | hold | fadeOut
  const [typedLen, setTypedLen] = useState(0);
  const [outputCount, setOutputCount] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let t;
    if (phase === "idle") {
      t = setTimeout(() => setPhase("typing"), IDLE_MS);
    } else if (phase === "typing") {
      if (typedLen < COMMAND.length) {
        t = setTimeout(() => setTypedLen((n) => n + 1), TYPE_INTERVAL_MS);
      } else {
        t = setTimeout(() => setPhase("output"), POST_TYPE_PAUSE_MS);
      }
    } else if (phase === "output") {
      if (outputCount < LINES.length) {
        t = setTimeout(
          () => setOutputCount((n) => n + 1),
          OUTPUT_INTERVAL_MS,
        );
      } else {
        t = setTimeout(() => setPhase("hold"), 0);
      }
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("fadeOut"), HOLD_MS);
    } else if (phase === "fadeOut") {
      t = setTimeout(() => {
        setTypedLen(0);
        setOutputCount(0);
        setPhase("idle");
      }, FADE_MS);
    }
    return () => clearTimeout(t);
  }, [phase, typedLen, outputCount]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked
    }
  };

  const partial = COMMAND.slice(0, typedLen);
  const showInlineCursor = phase === "idle" || phase === "typing";
  const fading = phase === "fadeOut";

  return (
    <div className="rounded-xl overflow-hidden border border-[#E4E4E7] bg-[#0B1020] shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0F172A] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[11px] text-white/40 font-mono">
          Terminal
        </span>
        <button
          onClick={handleCopy}
          className="ml-auto inline-flex items-center gap-1.5 text-[11px] text-white/50 hover:text-white transition-colors font-mono"
          aria-label="Copy command"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#22C55E]" />
              <span className="text-[#22C55E]">copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal body — wrapped so we can smoothly fade out before resetting */}
      <div
        className={`transition-opacity ease-out ${fading ? "opacity-0" : "opacity-100"}`}
        style={{ transitionDuration: `${FADE_MS}ms` }}
      >
        <div className="px-5 py-5 text-[13px] leading-[1.85] font-mono text-white/90 min-h-[340px] flex flex-col gap-0.5">
          {/* Command line (types out) */}
          <div className="flex items-center">
            <span className="text-[#4D63F6] mr-2 select-none">$</span>
            <span className="text-white whitespace-pre">{partial}</span>
            {showInlineCursor && (
              <span className="inline-block w-[7px] h-[15px] bg-white/80 animate-pulse ml-[1px]" />
            )}
          </div>

          {/* Streamed wizard output */}
          {LINES.slice(0, outputCount).map((line, i) => (
            <LineRow key={`${i}-${phase === "fadeOut" ? "hold" : phase}`} line={line} />
          ))}

          {/* Ready prompt with blinking cursor during hold/fadeOut */}
          {(phase === "hold" || phase === "fadeOut") && (
            <div
              className="flex items-center mt-2 animate-[fadeInUp_0.3s_ease-out]"
              style={{ animationFillMode: "backwards" }}
            >
              <span className="text-[#4D63F6] mr-2 select-none">$</span>
              <span className="inline-block w-[7px] h-[15px] bg-white/80 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LineRow({ line }) {
  const base =
    "animate-[fadeInUp_0.3s_ease-out] [animation-fill-mode:backwards]";

  if (line.type === "ok") {
    return (
      <div className={`${base} flex items-start gap-2`}>
        <span className="text-[#22C55E] mt-[1px]">✓</span>
        <span className="text-white/85">{line.text}</span>
      </div>
    );
  }

  if (line.type === "prompt") {
    return (
      <div className={`${base} flex items-start gap-2`}>
        <span className="text-[#FBBF24] mt-[1px]">?</span>
        <span className="text-white/85">{line.text}</span>
        <span className="text-white/40 mx-1">›</span>
        <span className="text-[#22D3EE]">{line.value}</span>
      </div>
    );
  }

  if (line.type === "celebrate") {
    return (
      <div className={`${base} mt-2 flex items-center gap-2 flex-wrap`}>
        <span>🎉</span>
        <span className="text-white font-medium">{line.text}</span>
        <a
          href={line.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4D63F6] hover:text-[#7C8DF9] underline underline-offset-2 font-medium transition-colors"
        >
          {line.linkText}
        </a>
      </div>
    );
  }

  return null;
}
