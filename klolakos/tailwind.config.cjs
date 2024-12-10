/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {

boxShadow: {
        sm: "0px 2px 5px rgba(13,34,71,0.08),inset 0px -1px 1px rgba(13,34,71,0.1)",
        md: "rgba(13, 34, 71, 0.12) 0px 1px 8px, rgba(13, 34, 71, 0.12) 0px -1px 1px inset;",
      },
      colors: {
        purple: {
          50: "#EEE8FD",
          100: "#E1D5FB",
          200: "#C3ABF7",
          300: "#A581F3",
          400: "#8757EF",
          500: "#672CEB",
          600: "#4E13CD",
          700: "#3B0F9A",
          800: "#270A66",
          900: "#140533",
          950: "#090217",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("@tailwindcss/forms")
  ],
};
