module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ["SF Pro Display", "sans-serif"],
      body: ["SF Pro Display", "sans-serif"],
    },

    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3332E5'
    }),

    extend: {
      backgroundImage: theme => ({
        'hero-img': "url('../src/assets/bg.png')"
      }),
      colors: {
        'accent': '#3332E5'
      }
    },
  },
  variants: {},
  plugins: [],
};
