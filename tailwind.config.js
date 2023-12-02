/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maincolor: "#20B15A",
        secondarycolor: "#D7F5DC",
        titlecolor: "#000000",
        graycolor: "#9D9D9D",
        whitecolor: "#FFFFFF",
      },
      fontFamily: {
        popins: ["var(--font-popins)"],
      },
    },
  },
  plugins: [],
};
