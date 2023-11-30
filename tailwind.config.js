/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'midnight': '#121063',
      'agpurple': '#7F56D9',
      'agdarkpurple': '#400453',
      'agblack': '#313131',
      'agpink': '#E9D7FE',
      'aggrey': '#C1C7D0',
      'agverifiedpink': '#C86BE8',
      'aground': '#F0F0F0',
      'agdisable': '#F3F3F3',
    },
    fontFamily: {
      inter: ['Inter'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}

