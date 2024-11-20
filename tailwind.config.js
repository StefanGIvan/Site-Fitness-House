/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#00bfa5",
        secondaryGray: "#4a4a4a",
        tertiaryGreen: "#00695c",
        softBlack: "#2e2e2e",
        darkBlack: "#1f1f1f",
        purple: "#b5006f",
      },
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
      },
      boxShadow: {
        primaryGreenGlow: "0 0 15px #00bfa5",
        purpleGlow: "0 0 15px #b5006f",
      },
    },
  },
  plugins: [],
};
