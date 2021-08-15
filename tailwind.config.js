const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      sky: colors.sky,
      gray: colors.coolGray,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      blueGray: colors.blueGray,
      emerald: colors.emerald,
      red: colors.red,
      black: colors.black,
      white: colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
