/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        main: "#1E1E1E",
      },
      fontFamily: {
        qs: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
