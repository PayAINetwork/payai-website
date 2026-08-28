import Image from "next/image";
import InfiniteLogoScroll from "@/components/ui/InfiniteLogoScroll";
import { FACILITATOR_URL, DOCS_URL } from "@/lib/site";

const PARTNERS_DATA = [
  { src: "/partners/solana-dark.svg", name: "solana" },
  { src: "/partners/base-dark.png", name: "base" },
  { src: "/partners/layer-dark.png", name: "layer" },
  { src: "/partners/polygon-dark.png", name: "polygon" },
  { src: "/partners/avalanche-dark.png", name: "avalanche" },
  { src: "/partners/sei-dark.png", name: "sei" },
  { src: "/partners/nansen.png", name: "nansen" },
];

export const Partners = () => {
  return (
    <section className="bg-white">
      {/*
        min-h-screen, not h-screen: the section still fills the viewport on
        large screens, but a hard 100vh clipped its own content once the
        supported-networks copy was added, spilling the diagram over the
        partner logo strip below.
      */}
      <div className="container-payai p-8 lg:pt-20 lg:pb-8 flex flex-col items-center lg:min-h-screen">
        <div className="lg:w-[720px] flex flex-col items-center">
          <h2 className="text-2xl lg:text-[36px] text-[#09090B]">
            Ecosystem & Partners
          </h2>
          <p className="text-sm lg:text-lg text-[#0A0A0A]/60 text-center mt-3 lg:mt-4">
            PayAI connects with leading networks and partners to deliver fast,
            reliable, and scalable micropayments across the Web3 ecosystem.
          </p>

          {/*
            The supported chains were previously communicated only through
            partner logos, which left the list invisible to screen readers, AI
            crawlers, and anyone with images disabled. Stated in text here.
          */}
          <h3 className="text-base lg:text-xl font-medium text-[#09090B] text-center mt-8">
            Supported networks
          </h3>
          <p className="text-sm lg:text-base text-[#0A0A0A]/60 text-center mt-3">
            PayAI is Solana-first and settles USDC micropayments on{" "}
            <strong className="font-medium text-[#09090B]">Solana</strong>,{" "}
            <strong className="font-medium text-[#09090B]">Base</strong>,{" "}
            <strong className="font-medium text-[#09090B]">Polygon</strong>,{" "}
            <strong className="font-medium text-[#09090B]">Avalanche</strong>,{" "}
            <strong className="font-medium text-[#09090B]">Arbitrum</strong>,{" "}
            <strong className="font-medium text-[#09090B]">Sei</strong>,{" "}
            <strong className="font-medium text-[#09090B]">X Layer</strong>, and{" "}
            <strong className="font-medium text-[#09090B]">SKALE</strong> — on
            mainnet and on each network&apos;s testnet. Solana carries most
            production volume because it is the cheapest and fastest place to
            settle a sub-cent payment, and PayAI sponsors the network fee there,
            so a payer holds USDC and nothing else.
          </p>
          <p className="text-sm lg:text-base text-[#0A0A0A]/60 text-center mt-3">
            Both x402 v1 network names and x402 v2 CAIP-2 identifiers are
            accepted. For the authoritative live list, call{" "}
            <a
              href={`${FACILITATOR_URL}/supported`}
              className="underline text-[#09090B]"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET /supported
            </a>{" "}
            on the facilitator, or read the{" "}
            <a
              href={`${DOCS_URL}/x402/supported-networks`}
              className="underline text-[#09090B]"
              target="_blank"
              rel="noopener noreferrer"
            >
              supported networks documentation
            </a>
            .
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
