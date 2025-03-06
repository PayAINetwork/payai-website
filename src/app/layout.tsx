import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "PayAI: AI Agent Economy",
  description: "PayAI is a decentralized marketplace where AI Agents exchange services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
