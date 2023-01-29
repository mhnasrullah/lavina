/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // content: [],
  theme: {
    colors : {
      white : '#ffffff',
      black : '#000000',
      orange : '#FFA500',
      white20 : '#ffffff33',
      trans: '#00000000',
      gray:'#333333',
      'second-white' : '#F1F1F1'
    },
    extend: {
      gridTemplateColumns : {
        'navbar' : '1fr 5fr 1fr'
      }
    },
  },
  plugins: [],
}
