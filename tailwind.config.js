/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      xs: "0px",
      sm: "577px",
      smd: "720px",
      md: "769px",
      lg: "993px",
      gl: "1024px",
      xl: "1201px",
    },
    extend: {
      colors: {
        primary: '#4BCAFF',
        darkGray: '#414042',
        gray: "#838383",
        lightGray: '#717071',
        current: 'currentColor',
        transparent: 'transparent'
      },
      boxShadow: {
        panel: '0px 0px 12px 0px rgba(0, 0, 0, 0.12)',
        md: '0px 0px 20px rgba(0, 0, 0, 0.12)',
        blackButton: '0px 6px 10px 0px rgba(49,48,50,0.70)',
        lightButton: '0px 3px 10px 0px rgba(75,202,255,0.70)'
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
            '.svg-hover':{
              'svg':{
                'fill': "#4BCAFF !important"
              },
            },
          }
      )
    })
  ],
}

