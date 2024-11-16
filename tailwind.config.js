/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#00bfa5",
        secondaryGray: "#4a4a4a",
        softBlack: "#2e2e2e",
        darkBlack: "#1f1f1f",
      },
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
      },
      boxShadow: {
        primaryGreenGlow: "0 0 15px #00bfa5",
      },
    },
  },
  plugins: [],
};
