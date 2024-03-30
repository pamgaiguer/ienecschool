module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [require("flowbite/plugin")],
};
