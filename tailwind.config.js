/**  @type {import('tailwindcss').Config} */
  module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily :{
        roboto :"'Roboto Flex', sans-serif"
      }
    },
  },
  plugins: [],
 }