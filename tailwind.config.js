module.exports = {
  purge: [],
  theme: {
    colors: {
      primary: "#4E3ACC",
      secondary: "#2B42D4",
      accent: "#171949",
      pink: "#CC3ABD",
      dark: "#18191F",
      white: "#FFFFFF",
    },
    textColor: {
      primary: "#4E3ACC",
      secondary: "#2B42D4",
      accent: "#171949",
      pink: "#CC3ABD",
      dark: "#18191F",
      white: "#FFFFFF",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#4E3ACC",
      secondary: "#2B42D4",
      accent: "#171949",
      pink: "#CC3ABD",
      dark: "#18191F",
      white: "#FFFFFF",
    }),

    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('../src/assets/bg.png')",
        "bg-cta": "url('../src/assets/bg-texture-1.png')",
        "bg-footer": "url('../src/assets/bg-3.png')",
      }),
      fontFamily: {
        display: ["Manrope"],
        body: ["Manrope"],
      },
    },
  },
  variants: {},
  plugins: [],
};
