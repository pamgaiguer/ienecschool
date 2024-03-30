module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "#002455",
        btn: "#003D90",
      },
      fontFamily: {
        "inter-regular": ["Inter", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("flowbite/plugin")],
};
