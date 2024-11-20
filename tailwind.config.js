/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.vue",
  ],
  theme: {
    container: {
    },
    extend: {
      screens: {
        'mobile': { 'max': '639px' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
