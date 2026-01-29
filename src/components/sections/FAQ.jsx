import FAQItem from "../ui/FAQItem";

const FAQ_DATA = [
  {
    question: "What is x402?",
    answer:
      "x402 is a real-time, usage-based payment infrastructure that enables AI agents, apps, and platforms to send and receive micropayments instantly across multiple blockchains, powered by Solana and Web3 technology.",
  },
  {
    question: "How fast are transactions on x402?",
    answer:
      "Transactions on x402 are processed in near real-time, with payments verified and settled within seconds, making it suitable for high-frequency and usage-based applications.",
  },
  {
    question: "Which chains does x402 support?",
    answer:
      "x402 supports multiple blockchain networks, including Solana, Base, Polygon, Avalanche, and other EVM-compatible chains, allowing flexible cross-chain integrations.",
  },
  {
    question: "What is the minimum payment amount?",
    answer:
      "x402 is designed for micropayments, allowing developers to charge very small amounts per request or usage, with no fixed minimum that would limit real-time or pay-per-action models.",
  },
  {
    question: "How can developers integrate x402 into their app?",
    answer:
      "Developers can integrate x402 using PayAI’s APIs and SDKs, enabling usage-based payments with just a few lines of code, without needing to manage wallets, settlements, or blockchain complexity.",
  },
  {
    question: "Is x402 secure?",
    answer:
      "Yes. x402 leverages blockchain-native security, cryptographic verification, and on-chain settlement to ensure transactions are transparent, tamper-resistant, and secure by design.",
  },
];

export const FAQ = () => {
  return (
    <section className="bg-white">
      <div className="container py-20 flex flex-col items-center">
        <div className="max-w-[600px] flex flex-col items-center">
          <h2 className="text-[36px] text-[#09090B]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#0A0A0A]/60 text-center mt-4">
            Explore the most common questions from our community and learn how
            to make the most of x402.
          </p>
        </div>

        <div className="w-full max-w-[800px] mt-[60px] flex flex-col gap-4">
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
