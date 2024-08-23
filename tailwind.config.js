/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        selec: {
          100: "#812485",
        },
        fondo: {
          100: "#000c1f",
        },
        cont: {
          100:"#00122e",
        },

        nav: {
          50: "#EEDBFF",
          100: "#DFBDFF",
          200: "#BC75FF",
          300: "#9C33FF",
          400: "#7C00F0",
          500: "#5900AB",
          600: "#47008A",
          700: "#350066",
          800: "#220042",
          900: "#120024",
          950: "#08000F",
        },
        link: {
          100: "#3BBDF5",
          200: "#1BB2F3",
          300: "#0BA0DF",
          400: "#0A8BC2",
          500: "#0873A0",
          600: "#065A7E",
          700: "#054561",
          800: "#032D3F",
          900: "#021822",
          950: "#010A0F",
        },
        btn: {
          50: "#FF0FB3",
          200: "#BD0081",
          400: "#6e004c",
          600: "#54003a",
        },
        alerts: {
          100: "#1EE618",
          300: "#FFB433",
          500: "#EB0000",
        },
        categoria: {
          100: "#005761",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}