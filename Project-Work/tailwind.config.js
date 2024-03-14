/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        lightgreen: "#B0D9B1",
        offgreen: "#FFF5E0",
      },
      fontFamily: {
        courier: ["Courier Prime", "monospace"],
        Montagu: ["Montagu Slab", "serif"],
        StyleScript: ["Style Script", "cursive"],
        Sofia: ["Sofia Sans Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
