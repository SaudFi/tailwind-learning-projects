/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "mona-sans": ['"Mona Sans"', "sans"],
      },
    },
  },
  plugins: [],
};
