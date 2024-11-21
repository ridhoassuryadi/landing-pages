/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    /** 
     * Project Files
     * TODO(@ridho): need refactor this, and standarization
     **/
    "./components/**/*.{js,ts,jsx,tsx}",
    "./apps/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/app/**/*.{tsx,ts,jsx,js}',
    /** Bungas Core Files */
    '../../packages/bungas-ui/src/*.{js,ts,jsx,tsx}', 
    '../../packages/bungas-ui/src/components/**/*.{js,ts,jsx,tsx}', // Add the ui package
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        backgroundContrast: "#111",
        textBlack: "#1d1d1f",
        white: "#fff",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        background: withOpacity("--background-color"),
        main: withOpacity("--main-color"),
        text: withOpacity("--text-color"),
        shadow: withOpacity("--shadow-color"),
        wallpaper: withOpacity("--wallpaper-color"),
        tokopedia: "#00b14f",
        shopee: "#ee4d2d"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "carousel-move": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        intro: {
          "0%": {
            transform: "translateY(10px)",
            opacity: "0",
            filter: "blur(5px)",
          },
          "95%": {
            transform: "translateY(-1px)",
            opacity: "1",
            filter: "blur(0px)",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
            filter: "blur(0px)",
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "carousel-move": "carousel-move var(--duration,80s) infinite",
        intro: "intro 0.3s forwards ease-in-out",
        marker: "marker 4s ease-out infinite",
        shimmer: "shimmer 2s linear infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate"),require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}

function withOpacity(variable) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined)
      return `rgba(var(${variable}), ${opacityValue})`;
    if (opacityVariable !== undefined)
      return `rgba(var(${variable}), var(${opacityVariable}, 1))`;
    return `rgb(var(${variable}))`;
  };
}