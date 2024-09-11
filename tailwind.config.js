/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackish: "#07242B",
        greenish: "#00A770",
      },
    },
  },
  plugins: [],
}