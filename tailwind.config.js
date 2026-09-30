/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B4DA2',
          orange: '#F58220',
          dark: '#0F172A',
          gray: '#64748B',
          light: '#F1F5F9',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'industrial-pattern': "url('/assets/pattern.svg')",
      }
    },
  },
  plugins: [],
}
