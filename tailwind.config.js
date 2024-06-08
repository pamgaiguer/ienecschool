/*eslint no-undef: "error"*/
module.exports = {
  content: ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: '#002455',
        btn: '#003D90',
        mainFontColor: '#1F2A37',
        primaryMainGrey: '#637381',
        grayGray7: '#CED4DA',
      },
      fontFamily: {
        'inter-regular': ['Inter', 'sans-serif'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('flowbite/plugin'), 'prettier-plugin-tailwindcss'],
};
