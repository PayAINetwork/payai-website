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
        midnight: "#0A192F",
        neonCyan: "#00E5FF",
        neonCyanLightest: "#E5FCFF",
        electricPurple: "#8A2BE2",
        electricPurpleLightest: "#F3E9FC",
        softIndigo: "#5A5DF7",
        softIndigoDark: "#484AC5",
        softIndigoLightest: "#EEEEFE",
        tealGlow: "#1CC5DC",
        tealGlowLightest: "#E8F9FB",
        darkGray: "#1A1A1A",
        successGreen: "#3DDC97",
        warningOrange: "#FFA500",
        errorRed: "#FF4F4F",
        neutralLightest: "#F2F2F2",
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
