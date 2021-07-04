module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.elm"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        bgpulse: {
          "0%, 100%": { background: "#003d4d" },
          "50%": { background: "#004a4d" }
        }
      },
      animation: {
        bgpulse: "bgpulse 9s infinite"
      },
      colors: {
        darkshade: {
          light: "#222222",
          DEFAULT: "#222222",
          dark: "#222222"
        },
        ultramarine: {
          light: "#004a4d",
          DEFAULT: "#003d4d",
          dark: "#003d4d"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
