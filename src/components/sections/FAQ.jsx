import FAQItem from "../ui/FAQItem";

const FAQ_DATA = [
  {
    question: "What is x402?",
    answer:
      "x402 is a universal payment aggregator for AI agents and apps. We provide two products: the x402 Facilitator (HTTP 402 payments protocol) and the Agent Payments SDK (one integration to accept payments from every major blockchain via Crossmint-powered wallets).",
  },
  {
    question: "What is x402 Facilitator?",
    answer:
      "The x402 Facilitator turns any HTTP endpoint into a paid API. It uses the HTTP 402 status code so any agent can pay programmatically — no keys, no accounts, no friction. PayAI hosts the facilitator and handles settlement across networks.",
  },
  {
    question: "What is the Agent Payments SDK?",
    answer:
      "The Agent Payments SDK is a protocol-neutral middleware package (@payai/agent-payments) that lets merchants accept payments via both x402 and MPP across every supported chain with one integration. It ships with framework adapters for Express, Next.js, Hono, and Elysia.",
  },
  {
    question: "How does automatic catalog listing work?",
    answer:
      "When you go live on PayAI, your service is automatically listed in 12+ active agentic catalogs and marketplaces (LobsterCash, AgentCash, AgentWallet, MPP, Coinbase Bazaar, and more). Agents browsing for paid endpoints find you instantly — no manual submission required.",
  },
  {
    question: "What is Crossmint and why are you using it?",
    answer:
      "Crossmint is our wallet infrastructure partner. Their non-custodial, multi-chain wallet stack gives every PayAI merchant and buyer a wallet on every supported network out of the box, so there is no bridging, manual setup, or per-chain integration to manage.",
  },
  {
    question: "Which SDKs are available?",
    answer:
      "Today: TypeScript and Python, with Go and Rust on the roadmap. The TypeScript SDK ships framework-specific subpath exports (Express, Next.js, Hono, Elysia) plus a manual mode for custom servers.",
  },
];

export const FAQ = () => {
  return (
    <section className="bg-white">
      <div className="container-payai py-8 lg:py-20 flex flex-col items-center">
        <div className="max-w-[600px] flex flex-col items-center">
          <h2 className="text-2xl lg:text-[36px] text-[#09090B]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm lg:text-lg text-[#0A0A0A]/60 text-center mt-3 lg:mt-4">
            Explore the most common questions from our community and learn how
            to make the most of x402.
          </p>
        </div>

        <div className="w-full max-w-[800px] mt-6 lg:mt-[60px] flex flex-col">
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
