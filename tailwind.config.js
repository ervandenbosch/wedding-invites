module.exports = {
  darkMode: "media",
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        aileron: ["aileron"],
        notoreg: ["notoreg"],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl2: "1220px",
      // => @media (max-width: 1279px) { ... }

      xl: { max: "1220px" },
      // => @media (max-width: 1279px) { ... }

      lg2: "1023px",
      // => @media (min-width: 1023px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md2: "767px",
      // => @media (min-width: 767px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm2: "639px",
      // => @media (min-width: 639px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "550px" },
      // => @media (min-width: 500px) { ... }
    },
    plugins: [],
  },
};
