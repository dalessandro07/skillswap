/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        ...defaultTheme.screens
      },
      colors: {
        'custom-black': '#18181b'
      }
    }
  },
  plugins: []
}
