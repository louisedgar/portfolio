module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ["SF Pro Display", "sans-serif"],
      body: ["SF Pro Display", "sans-serif"],
    },

    extend: {
      backgroundImage: theme => ({
        'hero-img': "url('../src/assets/bg.png')"
      })
    },
  },
  variants: {},
  plugins: [],
};
