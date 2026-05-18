import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    company: "NeuralAPI",
    color: "#0F172A",
    letter: "N",
    quote:
      "Integrating PayAI took 20 minutes. We were live on five networks the same afternoon, and got our first paid request from an agent we never knew existed.",
    author: "Lucas Hoffman",
    role: "Founder, NeuralAPI",
  },
  {
    company: "AgentForge Labs",
    color: "#4D63F6",
    letter: "A",
    quote:
      "The auto-listing feature is a game changer. We stopped marketing to individual platforms and let PayAI put us in front of every agentic buyer automatically.",
    author: "Priya Iyer",
    role: "Head of Product, AgentForge",
  },
  {
    company: "FlowStack AI",
    color: "#16A34A",
    letter: "F",
    quote:
      "Finally a payment layer designed for machine-to-machine. The x402 protocol just works — fast, trustless, and our agents love it.",
    author: "Marco Lin",
    role: "CTO, FlowStack AI",
  },
];

const STATS = [
  { value: "15+", label: "Networks & Chains" },
  { value: "203K+", label: "Buyers in Catalog" },
  { value: "$4.2M+", label: "Processed in USD" },
  { value: "99.5%", label: "Uptime SLA" },
];

function TestimonialCard({ t }) {
  return (
    <div className="bg-white border border-[#E4E4E7] p-6 lg:p-8 flex flex-col">
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-semibold"
          style={{ backgroundColor: t.color }}
        >
          {t.letter}
        </div>
        <p className="text-sm font-medium text-[#09090B]">{t.company}</p>
      </div>

      <Quote className="mt-6 w-6 h-6 text-[#4D63F6]/40" />
      <p className="mt-3 text-sm lg:text-base text-[#09090B] leading-relaxed flex-1">
        {t.quote}
      </p>

      <div className="mt-6 pt-4 border-t border-[#EDEDED]">
        <p className="text-sm font-medium text-[#09090B]">{t.author}</p>
        <p className="text-xs text-[#71717A] mt-0.5">{t.role}</p>
      </div>
    </div>
  );
}

export function BuilderTestimonials() {
  return (
    <section id="testimonials" className="bg-white border-t border-[#E4E4E7]">
      <div className="container-payai py-14 lg:py-24">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="text-2xl lg:text-[40px] font-medium text-[#09090B] leading-tight tracking-[-0.01em]">
            What AI Agent Builders Are Saying
          </h2>
          <p className="mt-4 text-sm lg:text-base text-[#71717A]">
            Hear from developers, partners, and early adopters who have
            experienced how real-time payments transform their apps and workflows.
          </p>
        </div>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E4E4E7] border border-[#E4E4E7]">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.company} t={t} />
          ))}
        </div>

        {/* Carousel dots placeholder */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4D63F6]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#E4E4E7]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#E4E4E7]" />
        </div>

        {/* Stats bar */}
        <div className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E4E7] border border-[#E4E4E7]">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white px-6 py-8 lg:py-10 flex flex-col items-center text-center"
            >
              <p className="text-3xl lg:text-[40px] font-semibold text-[#09090B]">
                {s.value}
              </p>
              <p className="mt-2 text-xs lg:text-sm text-[#71717A]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
