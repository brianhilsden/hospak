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
        primary: '#46BEB3',
        secondary: '#C4E7F3',
        accent1: '#027A7F',
        accent2: '#0B132A',
        text: '#F0F0F0',
        background: '#0B132A',
        hover: '#0B3C3D',
        border: '#C4E7F3',
      },
    },
  },
  plugins: [],
};