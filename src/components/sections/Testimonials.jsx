import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const COMPANIES_DATA = [
  {
    src: "/testimonials/teller-dark.webp",
    name: "teller",
  },
  {
    src: "/testimonials/gamma-dark.webp",
    name: "gamma",
  },
  {
    src: "/testimonials/zapier-dark.webp",
    name: "zapier",
  },
  {
    src: "/testimonials/fanatics-dark.webp",
    name: "fanatics",
  },
  {
    src: "/testimonials/continue-dark.webp",
    name: "continue",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-white" id="use-cases">
      <div className="container-payai py-8 lg:pt-20 lg:pb-[60px] flex flex-col items-center">
        <div className="lg:w-[720px] flex flex-col items-center">
          <h2 className="text-2xl lg:text-[36px] text-[#09090B] text-center">
            Real Stories from the x402 Community
          </h2>
          <p className="text-sm lg:text-lg text-[#0A0A0A]/60 text-center mt-4">
            Hear from developers, partners, and early adopters who've
            experienced how x402 payments transform their apps and workflows.
          </p>
        </div>
        <Link
          className="inline-flex items-center justify-center bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)] text-white px-4 py-2.5 mt-4 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-lg transition-colors hover:bg-[#FFFFFF]"
          href="/built-with-payai"
          target="_blank"
        >
          See All Testimonials
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
      <div className="container-payai pb-[60px] flex flex-col items-center">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="p-4 lg:px-8 lg:py-18 lg:w-[360px] border border-[#E4E4E7]">
            <div className="flex items-center gap-1.5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.1343 18.3844C32.0182 18.5006 31.8804 18.5928 31.7286 18.6557C31.5769 18.7186 31.4142 18.751 31.25 18.751C31.0857 18.751 30.923 18.7186 30.7713 18.6557C30.6195 18.5928 30.4817 18.5006 30.3656 18.3844L21.25 9.26719V33.75C21.25 34.0815 21.1183 34.3995 20.8838 34.6339C20.6494 34.8683 20.3315 35 20 35C19.6684 35 19.3505 34.8683 19.1161 34.6339C18.8817 34.3995 18.75 34.0815 18.75 33.75V9.26719L9.63434 18.3844C9.39979 18.6189 9.08167 18.7507 8.74996 18.7507C8.41826 18.7507 8.10014 18.6189 7.86559 18.3844C7.63104 18.1498 7.49927 17.8317 7.49927 17.5C7.49927 17.1683 7.63104 16.8502 7.86559 16.6156L19.1156 5.36563C19.2317 5.24941 19.3695 5.15721 19.5213 5.09431C19.673 5.0314 19.8357 4.99902 20 4.99902C20.1642 4.99902 20.3269 5.0314 20.4786 5.09431C20.6304 5.15721 20.7682 5.24941 20.8843 5.36563L32.1343 16.6156C32.2506 16.7317 32.3428 16.8696 32.4057 17.0213C32.4686 17.1731 32.5009 17.3357 32.5009 17.5C32.5009 17.6643 32.4686 17.8269 32.4057 17.9787C32.3428 18.1304 32.2506 18.2683 32.1343 18.3844Z"
                  fill="#4D63F6"
                />
              </svg>

              <h3 className="text-2xl lg:text-[36px] font-medium">85%</h3>
            </div>
            <p className="mt-2 text-[#0A0A0A]/60 text-sm lg:text-lg">
              Faster Transaction Processing
            </p>
          </div>
          <div className="p-4 lg:px-8 lg:py-10 flex-1 border border-[#E4E4E7]">
            <p className="text-[#09090B] text-base lg:text-2xl font-medium">
              “Integrating x402 cut our transaction latency from 5 seconds to
              under 800 milliseconds. Our AI trading bots now settle payments in
              real time — no queues, no manual triggers”
            </p>
            <div className="mt-4 flex items-center gap-4">
              <svg
                width="37"
                height="1"
                viewBox="0 0 37 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="37" y2="0.5" stroke="#71717A" />
              </svg>
              <p className=" text-[#71717A] text-sm lg:text-lg">
                Atlas Labs, AI Automation Platform
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="p-4 lg:px-8 lg:py-18 lg:w-[360px] border border-[#E4E4E7]">
            <div className="flex items-center gap-1.5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.1343 18.3844C32.0182 18.5006 31.8804 18.5928 31.7286 18.6557C31.5769 18.7186 31.4142 18.751 31.25 18.751C31.0857 18.751 30.923 18.7186 30.7713 18.6557C30.6195 18.5928 30.4817 18.5006 30.3656 18.3844L21.25 9.26719V33.75C21.25 34.0815 21.1183 34.3995 20.8838 34.6339C20.6494 34.8683 20.3315 35 20 35C19.6684 35 19.3505 34.8683 19.1161 34.6339C18.8817 34.3995 18.75 34.0815 18.75 33.75V9.26719L9.63434 18.3844C9.39979 18.6189 9.08167 18.7507 8.74996 18.7507C8.41826 18.7507 8.10014 18.6189 7.86559 18.3844C7.63104 18.1498 7.49927 17.8317 7.49927 17.5C7.49927 17.1683 7.63104 16.8502 7.86559 16.6156L19.1156 5.36563C19.2317 5.24941 19.3695 5.15721 19.5213 5.09431C19.673 5.0314 19.8357 4.99902 20 4.99902C20.1642 4.99902 20.3269 5.0314 20.4786 5.09431C20.6304 5.15721 20.7682 5.24941 20.8843 5.36563L32.1343 16.6156C32.2506 16.7317 32.3428 16.8696 32.4057 17.0213C32.4686 17.1731 32.5009 17.3357 32.5009 17.5C32.5009 17.6643 32.4686 17.8269 32.4057 17.9787C32.3428 18.1304 32.2506 18.2683 32.1343 18.3844Z"
                  fill="#4D63F6"
                />
              </svg>

              <h3 className="text-2xl lg:text-[36px] font-medium">$25K+</h3>
            </div>
            <p className="mt-2 text-[#0A0A0A]/60 text-sm lg:text-lg">
              On-chain transactions
            </p>
          </div>
          <div className="p-4 lg:px-8 lg:py-10 flex-1 border border-[#E4E4E7]">
            <p className="text-[#09090B] text-base lg:text-2xl font-medium">
              “With x402, we launched token-based memberships in days, not
              weeks. Over 2,000 users have already unlocked premium AI features
              using our native token”
            </p>
            <div className="mt-4 flex items-center gap-4">
              <svg
                width="37"
                height="1"
                viewBox="0 0 37 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="37" y2="0.5" stroke="#71717A" />
              </svg>
              <p className=" text-[#71717A] text-sm lg:text-lg">
                NeuraStream, AI Content Platform
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="py-6 px-9 lg:p-10 lg:w-[360px] flex lg:flex-col items-center lg:items-start gap-4 border border-[#E4E4E7]">
            <Image
              src="/header/companies.png"
              alt="Companies Image"
              width={160}
              height={52}
              className="w-30 lg:w-40 lg:h-full h-auto"
            />
            <p className="lg:w-[170px] text-sm lg:text-base text-[#0A0A0A]/60 ">
              Trusted by{" "}
              <span className="font-semibold text-[#0A0A0A]">
                3000+ companies
              </span>{" "}
              of all sizes
            </p>
          </div>
          <div className="hidden h-[312px] lg:h-[200px] lg:flex-1 sm:grid grid-cols-2 lg:grid-cols-5 border border-[#E4E4E7]">
            {COMPANIES_DATA.map((company, i) => (
              <div
                key={i}
                className={`relative w-full flex items-center justify-center ${
                  i === COMPANIES_DATA.length - 1
                    ? "col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <Image
                  src={company.src}
                  alt={company.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
