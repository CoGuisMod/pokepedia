/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "type-normal": "#A8A878",
        "type-fire": "#F08030",
        "type-water": "#6890F0",
        "type-grass": "#78C850",
        "type-electric": "#F8D030",
        "type-ice": "#98D8D8",
        "type-fighting": "#C03028",
        "type-poison": "#A040A0",
        "type-ground": "#E0C068",
        "type-flying": "#A890F0",
        "type-psychic": "#F85888",
        "type-bug": "#A8B820",
        "type-rock": "#B8A038",
        "type-ghost": "#705898",
        "type-dark": "#705848",
        "type-dragon": "#705848",
        "type-steel": "#B8B8D0",
        "type-fairy": "#F0B6BC",
        "type-shadow": "#705898",
        "type-unknown": "#737373",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
