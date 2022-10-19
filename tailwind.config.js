/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        main: "#1E1E1E",
        secondary: "#FACD66",
        offWhite: "#EFEEE0",
        player: "rgba(29, 33, 35, 0.3)",
      },
      fontFamily: {
        qs: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
