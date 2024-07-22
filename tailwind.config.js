/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "#4c4e61",
        "grayish-blue": "#a3a5ae",
        "very-light-gray": "#fafafa",
        red: "#ea5353",
        cyan: "#45d3d3",
        orange: "#fcaf4a",
        blue: "#549ef2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        200: 200,
        400: 400,
        600: 600,
      },
    },
  },
  plugins: [],
};
