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
        wevi: {
          darker: "#06080C",
          dark: "#0B0E14",
          card: "#111622",
          cardHover: "#161D2D",
          border: "#1E2638",
          borderHover: "#2A364E",
          purple: {
            DEFAULT: "#9333EA",
            light: "#A855F7",
            glow: "#C084FC",
            dark: "#7E22CE",
          },
          blue: {
            DEFAULT: "#3B82F6",
            light: "#60A5FA",
            dark: "#1D4ED8",
            cyan: "#06B6D4",
          },
          neon: {
            purple: "#B026FF",
            blue: "#00D2FF",
            cyan: "#00F5FF",
            green: "#10B981",
            gold: "#F59E0B",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "esports-mesh": "radial-gradient(at 27% 37%, hsla(267, 85%, 25%, 0.25) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(217, 91%, 30%, 0.25) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(190, 95%, 28%, 0.15) 0px, transparent 50%)",
        "cyber-grid": "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        "neon-purple": "0 0 25px -5px rgba(168, 85, 247, 0.4)",
        "neon-blue": "0 0 25px -5px rgba(59, 130, 246, 0.4)",
        "neon-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.4)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2.5s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { opacity: "0.4", filter: "drop-shadow(0 0 10px rgba(168,85,247,0.4))" },
          "100%": { opacity: "0.9", filter: "drop-shadow(0 0 25px rgba(59,130,246,0.7))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
