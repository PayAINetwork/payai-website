import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.payai.network",
        pathname: "/content/images/**",
      },
    ],
  },
};

export default nextConfig;
