/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
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
            transform: "translate(0px, 0px)",
          },
          "50%": {
            transform: "translate(0px, -40px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
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
        "blink-caret": {
          "from, to": { "border-color": "transparent" },
          "50%": { "border-color": "orange" },
        },
      },
      animation: {
        float: "float 9s infinite",
        fastFloat: "fastFloat 3s infinite",
        floatPlanet: "float 20s infinite",
        blinker: "blinker 1s step-start 0s infinite",
        typing: "typing 2s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
