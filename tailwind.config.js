/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#cc0000',     // Poster Red
          secondary: '#ffc107',   // Gold/Yellow
          light: '#fdf8f5',       // Optional light theme background
          dark: '#990000'         // Darker red for hover states
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
