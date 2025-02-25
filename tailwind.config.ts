import type { Config } from "tailwindcss";
import relumeTailwindPreset from "@relume_io/relume-tailwind";

export default {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"], // H1, H2, H3, CTA
        body: ["Work Sans", "sans-serif"], // Paragraphs & UI Copy
        button: ["Inter", "sans-serif"], // Buttons & Labels
        code: ["JetBrains Mono", "monospace"], // Code UI
      },
    },
  },
  presets: [relumeTailwindPreset],
  plugins: [],
} satisfies Config;
