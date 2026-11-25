import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F93822",
          hover: "#E02D17",
          dark: "#B91C1C",
          light: "#FFA094",
          muted: "rgba(249, 56, 34, 0.12)",
        },
        dark: {
          bg: "#08080A",
          surface: "#111215",
          card: "#15161A",
          cardHover: "#1A1C22",
          border: "#23252B",
          borderSubtle: "#1C1D22",
          text: "#FFFFFF",
          muted: "#9CA3AF",
        },
        live: {
          bg: "#2A0E0E",
          border: "#7F1D1D",
          dot: "#EF4444",
          text: "#FCA5A5",
        },
      },
      fontFamily: {
        sans: ["Inter", "Satoshi", "system-ui", "-apple-system", "sans-serif"],
        display: ["Rajdhani", "Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
      },
    },
  },
  plugins: [],
};
export default config;
