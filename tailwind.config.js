/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
  theme: {
    fontFamily: {
      'body': ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        'input-bg-color': '#DCE1EB',
        'button-color': '#AC485A',
        'item-color': '#FFFDF8',
        'background-color': '#EEF0F4',
      },
      flexGrow: {
        1: '1'
      },
    },
  },
  plugins: [],
}

