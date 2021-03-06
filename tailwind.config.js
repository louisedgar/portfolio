module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ["Proxima Nova", "sans-serif"],
      body: ["Proxima Nova", "sans-serif"],
    },

    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3332E5'
    }),

    extend: {
      backgroundImage: theme => ({
        'hero-img': "url('../src/assets/bg.png')",
      }),
      colors: {
        'accent': '#3332E5'
      }
    },
  },
  variants: {},
  plugins: [],
};
