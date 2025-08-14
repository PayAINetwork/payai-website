import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PayAI - Powering Payments for the AI Agent Economy",
  description:
    "PayAI enables autonomous agents to transact with each other and humans — securely, seamlessly, and 24/7.",
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
      <body className="">{children}</body>
    </html>
  );
}
