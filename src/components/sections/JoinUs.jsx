export const JoinUs = () => {
  return (
    <section className="bg-white border-y border-[#E4E4E7] flex justify-center items-center">
      <div className="max-w-[100rem] px-4 sm:px-6 lg:px-20 mx-auto bg-white w-full">
        <div className="flex flex-col justify-center items-center py-8 lg:py-[60px] border-x border-[#EDEDED]">
          <div className="lg:w-[666px] flex flex-col items-center">
            <h2 className="text-2xl lg:text-[52px] leading-8 lg:leading-[66px] text-[#09090B] font-medium text-center">
              Showcase Your Integration
            </h2>
            <p className="text-sm lg:text-base text-[#0A0A0A]/60 text-center mt-6">
              Join our partnership program to collaborate on real-time payments,
              AI integrations, products, and ecosystem growth.
            </p>

            <a
              className="mt-8 inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-3 py-2 lg:px-4 lg:py-2.5 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg transition-colors hover:bg-[#1D45D8]"
              href="#get-started"
            >
              Join Now
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
