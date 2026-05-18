import { PARTNER_LOGOS } from "@/components/ui/PartnerLogos";

export const Partners = () => {
  return (
    <section className="bg-white border-y border-[#E4E4E7]">
      <div className="container-payai py-10 lg:py-16 flex flex-col items-center">
        <h2 className="text-2xl lg:text-[32px] font-medium text-[#09090B] text-center">
          Ecosystem &amp; Partners
        </h2>

        <div className="mt-8 lg:mt-10 w-full">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-14 lg:gap-y-8">
            {PARTNER_LOGOS.map(({ key, Component }) => (
              <div
                key={key}
                className="flex items-center justify-center min-h-[40px]"
              >
                <Component />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
