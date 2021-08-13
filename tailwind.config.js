module.exports = {
  purge: [],
  theme: {
    colors: {
      primary: "#4E3ACC",
      secondary: "#2B42D4",
      accent: "#131126",
      pink: "#F24C8B",
      dark: "#18191F",
      white: "#FFFFFF",
      gray: "#F4F5F7",
    },
    textColor: {
      primary: "#4E3ACC",
      secondary: "#2B42D4",
      accent: "#131126",
      pink: "#F24C8B",
      dark: "#18191F",
      white: "#FFFFFF",
      gray: "#F4F5F7",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#4E3ACC",
      secondary: "#2B42D4",
      accent: "#131126",
      pink: "#F24C8B",
      dark: "#18191F",
      white: "#FFFFFF",
      gray: "#F4F5F7",
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
  variants: {
    extend: {
      transform: ["hover", "focus"],
    },
  },
  plugins: [],
};
