/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      'colors': {
        'dw-black': '#444',
        'dw-cyan': '#009BDC',
        'dw-violet': '#5A2572',
        'dw-gray': {
          'dark': '#777',
          'light': '#d1d1d1',
        },
        'dw-area-1': {
          DEFAULT: '#5A2572',
          '500': '#642472',
          '400': '#69357C',
          '300': '#72357C',
          '200': '#784787',
          '100': '#814887',
        },
        'dw-area-2': {
          DEFAULT: '#2E2672',
          '500': '#3A2673',
          '400': '#41347C',
          '300': '#4B357C',
          '200': '#544587',
          '100': '#5D4587'
        },
        'dw-area-3': {
          DEFAULT: '#6E2272',
          '500': '#782172',
          '400': '#7C357C',
          '300': '#85357C',
          '200': '#894987',
          '100': '#914987'
        },
        'dw-area-4': {
          DEFAULT: '#462672',
          '500': '#502572',
          '400': '#55357C',
          '300': '#5F357C',
          '200': '#674687',
          '100': '#6F4787'
        },

      },
    },
  },
  plugins: [require("rippleui")],
}
