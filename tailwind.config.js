/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E5C2',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          secondary: '#1A1A1A',
          tertiary: '#2A2A2A',
        }
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
