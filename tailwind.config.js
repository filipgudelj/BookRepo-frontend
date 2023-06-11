/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        112: "28rem",
        128: "32rem",
        136: "34rem",
      },
      height: {
        112: "28rem",
        128: "32rem",
        136: "34rem",
      },
      backgroundImage: {
        "form-pattern": "url('svgs/FormPattern.svg')",
      },
      fontFamily: {
        sans: ['"Wix Madefor Text"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
