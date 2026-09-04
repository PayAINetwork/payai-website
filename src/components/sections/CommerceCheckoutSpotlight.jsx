import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { COMMERCE_CHECKOUT_URL } from "@/lib/site";

const steps = [
  { number: "01", label: "Claude stops at the cart", detail: "No money touches the model." },
  { number: "02", label: "The host adds one URL", detail: "Human wallet or autonomous agent." },
  { number: "03", label: "x402 unlocks the order", detail: "USDC settles on SVM or EVM." },
];

export function CommerceCheckoutSpotlight() {
  return (
    <section className="border-y border-[#E4E4E7] bg-[#F6F7FF] px-4 py-20 lg:px-8 lg:py-28">
      <div className="container-payai overflow-hidden rounded-3xl border border-[#1C1C1C] bg-[#171715] text-white shadow-[14px_16px_0_#4D63F626]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <div className="inline-flex rounded-full border border-white/20 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#AFC0FF]">
              Open-source ecosystem contribution
            </div>
            <h2 className="mt-7 max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.04em] !text-white sm:text-5xl lg:text-[58px]">
              Anthropic built commerce agents. x402 completes checkout.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg">
              A facilitator-neutral Claude Code plugin adds real USDC settlement to agents built
              with Anthropic Commerce Builder—without putting a payment URL or credential in the
              model.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={COMMERCE_CHECKOUT_URL}
                className="inline-flex items-center rounded-lg bg-[#4D63F6] px-4 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Try the $0.99 testnet demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://github.com/PayAINetwork/x402-commerce-checkout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-white/20 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Github className="mr-2 h-4 w-4" />
                View the implementation
              </a>
            </div>
          </div>

          <div className="border-t border-white/15 bg-[radial-gradient(circle_at_80%_15%,#4D63F640,transparent_45%)] p-6 lg:border-l lg:border-t-0 lg:p-10">
            <div className="flex h-full flex-col justify-center gap-3">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-bold text-[#AFC0FF]">{step.number}</span>
                    <div>
                      <h3 className="text-lg font-semibold !text-white">{step.label}</h3>
                      <p className="mt-1 text-sm text-white/55">{step.detail}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <span className="absolute -bottom-4 left-8 z-10 text-lg text-[#AFC0FF]" aria-hidden="true">
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
