/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
      theme: ["Roboto Mono", "monospace"],
    },
     colors: {
        'inactive': '#9898a1', 
        'focus': '#333333',
        'wolwhite': '#c6c6c6'
    },
    }
  },
  plugins: [],
}

