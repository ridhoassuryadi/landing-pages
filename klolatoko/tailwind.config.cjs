/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      display: ["Familjen Grotesk", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "2rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["2rem", { lineHeight: "2.5rem" }],
      "4xl": ["2.5rem", { lineHeight: "3.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", "1"],
      "7xl": ["4.5rem", "1.1"],
      "8xl": ["6rem", "1"],
      "9xl": ["8rem", "1"],
    },
    extend: {
      keyframes: {
        disco: {
          "0%": {
            transform: "translateY(-50%) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(-50%) rotate(360deg)",
          },
        },
      },

      colors: {
        chalk: "#ffffff",
        white: "#f5f5f5",
        black: "#171717",
        
        accent: {
          50: "#FFF7F5",
          100: "#FFEAE5",
          200: "#FFD0C7",
          300: "#FFAE9E",
          400: "#FF8870",
          500: "#FF421E",
          600: "#F02800",
          700: "#D12300",
          800: "#AD1D00",
          900: "#801500",
          950: "#611000",

        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
