import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Blog = () => {
  return (
    <section className="bg-white py-8 lg:py-20" id="blog">
      <div className="container-payai flex flex-col items-center">
        <div className="container-payai py-8 lg:pt-20 lg:pb-[60px] flex flex-col items-center">
          <div className="lg:w-[720px] flex flex-col items-center">
            <h2 className="text-2xl lg:text-[36px] text-[#09090B] text-center">
              Blog
            </h2>
            <p className="text-sm lg:text-lg text-[#0A0A0A]/60 text-center mt-3 lg:mt-4">
              Read up on updates, tutorials, and actionable tips.
            </p>
          </div>
          <Link
            className="inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-4 py-2.5 mt-4 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg transition-colors hover:bg-[#FFFFFF]"
            href={process.env.NEXT_PUBLIC_BLOG_PAYAI_NETWORK || "#"}
            target="_blank"
          >
            Read Blog
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
      <div className="space-y-6 lg:space-y-[60px]">
        <div className="border-y border-[#EDEDED]">
          <div className="container-payai grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 border-x border-[#E4E4E7] bg-white lg:h-[520px] w-full">
            <div className="border border-[#EDEDED]   px-4 lg:px-8 py-6 lg:py-10 w-full flex flex-col justify-between gap-8">
              <div>
                <span className="text-sm lg:text-base text-[#1D45D8] font-medium">
                  Technology / Web3
                </span>
                <h3 className="text-2xl lg:text-[32px] lg:leading-[46px] font-medium text-[#09090B] mt-2 lg:mt-3">
                  Building Real-Time Payment Systems for AI Agents
                </h3>
                <p className="text-sm lg:text-base text-[#71717A] mt-3 lg:mt-6">
                  Explore how x402 enables AI agents to autonomously send and
                  receive payments, unlocking new use cases in automation,
                  digital services, and decentralized economies.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/thumbnails/open-ai.png"
                    alt="rayhan"
                    width="26"
                    height="26"
                    className="w-6 h-6 lg:w-[26px] lg:h-[26px] rounded-full aspect-square object-cover"
                  />
                  <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                    Rayhan Kamrun
                  </p>
                </div>
                <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                  Nov 5, 2025
                </p>
              </div>
            </div>
            <div className="p-4 border lg:border-l border-[#E4E4E7]">
              <div className="relative w-full h-full">
                <Image
                  src="/thumbnails/open-ai.png"
                  alt="open-ai"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-y border-[#EDEDED]">
          <div className="container-payai grid grid-cols-1 lg:grid-cols-3 border-x border-[#E4E4E7] bg-white lg:h-[360px] w-full">
            <div className="px-4 lg:px-8 py-6 lg:py-10 w-full flex flex-col justify-between border border-[#EDEDED] gap-8">
              <div>
                <span className="text-[#1D45D8] font-medium">
                  Insights / Fintech
                </span>
                <h4 className="text-2xl lg:text-[28px] lg:leading-[40px] font-medium text-[#09090B] mt-2 lg:mt-3 line-clamp-2">
                  Building Real-Time Payment Systems for AI Agents
                </h4>
                <p className="text-sm lg:text-base text-[#71717A] mt-3 lg:mt-6 line-clamp-3">
                  Explore how x402 enables AI agents to autonomously send and
                  receive payments, unlocking new use cases in...
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/thumbnails/open-ai.png"
                    alt="rayhan"
                    width="26"
                    height="26"
                    className="w-6 h-6 lg:w-[26px] lg:h-[26px] rounded-full aspect-square object-cover"
                  />
                  <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                    Rayhan Kamrun
                  </p>
                </div>
                <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                  Nov 5, 2025
                </p>
              </div>
            </div>
            <div className="px-4 lg:px-8 py-8 lg:py-10 w-full flex flex-col justify-between border border-[#EDEDED] gap-8">
              <div>
                <span className="text-[#1D45D8] font-medium">
                  Insights / Fintech
                </span>
                <h4 className="text-2xl lg:text-[28px] lg:leading-[40px] font-medium text-[#09090B] mt-2 lg:mt-3 line-clamp-2">
                  Building Real-Time Payment Systems for AI Agents
                </h4>
                <p className="text-sm lg:text-base text-[#71717A] mt-3 lg:mt-6 line-clamp-3">
                  Explore how x402 enables AI agents to autonomously send and
                  receive payments, unlocking new use cases in...
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/thumbnails/open-ai.png"
                    alt="rayhan"
                    width="26"
                    height="26"
                    className="w-6 h-6 lg:w-[26px] lg:h-[26px] rounded-full aspect-square object-cover"
                  />
                  <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                    Rayhan Kamrun
                  </p>
                </div>
                <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                  Nov 5, 2025
                </p>
              </div>
            </div>
            <div className="px-4 lg:px-8 py-8 lg:py-10 w-full flex flex-col justify-between border border-[#EDEDED] gap-8">
              <div>
                <span className="text-[#1D45D8] font-medium">
                  Insights / Fintech
                </span>
                <h4 className="text2xl lg:text-[28px] lg:leading-[40px] font-medium text-[#09090B] mt-2 lg:mt-3 line-clamp-2">
                  Building Real-Time Payment Systems for AI Agents
                </h4>
                <p className="text-sm lg:text-base text-[#71717A] mt-3 lg:mt-6 line-clamp-3">
                  Explore how x402 enables AI agents to autonomously send and
                  receive payments, unlocking new use cases in...
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/thumbnails/open-ai.png"
                    alt="rayhan"
                    width="26"
                    height="26"
                    className="w-6 h-6 lg:w-[26px] lg:h-[26px] rounded-full aspect-square object-cover"
                  />
                  <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                    Rayhan Kamrun
                  </p>
                </div>
                <p className="text-[13px] lg:text-sm text-[#0A0A0A]/60">
                  Nov 5, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
