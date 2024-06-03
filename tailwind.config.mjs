/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
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
            neonBlue: "#00f6ff",
        },
        fontFamily: {
            VT323: ["VT323", "sans-serif"],
            gimenell: ["Gimenell", "sans-serif"],
        },
      keyframes: {
          float: {
              "0%": {
                  transform: "translate(0px, 10px)",
              },
              "50%": {
                  transform: "translate(0px, -50px)",
              },
              "100%": {
                  transform: "translate(0px, 10px)",
              },
          },
          fastFloat: {
              "0%": {
                  transform: "translate(0px, 0px)",
              },
              "50%": {
                  transform: "translate(0px, -20px)",
              },
              "100%": {
                  transform: "translate(0px, 0px)",
              },
          },
          blinker: {
              "50%": {
                  opacity: 0,
              },
          },
          typing: {
              "0%": { width: "0" },
              "100%": { width: "100%" },
          },
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
          float: "float 9s infinite",
          fastFloat: "fastFloat 3s infinite",
          floatPlanet: "float 20s infinite",
          blinker: "blinker 1s step-start 0s infinite",
          typing: "typing 2s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}