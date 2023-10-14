/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      colors: {
        primray: "#FF8000",
        primrayDark: "#E67300",
        secondary: "#0A3847",
        info: "#205A6D",
        blue: "#1574F5",
        gray: "#F8F5F2",
      }
    },
  },
  plugins: [],
}
