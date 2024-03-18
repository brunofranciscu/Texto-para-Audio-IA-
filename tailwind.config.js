/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xxs': '500px',
      'sm': '640px',
      'md': '768px',
      'cl': '960px',
      'lg': '1024px',
      'xl': '1280px',
      'lpt': '1366px',
      '1xl': '1450px',
      '2xl': '1536px',
      '4xl': {'min':'1600px','max': '2560px'}
    },
  },
  plugins: [
    require('tailwindcss-3d')({
      legacy: true
    }),
  ],
}