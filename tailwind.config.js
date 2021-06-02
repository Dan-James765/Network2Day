module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        awesomegreen: "#1e3932",
        linkedingrey: "#f3f2ef",
        linkedinblue: "#0A66C6",
        linkedinhovergrey: "#EBEBEB",
      },
      width: {
        "w-140": "29rem",
        "w-150": "36rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
