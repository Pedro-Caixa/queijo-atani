import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "paper-image": "url('https://i.ibb.co/g7L3VH6/image.png')",
        "queijo-image": "url('https://i.ibb.co/vJSgLmX/image3.png')"
      },
      fontFamily: {
        'manrope':  ['Manrope', "sans-serif"],
      },
      spacing: {
        '128': '30rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        "grey-regular": '#878680',
        "grey-secondary": '#F8F7F0',
        "black-regular": '#1F1E17',
        'mustard-yellow': '#C5CE38',
        'green-regular': '#4BAF47',
        'orange-regular': '#EEC044',
        "header-grey": '#878680 ',
        "grey-cool": '#E4E2D7'
      }
    },
  },
  plugins: [],
};
export default config;
