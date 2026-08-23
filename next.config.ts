import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * `.well-known` cannot be an App Router segment (Next ignores dot-prefixed
   * directories), so the discovery documents are served by routes under
   * /api/well-known and mapped onto their canonical paths here.
   */
  async rewrites() {
    return [
      { source: "/.well-known/mcp.json", destination: "/api/well-known/mcp" },
      { source: "/.well-known/ai-catalog.json", destination: "/api/well-known/ai-catalog" },
      { source: "/.well-known/api-catalog", destination: "/api/well-known/api-catalog" },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.payai.network",
        pathname: "/content/images/**",
      },
      {
        protocol: "https",
        hostname: "payai.ghost.io",
        pathname: "/content/images/**",
      },
      {
        protocol: "https",
        hostname: "storage.ghost.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
