import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#020022",
        muted: "var(--neutral-600)",
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#25292e",
          900: "#1c1f24",
        },
        "muted-dark": "var(--neutral-300)",
        'green': {
          '50': '#edfcf5',
          '100': '#d4f7e6',
          '200': '#aceed2',
          '300': '#76dfb7',
          '400': '#3fc899',
          '500': '#199e75',
          '600': '#0f8c68',
          '700': '#0c7056',
          '800': '#0c5945',
          '900': '#0b493a',
          '950': '#052922',
        },
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        marquee: "marquee var(--marquee-duration) linear infinite",
        "fade-in": "fade-in 0.5s linear forwards",
      },
      boxShadow: {
        derek: `0px 0px 0px 1px rgb(0 0 0 / 0.06),
                0px 1px 1px -0.5px rgb(0 0 0 / 0.06),
                0px 3px 3px -1.5px rgb(0 0 0 / 0.06), 
                0px 6px 6px -3px rgb(0 0 0 / 0.06),
                0px 12px 12px -6px rgb(0 0 0 / 0.06),
                0px 24px 24px -12px rgb(0 0 0 / 0.06)`,
        aceternity: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        marquee: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors, require("@tailwindcss/typography")],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;

