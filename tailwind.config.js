/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography')
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        dark: '#1b1b24',
        light: '',
      }
    },
  },
  plugins: [typography],
}
