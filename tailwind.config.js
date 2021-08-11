const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      sky: colors.sky,
      gray: colors.coolGray,
      fuchsia: colors.fuchsia,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
