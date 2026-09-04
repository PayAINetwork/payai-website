import type { NextConfig } from "next";

const commerceCheckoutOrigin = (
  process.env.X402_COMMERCE_CHECKOUT_ORIGIN ||
  "https://x402-commerce-checkout.notoriousd3v.workers.dev"
).replace(/\/$/, "");

const nextConfig: NextConfig = {
  /**
   * `.well-known` cannot be an App Router segment (Next ignores dot-prefixed
   * directories), so the discovery documents are served by routes under
   * /api/well-known and mapped onto their canonical paths here.
   */
  async rewrites() {
    return [
      {
        source: "/x402-commerce-checkout",
        destination: `${commerceCheckoutOrigin}/demo`,
      },
      {
        source: "/x402-commerce-checkout/:path*",
        destination: `${commerceCheckoutOrigin}/:path*`,
      },
      { source: "/.well-known/mcp.json", destination: "/api/well-known/mcp" },
      { source: "/.well-known/ai-catalog.json", destination: "/api/well-known/ai-catalog" },
      { source: "/.well-known/api-catalog", destination: "/api/well-known/api-catalog" },
      { source: "/.well-known/security.txt", destination: "/api/well-known/security" },
      { source: "/.well-known/mcp", destination: "/api/well-known/mcp-proxy" },
      { source: "/mcp", destination: "/api/well-known/mcp-proxy" },
    ];
  },
  async redirects() {
    return [
      {
        source: "/x402-commerce-checkout/demo",
        destination: "/x402-commerce-checkout",
        permanent: true,
      },
    ];
  },
  async headers() {
    const privateHeaders = [
      { key: "Cache-Control", value: "private, no-store" },
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
    ];

    return [
      {
        source: "/x402-commerce-checkout/api/:path*",
        headers: privateHeaders,
      },
      {
        source: "/x402-commerce-checkout/checkout/:path*",
        headers: privateHeaders,
      },
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
