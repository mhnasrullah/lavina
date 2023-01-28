/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // content: [],
  theme: {
    colors : {
      white : '#ffffff',
      orange : '#FFA500',
      white20 : '#ffffff33',
      trans: '#00000000',
      gray:'#333333'
    },
    extend: {
      gridTemplateColumns : {
        'navbar' : '1fr 5fr 1fr'
      }
    },
  },
  plugins: [],
}
