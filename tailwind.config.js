/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Integral-CF": ["'FONTSPRING DEMO - Integral-CF'", "sans-serif"],
        Satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        primary: "#616060",
        secondary: "#DB4444",
      },
      width: {
        custom: "1280px",
      },
    },
  },
  plugins: [],
};
