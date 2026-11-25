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
          DEFAULT: "#FACC15",
          hover: "#EAB308",
          active: "#CA8A04",
          light: "#FEF08A",
          muted: "rgba(250, 204, 21, 0.12)",
        },
        dark: {
          bg: "#0B0B0B",
          surface: "#161616",
          card: "#121212",
          elevated: "#1C1C1C",
          border: "#2A2A2A",
          subtle: "#1F1F1F",
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
      boxShadow: {
        "primary-glow": "0 0 30px -5px rgba(250, 204, 21, 0.35)",
        "card-subtle": "0 4px 20px -2px rgba(0, 0, 0, 0.7)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
      },
    },
  },
  plugins: [],
};
export default config;
