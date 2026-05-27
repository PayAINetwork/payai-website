import type { Metadata } from "next";
import Script from "next/script";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://payai.network"),
  title: {
    default: "PayAI — x402 Payment Facilitator for AI Agents & Apps",
    template: "%s | PayAI",
  },
  description:
    "PayAI is the x402 payment facilitator for AI agents and apps. Accept agentic payments on every major chain with one integration — no API keys, no accounts, instant settlement.",
  keywords: [
    "x402 facilitator",
    "x402 payments",
    "AI agent payments",
    "agentic payments",
    "agent payments SDK",
    "stablecoin micropayments",
    "HTTP 402",
    "API monetization",
  ],
  openGraph: {
    type: "website",
    url: "https://payai.network",
    siteName: "PayAI",
    title: "PayAI — x402 Payment Facilitator for AI Agents & Apps",
    description:
      "The x402 facilitator for AI agents and apps. Multi-chain micropayments powered by Solana. Get paid by AI agents in 5 minutes.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "PayAI — x402 Payment Facilitator for AI Agents & Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PayAI — x402 Payment Facilitator for AI Agents & Apps",
    description:
      "The x402 facilitator for AI agents and apps. Multi-chain micropayments powered by Solana.",
    images: ["/twitter-image.png"],
    site: "@PayAINetwork",
    creator: "@PayAINetwork",
  },
  alternates: {
    canonical: "https://payai.network",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <html lang="en">
      <head>
        {isProduction && (
          <Script id="gtm-custom-loader" strategy="beforeInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://payai.network/mts/6fdfsowljk.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','5lwd7v=Ag5RMDs%2BSypePFVEPT5QQh1XXlleVQIKVhoNDg4aSAoOHhsYHRhAFwQaUVgCBxU%3D');`}
          </Script>
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Enhanced font loading for better performance - General Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Optimize for PayAI brand */}
        <meta name="theme-color" content="#4D63F6" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="">
        {isProduction && (
          <noscript>
            <iframe
              src="https://load.mts.payai.network/ns.html?id=GTM-N5V93RM6"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {/*
         * SEO: site-wide structured data.
         * Rendered in <body>, not <head>, per the Next.js App Router recommendation
         * (https://nextjs.org/docs/app/guides/json-ld). Putting <script> tags with
         * dangerouslySetInnerHTML directly in <head> can cause hydration mismatches
         * because React's head management may reorder or dedupe them. Google reads
         * JSON-LD from anywhere in the document, so body placement is fully valid.
         */}
        <JsonLd data={buildOrganizationSchema()} id="ld-organization" />
        <JsonLd data={buildWebSiteSchema()} id="ld-website" />
        {children}
      </body>
    </html>
  );
}
