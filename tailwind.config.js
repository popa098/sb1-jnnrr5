/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAFCFA',
        main: '#3C4A3E',
        dop: '#6B796D',
        lightMain: '#E6EDE8',
        lightSecondary: '#D3DBD4',
        red: '#D84C4C',
        purple: {
          main: '#8C3FD8',
          light: '#B27FE5',
          superLight: '#C7A9E6',
          dark: '#50148C',
        },
        green: {
          main: '#59B26D',
          light: '#A8E6B5',
          dark: '#2E7D3F',
        }
      },
      borderRadius: {
        'search': '9999px',
      },
    },
  },
  plugins: [],
}