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
            platforms through supported on-chain payment operations.
          </p>
        </div>
      </div>
      <div className="flex border-y border-[#E4E4E7]">
        <div className="w-5 lg:w-20 bg-[url('/features/bg-side.svg')] bg-repeat-y"></div>
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 border-x border-[#E4E4E7]">
          <div className="p-5 lg:px-8 lg:py-10 border border-[#E4E4E7] hover:bg-[#F6F8FF] hover:border-b-[3px] hover:border-b-[#1D45D8] transition-all">
            <span className="text-4xl lg:text-5xl text-[#1D45D8] font-medium">
              HTTP 402
            </span>
            <h3 className="text-base lg:text-lg mt-8 lg:mt-14">
              Pay Per Request
            </h3>
            <p className="text-sm lg:text-base text-[#71717A] mt-2">
              Advertise machine-readable payment terms for APIs and agent services.
            </p>
          </div>
          <div className="p-5 lg:px-8 lg:py-10 border border-[#E4E4E7] hover:bg-[#F6F8FF] hover:border-b-[3px] hover:border-b-[#1D45D8] transition-all">
            <span className="text-4xl lg:text-5xl text-[#1D45D8] font-medium">
              On-chain
            </span>
            <h3 className="text-base lg:text-lg mt-8 lg:mt-14">
              Verify and Settle
            </h3>
            <p className="text-sm lg:text-base text-[#71717A] mt-2">
              Check the operation result and preserve receipts. Timing depends
              on the network, scheme and load.
            </p>
          </div>
          <div className="p-5 lg:px-8 lg:py-10 border border-[#E4E4E7] hover:bg-[#F6F8FF] hover:border-b-[3px] hover:border-b-[#1D45D8] transition-all">
            <span className="text-4xl lg:text-5xl text-[#1D45D8] font-medium">
              SVM / EVM
            </span>
            <h3 className="text-base lg:text-lg mt-8 lg:mt-14">
              Supported Payment Kinds
            </h3>
            <p className="text-sm lg:text-base text-[#71717A] mt-2">
              Check GET /supported for current protocol, scheme and network combinations.
            </p>
          </div>
          <div className="p-5 lg:px-8 lg:py-10 border border-[#E4E4E7] hover:bg-[#F6F8FF] hover:border-b-[3px] hover:border-b-[#1D45D8] transition-all">
            <span className="text-4xl lg:text-5xl text-[#1D45D8] font-medium">
              Tools &amp; APIs
            </span>
            <h3 className="text-base lg:text-lg mt-8 lg:mt-14">
              Discover the Ecosystem
            </h3>
            <p className="text-sm lg:text-base text-[#71717A] mt-2">
              Explore listed projects and verify current provider requirements before paying.
            </p>
          </div>
        </div>
        <div className="w-5 lg:w-20 bg-[url('/features/bg-side.svg')] bg-repeat-y"></div>
      </div>
    </section>
  );
};
