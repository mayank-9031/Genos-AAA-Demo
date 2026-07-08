import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B2545",
        stone: "#F4EFE6",
        amber: "#D98E36",
        // Darkened from #7A8D7A so small uppercase labels meet WCAG 2.2 AA (4.5:1) on stone/cream
        sage: "#5C6E57",
        charcoal: "#1A1A1A",
        // OCRE-style hero base — warm burnt terracotta
        terracotta: "#B5572B",
        cream: "#EFE7DC",
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', '"Tiempos Headline"', "serif"],
        sans: ['var(--font-inter)', "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "scroll-cue": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.75" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "scroll-cue": "scroll-cue 1.8s ease-in-out infinite",
        fadeIn: "fadeIn 200ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
