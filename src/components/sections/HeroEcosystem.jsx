import LogoGrid from "../ui/LogoGrid";
import projects from "@/data/projects.json";

export const HeroEcosystem = () => {
  return (
    <section id="home" className="bg-white border-y border-[#E4E4E7] flex justify-center items-center">
      <div className="grid md:grid-cols-2 grid-cols-1 border-x border-[#E4E4E7] max-w-[100rem] mx-4 sm:mx-6 lg:mx-20  bg-white w-full">
        
        <div className="order-1 relative w-full min-h-[400px] md:order-2 overflow-hidden border-l-0 md:border-l border-[#E4E4E7]">
          <LogoGrid/>
        </div>

        <div className="order-2 px-6 py-12 md:px-8 md:py-20 md:order-1">
          <h1 className="text-2xl lg:text-[56px] leading-[66px] lg:tracking-[-1%] font-medium text-[#09090B]">
            Explore the PayAI Ecosystem
          </h1>
          <p className="mt-4 text-[#71717A]">
            Discover projects and platforms building with x402. Directory
            listings do not guarantee current integration health or availability.
          </p>
          <div className="mt-11 flex gap-4">
            <div>
              <h3 className="text-2xl lg:text-[32px] lg:leading-10 font-medium text-[#09090B]">
                {projects.length}
              </h3>
              <span className="text-sm text-[#0A0A0A]/60 mt-1.5">
                Projects Listed
              </span>
            </div>
            <div>
              <h3 className="text-2xl lg:text-[32px] lg:leading-10 font-medium text-[#09090B]">
                SVM / EVM
              </h3>
              <span className="text-sm text-[#0A0A0A]/60 mt-1.5">
                Payment Networks
              </span>
            </div>
            <div>
              <h3 className="text-2xl lg:text-[32px] lg:leading-10 font-medium text-[#09090B]">
                x402
              </h3>
              <span className="text-sm text-[#0A0A0A]/60 mt-1.5">
                Payment Protocol
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
