/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        lavishlyYours: ['Lavishly Yours', 'cursive']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ]
};