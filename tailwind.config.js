/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#2ec7c0",
        secondaryBlue: "#00abc5",
      },
    },
  },
  plugins: [],
};
