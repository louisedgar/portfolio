module.exports = {
  purge: [],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#3332E5",
    }),

    extend: {
      backgroundImage: (theme) => ({
        "hero-img": "url('../src/assets/bg.png')",
      }),
      colors: {
        accent: "#3332E5",
      },
      fontFamily: {
        display: ["Inter"],
        body: ["Inter"],
      },
    },
  },
  variants: {},
  plugins: [],
};
