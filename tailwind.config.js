/*eslint no-undef: "error"*/
module.exports = {
  content: ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],
  darkMode: 'class',
  theme: {
    colors: {
      bgMain: '#f9f9f9',
      dark: '#111928',
      main: '#002455',
      btn: '#003D90',
      mainFontColor: '#1F2A37',
      primaryMainGrey: '#637381',
      grayGray7: '#CED4DA',
      primaryTextColor: '#637381',
      blueDefault: '#003D90',
      redDefault: '#EB0007',
      yellowDefault: '#FEC400',
    },
    fontFamily: {
      'inter-regular': ['Inter', 'sans-serif'],
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require('flowbite/plugin'),
    'prettier-plugin-tailwindcss',
    require('@tailwindcss/typography'),
  ],
};
