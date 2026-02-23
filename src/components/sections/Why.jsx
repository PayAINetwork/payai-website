export const Why = () => {
  return (
    <section className="bg-white">
      <div className="container-payai py-20 w-full">
        <div className="space-y-4 max-w-[700px]">
          <span className="text-sm lg:text-lg text-[#1D45D8]">Why PayAI</span>
          <h2 className="text-2xl lg:text-[36px] leading-8 lg:leading-[44px] text-[#09090B] font-medium">
            Payment Infrastructure for the AI Agent Economy
          </h2>
          <p className="text-sm lg:text-lg text-[#0A0A0A]/60">
            PayAI powers real-time, usage-based payments for AI agents and
            platforms with instant settlement and granular pricing.
          </p>
        </div>
      </div>
      <div className="flex border-y border-[#E4E4E7]">
        <div className="w-5 lg:w-20 bg-[url('/features/bg-side.svg')] bg-repeat-y"></div>
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 border-x border-[#E4E4E7]">
          <div className="p-5 lg:px-8 lg:py-10 border border-[#E4E4E7] hover:bg-[#F6F8FF] hover:border-b-[3px] hover:border-b-[#1D45D8] transition-all">
            <span className="text-4xl lg:text-5xl text-[#1D45D8] font-medium">
              $35M+
            </span>
            <h3 className="text-base lg:text-lg mt-8 lg:mt-14">
              Transactions Processed
            </h3>
            <p className="text-sm lg:text-base text-[#71717A] mt-2">
              Powering real-time micropayments across AI agents, and Web3
              platforms.
            </p>
          </div>
          <div className="p-5 lg:px-8 lg:py-10 border border-[#E4E4E7] hover:bg-[#F6F8FF] hover:border-b-[3px] hover:border-b-[#1D45D8] transition-all">
            <span className="text-4xl lg:text-5xl text-[#1D45D8] font-medium">
              {"<1s"}
            </span>
            <h3 className="text-base lg:text-lg mt-8 lg:mt-14">
              Settlement Time
            </h3>
            <p className="text-sm lg:text-base text-[#71717A] mt-2">
              Payments are verified and settled instantly to support live,
              autonomous interactions.
            </p>
          </div>
          <div className="p-5 lg:px-8 lg:py-10 border border-[#E4E4E7] hover:bg-[#F6F8FF] hover:border-b-[3px] hover:border-b-[#1D45D8] transition-all">
            <span className="text-4xl lg:text-5xl text-[#1D45D8] font-medium">
              10+
            </span>
            <h3 className="text-base lg:text-lg mt-8 lg:mt-14">
              Networks Supported
            </h3>
            <p className="text-sm lg:text-base text-[#71717A] mt-2">
              Live on Solana with expanding EVM support for seamless multi-chain
              deployment.
            </p>
          </div>
          <div className="p-5 lg:px-8 lg:py-10 border border-[#E4E4E7] hover:bg-[#F6F8FF] hover:border-b-[3px] hover:border-b-[#1D45D8] transition-all">
            <span className="text-4xl lg:text-5xl text-[#1D45D8] font-medium">
              250+
            </span>
            <h3 className="text-base lg:text-lg mt-8 lg:mt-14">
              AI-Driven Projects
            </h3>
            <p className="text-sm lg:text-base text-[#71717A] mt-2">
              Trusted by AI agents, marketplaces platforms building
              pay-per-request experiences.
            </p>
          </div>
        </div>
        <div className="w-5 lg:w-20 bg-[url('/features/bg-side.svg')] bg-repeat-y"></div>
      </div>
    </section>
  );
};
