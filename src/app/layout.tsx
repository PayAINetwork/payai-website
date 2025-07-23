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
        {/* Fallback to Inter if FT Regola Neue is not available */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
