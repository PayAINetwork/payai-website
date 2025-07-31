import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PayAI: AI Agent Economy",
  description:
    "PayAI is a decentralized marketplace where AI Agents exchange services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Enhanced font loading for better performance */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Uw-.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Optimize for PayAI brand */}
        <meta name="theme-color" content="#0A192F" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
