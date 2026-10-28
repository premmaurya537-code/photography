/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F3ED',
          light: '#FAF8F4',
          dark: '#EFE9DE',
        },
        charcoal: {
          DEFAULT: '#25231F',
          dark: '#181614',
          cinematic: '#201E1B',
          muted: '#635F59',
          light: '#8C867D',
        },
        champagne: {
          DEFAULT: '#C5A880',
          light: '#DBC4A5',
          dark: '#A6885E',
          soft: '#EADBCA',
        },
        beige: {
          DEFAULT: '#E8DED1',
          light: '#F2EDE4',
          border: '#DDD2C3',
          dark: '#C8B9A6',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cormorant', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.22em',
        editorial: '0.15em',
        subtle: '0.08em',
      },
      maxWidth: {
        'editorial': '1280px',
      },
    },
  },
  plugins: [],
};
