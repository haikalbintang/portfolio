import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#120E24", // near-black indigo, primary text on light sections
        deep: "#120E24", // dark hero background
        deep2: "#1D1640", // dark hero gradient partner
        paper: "#FAF8FF", // soft lavender-white section background
        paper2: "#F1ECFF",
        pulse: {
          coral: "#FF4D6D", // heartbeat red
          violet: "#7C5CFF", // tech violet
          teal: "#2DD4BF", // monitor-glow teal
          amber: "#FFD166", // playful highlight
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "pulse-gradient":
          "linear-gradient(120deg, #FF4D6D 0%, #7C5CFF 55%, #2DD4BF 100%)",
        "hero-gradient":
          "radial-gradient(120% 120% at 20% 0%, #1D1640 0%, #120E24 55%, #0B0818 100%)",
      },
      keyframes: {
        pulseline: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        pulseline: "pulseline 2.4s ease-out forwards",
        blink: "blink 1s step-end infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
