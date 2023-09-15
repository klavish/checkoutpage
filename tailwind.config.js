/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Jost', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#2FB5F7',
        'primary-light': '#F0FAFE'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

