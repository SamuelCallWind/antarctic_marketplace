/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '600': '600px',
      },
      height: {
        '1/10': '10%',
        '1/8': '12.5%'
      }
    },
  },
  plugins: [],
}