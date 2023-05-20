/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        principal: "#f4f4ee",
        secondary: "#E1E1DC",
        darkGrey: "#686868",
        violet: "#5850D9",
      },
    },
  },
  plugins: [],
};
