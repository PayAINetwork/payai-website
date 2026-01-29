import Image from "next/image";

export const Blog = () => {
  return (
    <section className="bg-white py-20 space-y-[60px]">
      <div className="container flex flex-col items-center">
        <div className="max-w-[600px] flex flex-col items-center">
          <h2 className="text-[36px] text-[#09090B]">Blog</h2>
          <p className="text-lg text-[#0A0A0A]/60 text-center mt-4">
            Read up on updates, tutorials, and actionable tips.
          </p>
        </div>
      </div>
      <div className="border-y border-[#EDEDED]">
        <div className="container grid grid-cols-2 border-x border-[#E4E4E7] bg-white h-[520px] w-full">
          <div className="px-8 py-10 w-full flex flex-col justify-between">
            <div>
              <span className="text-[#1D45D8] font-medium">
                Technology / Web3
              </span>
              <h3 className="text-[32px] leading-[46px] font-medium text-[#09090B] mt-3">
                Building Real-Time Payment Systems for AI Agents
              </h3>
              <p className="text-[#71717A] mt-6">
                Explore how x402 enables AI agents to autonomously send and
                receive payments, unlocking new use cases in automation, digital
                services, and decentralized economies.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/thumbnails/open-ai.png"
                  alt="rayhan"
                  width="26"
                  height="26"
                  className="rounded-full aspect-square object-cover"
                />
                <p className="text-sm text-[#0A0A0A]/60">Rayhan Kamrun</p>
              </div>
              <p className="text-sm text-[#0A0A0A]/60">Nov 5, 2025</p>
            </div>
          </div>
          <div className="p-4 border-l border-[#E4E4E7]">
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
        <div className="container grid grid-cols-3 border-x border-[#E4E4E7] bg-white h-[360px] w-full">
          <div className="px-8 py-10 w-full flex flex-col justify-between">
            <div>
              <span className="text-[#1D45D8] font-medium">
                Insights / Fintech
              </span>
              <h4 className="text-[28px] leading-[40px] font-medium text-[#09090B] mt-3 line-clamp-2">
                Building Real-Time Payment Systems for AI Agents
              </h4>
              <p className="text-[#71717A] mt-6 line-clamp-3">
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
                  className="rounded-full aspect-square object-cover"
                />
                <p className="text-sm text-[#0A0A0A]/60">Rayhan Kamrun</p>
              </div>
              <p className="text-sm text-[#0A0A0A]/60">Nov 5, 2025</p>
            </div>
          </div>
          <div className="px-8 py-10 w-full flex flex-col justify-between">
            <div>
              <span className="text-[#1D45D8] font-medium">
                Insights / Fintech
              </span>
              <h4 className="text-[28px] leading-[40px] font-medium text-[#09090B] mt-3 line-clamp-2">
                Building Real-Time Payment Systems for AI Agents
              </h4>
              <p className="text-[#71717A] mt-6 line-clamp-3">
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
                  className="rounded-full aspect-square object-cover"
                />
                <p className="text-sm text-[#0A0A0A]/60">Rayhan Kamrun</p>
              </div>
              <p className="text-sm text-[#0A0A0A]/60">Nov 5, 2025</p>
            </div>
          </div>
          <div className="px-8 py-10 w-full flex flex-col justify-between">
            <div>
              <span className="text-[#1D45D8] font-medium">
                Insights / Fintech
              </span>
              <h4 className="text-[28px] leading-[40px] font-medium text-[#09090B] mt-3 line-clamp-2">
                Building Real-Time Payment Systems for AI Agents
              </h4>
              <p className="text-[#71717A] mt-6 line-clamp-3">
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
                  className="rounded-full aspect-square object-cover"
                />
                <p className="text-sm text-[#0A0A0A]/60">Rayhan Kamrun</p>
              </div>
              <p className="text-sm text-[#0A0A0A]/60">Nov 5, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
