/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#633CFF",
        purple: "#BEADFF",
        "light-purple": "#EFEBFF",
        "dark-gray": "#333333",
        gray: "#737373",
        "light-gray": "#D9D9D9",
        "lighter-gray": "#FAFAFA",
        white: "#FFFFFF",
        red: "#FF3939",
      },
      fontFamily: {
        instrument: ["'Instrument Sans', sans-serif"],
      },
      minHeight: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "77v": "77vh",
        "80v": "80vh",
        "90v": "90vh",
      },
    },
  },
  plugins: [],
};
