/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js, jsx}',
    './src/Components/**/*.{js, jsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'display': ["Satisfy"]
      }
    },
  },
  plugins: [  ],
}
