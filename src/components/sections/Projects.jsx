import Image from "next/image";
import Link from "next/link";

const PROJECTS_DATA = [
  {
    image: "/projects/near-protocol.jpg",
    title: "NEAR Protocol",
    desc: "A scalable Layer-1 blockchain focused on developer-friendly tools and fast, low-cost transactions.",
    site: "",
    twitter: "",
  },
  {
    image: "/projects/wurk-fun.jpg",
    title: "WURK.FUN",
    desc: "WURK.FUN integrates PayAI to power on-demand payments between users and AI agents with usage-based pricing.",
    site: "",
    twitter: "",
  },
  {
    image: "/projects/pixel-games-ai.jpg",
    title: "Pixel Games AI",
    desc: "Pixel Games AI uses PayAI to support instant in-game transactions and AI-driven gameplay services.",
    site: "",
    twitter: "",
  },
  {
    image: "/projects/x402-monopoly.jpg",
    title: "x402 Monopoly",
    desc: "x402 Monopoly showcases pay-per-action payments in a game environment using the x402 standard.",
    site: "",
    twitter: "",
  },
  {
    image: "/projects/predict.jpg",
    title: "Predict",
    desc: "Predict integrates PayAI to enable real-time and usage-based payments for prediction and AI insights.",
    site: "",
    twitter: "",
  },
  {
    image: "/projects/earnfi.jpg",
    title: "EarnFi",
    desc: "EarnFi is a Web3 rewards platform that helps users discover, track, and manage on-chain incentives.",
    site: "",
    twitter: "",
  },
  {
    image: "/projects/skale.jpg",
    title: "Skale",
    desc: "Skale is a high-performance blockchain network built for scalable and gas-free decentralized applications.",
    site: "",
    twitter: "",
  },
  {
    image: "/projects/tgmetrics.jpg",
    title: "tgmetrics",
    desc: "tgmetrics integrates PayAI to power on-demand analytics and insights for Telegram communities.",
    site: "",
    twitter: "",
  },
  {
    image: "/projects/nofa-ai.jpg",
    title: "NOFA AI",
    desc: "Powered by PayAI, agents transact and settle strategies in real time. Advanced trading capabilities are now accessible to everyone.",
    site: "",
    twitter: "",
  },
  {
    image: "/projects/t54-ai.jpg",
    title: "t54 AI",
    desc: "t54 ai provides AI tools and services for data-driven applications.With PayAI, each AI request can be monetized individually.",
    site: "",
    twitter: "",
  },
  {
    image: "/projects/dira-network.jpg",
    title: "DIRA Network",
    desc: "DIRA Network is a decentralized network for AI and data interoperability. PayAI supports automated payments.",
    site: "",
    twitter: "",
  },
  {
    image: "/projects/aimo-network.jpg",
    title: "AiMo Network",
    desc: "AiMo Network enables AI-native services and autonomous agents.PayAI powers usage-based payments between agents and applications.",
    site: "",
    twitter: "",
  },
];

export const Projects = () => {
  return (
    <section className="bg-white">
      <div className="container-payai p-8 lg:py-[60px] flex items-center justify-center">
        <h2 className="text-2xl lg:text-[36px] text-[#09090B] text-center font-medium leading-[2.75rem] max-w-[612px]">
          Discover projects across AI, Web2, and Web3.
        </h2>
      </div>

      <div className="container-payai border-y bg-white border-[#E4E4E7]">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 border-x divide-x divide-y divide-[#E4E4E7] border-[#E4E4E7]">
          <div className="lg:col-span-3 flex flex-col lg:flex-row">
            <div className="flex-1 flex px-8 py-6 border-r border-[#E4E4E7]">
              <input
                placeholder="Search projects name..."
                className="flex-1 text-sm lg:text-base text-[#09090B] placeholder:text-[#09090B] focus:ring-transparent"
              />
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.031 9.53062L12.531 17.0306C12.4614 17.1003 12.3787 17.1557 12.2876 17.1934C12.1966 17.2312 12.099 17.2506 12.0004 17.2506C11.9019 17.2506 11.8043 17.2312 11.7132 17.1934C11.6222 17.1557 11.5394 17.1003 11.4698 17.0306L3.96979 9.53062C3.82906 9.38988 3.75 9.19901 3.75 8.99999C3.75 8.80097 3.82906 8.61009 3.96979 8.46936C4.11052 8.32863 4.30139 8.24957 4.50042 8.24957C4.69944 8.24957 4.89031 8.32863 5.03104 8.46936L12.0004 15.4397L18.9698 8.46936C19.0395 8.39968 19.1222 8.34441 19.2132 8.30669C19.3043 8.26898 19.4019 8.24957 19.5004 8.24957C19.599 8.24957 19.6965 8.26898 19.7876 8.30669C19.8786 8.34441 19.9614 8.39968 20.031 8.46936C20.1007 8.53905 20.156 8.62177 20.1937 8.71282C20.2314 8.80386 20.2508 8.90144 20.2508 8.99999C20.2508 9.09854 20.2314 9.19612 20.1937 9.28716C20.156 9.37821 20.1007 9.46093 20.031 9.53062Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1 flex px-8 py-6">
              <span className="flex-1 text-sm lg:text-base text-[#09090B]">
                All Projects
              </span>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.031 9.53062L12.531 17.0306C12.4614 17.1003 12.3787 17.1557 12.2876 17.1934C12.1966 17.2312 12.099 17.2506 12.0004 17.2506C11.9019 17.2506 11.8043 17.2312 11.7132 17.1934C11.6222 17.1557 11.5394 17.1003 11.4698 17.0306L3.96979 9.53062C3.82906 9.38988 3.75 9.19901 3.75 8.99999C3.75 8.80097 3.82906 8.61009 3.96979 8.46936C4.11052 8.32863 4.30139 8.24957 4.50042 8.24957C4.69944 8.24957 4.89031 8.32863 5.03104 8.46936L12.0004 15.4397L18.9698 8.46936C19.0395 8.39968 19.1222 8.34441 19.2132 8.30669C19.3043 8.26898 19.4019 8.24957 19.5004 8.24957C19.599 8.24957 19.6965 8.26898 19.7876 8.30669C19.8786 8.34441 19.9614 8.39968 20.031 8.46936C20.1007 8.53905 20.156 8.62177 20.1937 8.71282C20.2314 8.80386 20.2508 8.90144 20.2508 8.99999C20.2508 9.09854 20.2314 9.19612 20.1937 9.28716C20.156 9.37821 20.1007 9.46093 20.031 9.53062Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
          {PROJECTS_DATA.map((project, key) => (
            <div key={key} className="flex flex-col space-y-6 p-8">
              <Image
                src={project.image}
                alt={project.title}
                width={72}
                height={72}
                className="object-contain w-18 h-18 rounded-xl"
              />
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-lg lg:text-xl font-medium text-[#09090B]">
                  {project.title}
                </h3>
                <p className="text-sm lg:text-base text-[#71717A]">
                  {project.desc}
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href={project.site}
                  className="flex items-center justify-center gap-2 border border-[#E4E4E7] rounded-lg flex-1 py-2.5 shadow-xsmall"
                >
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1.6875C7.55373 1.6875 6.13993 2.11637 4.9374 2.91988C3.73486 3.72339 2.7976 4.86544 2.24413 6.20163C1.69067 7.53781 1.54586 9.00811 1.82801 10.4266C2.11017 11.8451 2.80661 13.148 3.82928 14.1707C4.85196 15.1934 6.15492 15.8898 7.57341 16.172C8.99189 16.4541 10.4622 16.3093 11.7984 15.7559C13.1346 15.2024 14.2766 14.2651 15.0801 13.0626C15.8836 11.8601 16.3125 10.4463 16.3125 9C16.3103 7.06129 15.5391 5.20262 14.1683 3.83175C12.7974 2.46087 10.9387 1.68973 9 1.6875ZM15.1875 9C15.188 9.57063 15.1092 10.1386 14.9534 10.6875H12.2456C12.4181 9.56911 12.4181 8.43089 12.2456 7.3125H14.9534C15.1092 7.86144 15.188 8.42937 15.1875 9ZM7.17188 11.8125H10.8281C10.4679 12.9928 9.84261 14.075 9 14.9766C8.15771 14.0748 7.53245 12.9926 7.17188 11.8125ZM6.89766 10.6875C6.70454 9.57079 6.70454 8.42921 6.89766 7.3125H11.108C11.3011 8.42921 11.3011 9.57079 11.108 10.6875H6.89766ZM2.8125 9C2.81201 8.42937 2.89081 7.86144 3.04664 7.3125H5.75438C5.58188 8.43089 5.58188 9.56911 5.75438 10.6875H3.04664C2.89081 10.1386 2.81201 9.57063 2.8125 9ZM10.8281 6.1875H7.17188C7.53208 5.00724 8.15739 3.92497 9 3.02344C9.84229 3.92521 10.4676 5.0074 10.8281 6.1875ZM14.5076 6.1875H12.0031C11.6874 5.02939 11.1554 3.94149 10.4351 2.98125C11.3053 3.19031 12.1201 3.58508 12.8235 4.13849C13.527 4.69191 14.1024 5.39088 14.5104 6.1875H14.5076ZM7.56492 2.98125C6.84464 3.94149 6.31262 5.02939 5.99696 6.1875H3.48961C3.89762 5.39088 4.47305 4.69191 5.17647 4.13849C5.87989 3.58508 6.69466 3.19031 7.56492 2.98125ZM3.48961 11.8125H5.99696C6.31262 12.9706 6.84464 14.0585 7.56492 15.0188C6.69466 14.8097 5.87989 14.4149 5.17647 13.8615C4.47305 13.3081 3.89762 12.6091 3.48961 11.8125ZM10.4351 15.0188C11.1554 14.0585 11.6874 12.9706 12.0031 11.8125H14.5104C14.1024 12.6091 13.527 13.3081 12.8235 13.8615C12.1201 14.4149 11.3053 14.8097 10.4351 15.0188Z"
                        fill="#09090B"
                      />
                    </svg>
                  </div>
                  <span className="text-sm lg:text-base text-[#09090B] font-medium">
                    View Site
                  </span>
                </Link>
                <Link
                  href={project.twitter}
                  className="flex items-center justify-center gap-2 border border-[#E4E4E7] rounded-lg flex-1 py-2.5 shadow-xsmall"
                >
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2968 7.79405L16.0341 1.125H14.6745L9.69289 6.91564L5.71409 1.125H1.125L7.14174 9.88148L1.125 16.875H2.48461L7.74534 10.7599L11.9473 16.875H16.5363L10.2965 7.79405H10.2968ZM8.43466 9.95862L7.82504 9.08668L2.9745 2.14849H5.06279L8.97723 7.74783L9.58685 8.61978L14.6752 15.8981H12.5869L8.43466 9.95896V9.95862Z"
                        fill="#09090B"
                      />
                    </svg>
                  </div>
                  <span className="text-sm lg:text-base text-[#09090B] font-medium">
                    View Twitter
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-6 flex items-center justify-center gap-1">
        <div className="w-10 h-10 flex items-center justify-center border border-[#E4E4E7] rounded-md hover:cursor-pointer ">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="#71717A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-[#E4E4E7] rounded-md hover:cursor-pointer  text-sm font-medium text-white bg-[linear-gradient(to_right,#4D63F6_17%,#1D45D8_65%)]">
          1
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-[#E4E4E7] rounded-md hover:cursor-pointer  text-sm font-medium text-[#09090B]">
          2
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-[#E4E4E7] rounded-md hover:cursor-pointer  text-sm font-medium text-[#09090B]">
          3
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-[#E4E4E7] rounded-md hover:cursor-pointer  text-sm font-medium text-[#09090B]">
          ...
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-[#E4E4E7] rounded-md hover:cursor-pointer  text-sm font-medium text-[#09090B]">
          24
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-[#E4E4E7] rounded-md hover:cursor-pointer  text-sm font-medium text-[#09090B]">
          25
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-[#E4E4E7] rounded-md hover:cursor-pointer ">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
