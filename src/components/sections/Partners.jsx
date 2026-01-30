import Image from "next/image";
import InfiniteLogoScroll from "@/components/ui/InfiniteLogoScroll";

const PARTNERS_DATA = [
  { src: "/partners/solana-dark.svg", name: "solana" },
  { src: "/partners/base-dark.png", name: "base" },
  { src: "/partners/layer-dark.png", name: "layer" },
  { src: "/partners/polygon-dark.png", name: "polygon" },
  { src: "/partners/avalanche-dark.png", name: "avalanche" },
  { src: "/partners/sei-dark.png", name: "sei" },
  { src: "/partners/eliza-dark.png", name: "eliza" },
  { src: "/partners/tgmetrics-dark.png", name: "tgmetrics" },
  { src: "/partners/OOBE-dark.png", name: "OOBE" },
  { src: "/partners/compute-dark.png", name: "compute" },
  { src: "/partners/omniminds-dark.png", name: "omniminds" },
];

export const Partners = () => {
  return (
    <section className="bg-white">
      <div className="container-payai p-8 lg:pt-20 lg:pb-8 flex flex-col items-center">
        <div className="lg:w-[720px] flex flex-col items-center">
          <h2 className="text-2xl lg:text-[36px] text-[#09090B]">
            Ecosystem & Partners
          </h2>
          <p className="text-sm lg:text-lg text-[#0A0A0A]/60 text-center mt-3 lg:mt-4">
            PayAI connects with leading networks and partners to deliver fast,
            reliable, and scalable micropayments across the Web3 ecosystem.
          </p>
        </div>
        <Image
          src="/partners/partners.svg"
          alt="Partners"
          width="1280"
          height="500"
          className="mt-8"
        />
      </div>
      <div className="flex lg:hidden border-y border-[#E4E4E7] w-full overflow-hidden">
        <Image
          src="/features/bg-side.svg"
          alt="background-left"
          width={16}
          height={130}
        />
        <div className="flex-1 my-auto overflow-hidden min-w-0 border-x border-[#E4E4E7]">
          <InfiniteLogoScroll data={PARTNERS_DATA} />
        </div>
        <Image
          src="/features/bg-side.svg"
          alt="background-right"
          width={16}
          height={130}
        />
      </div>

      <div className="hidden lg:flex border-y bg-white border-[#E4E4E7]">
        <Image
          src="/features/bg-side.svg"
          alt="background-left"
          width="80"
          height="256"
          className="h-[256px] object-cover"
        />
        <div className="flex-1 flex flex-wrap justify-center items-center gap-6 border-x border-[#E4E4E7]">
          {PARTNERS_DATA.map((partner) => (
            <div
              key={partner.name}
              className="relative w-[178px] h-[58px] flex items-center justify-center"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <Image
          src="/features/bg-side.svg"
          alt="background-right"
          width="80"
          height="256"
          className="h-[256px] object-cover"
        />
      </div>
    </section>
  );
};
