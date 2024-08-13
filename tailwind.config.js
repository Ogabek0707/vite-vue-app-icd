/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        global1: "#2389DA",
        global2: "#E5E5E5",
        global3: "#12486B",
        error_color: "red"
      }
    },
  },
  plugins: [],
}