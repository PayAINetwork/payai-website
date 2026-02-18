import Image from "next/image";

export const HeroBuiltWithPayai = () => {
  return (
    <section className="container-payai bg-white border-y border-[#E4E4E7]">
      <div className="grid grid-cols-2 divide-x divide-[#E4E4E7] border-x border-[#E4E4E7]">
        <div className="px-8 py-20">
          <h1 className="text-2xl lg:text-[56px] leading-[66px] lg:tracking-[-1%] font-medium text-[#09090B]">
            Real Projects Powered by PayAI
          </h1>
          <p className="mt-4 text-[#71717A]">
            Explore the growing ecosystem of products and platforms using PayAI
            to enable instant, usage-based payments for apps and AI agents.
          </p>
          <div className="mt-11 flex gap-4">
            <div>
              <h3 className="text-2xl lg:text-[32px] lg:leading-10 font-medium text-[#09090B]">
                25+
              </h3>
              <span className="text-sm text-[#0A0A0A]/60 mt-1.5">
                Projects Integrated
              </span>
            </div>
            <div>
              <h3 className="text-2xl lg:text-[32px] lg:leading-10 font-medium text-[#09090B]">
                35M+
              </h3>
              <span className="text-sm text-[#0A0A0A]/60 mt-1.5">
                Transactions Processed
              </span>
            </div>
            <div>
              <h3 className="text-2xl lg:text-[32px] lg:leading-10 font-medium text-[#09090B]">
                {"<1s"}
              </h3>
              <span className="text-sm text-[#0A0A0A]/60 mt-1.5">
                Average Settlement Time
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/hero/built-with-payai.png"
            alt="Hero Image"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};
