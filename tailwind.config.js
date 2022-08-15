const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'lightGray':'#f6f6f6',
      'gray':'#e4e4e4',
      'black':'#373737',
      'orange':'#ff9900',
      'lightBlue':'#18a0fb',
      'deepBlue':'#03426b',

    },
    extend: {
      fontFamily: {
        proxima: ["ProximaRegular", ...defaultTheme.fontFamily.sans],
        proximaSemibold: ["ProximaSemibold", ...defaultTheme.fontFamily.sans],
        proximaExtrabold: ["ProximaExtrabold", ...defaultTheme.fontFamily.sans],
        proximaBold: ["ProximaBold", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
