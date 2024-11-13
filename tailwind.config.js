/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#00bfa5",
        secondaryGray: "#4a4a4a",
      },
    },
  },
  plugins: [],
};
