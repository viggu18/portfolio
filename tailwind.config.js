/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "280px",
      sm: "440px",

      md: "640px",

      lg: "840px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
