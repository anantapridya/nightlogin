/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
      colors:{
        "merah": "#D62340",
        "hitam": "#2E2E2E"
      }
    },
  },
  plugins: [],
}
