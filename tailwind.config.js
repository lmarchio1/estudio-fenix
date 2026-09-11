/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Navy oscuro derivado del logo del Estudio Fénix.
        fenixNavy: {
          50: '#eef3f7',
          100: '#d6e2ec',
          200: '#a8c2d7',
          300: '#749dbd',
          400: '#4879a0',
          500: '#2f5d82',
          600: '#224866',
          700: '#193650',
          800: '#12283c',
          900: '#0b1c2b',
          950: '#06121c',
        },
        // Dorado: único color de acento del sitio. 400 es el tono principal
        // (botones, íconos sobre oscuro); 600 para texto sobre blanco.
        ember: {
          50: '#fcf7ea',
          100: '#f7ebc9',
          200: '#efd592',
          300: '#e5bd5c',
          400: '#d4a437',
          500: '#b98a26',
          600: '#97701d',
          700: '#77571a',
          800: '#5a4318',
          900: '#3f2f12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '60%': { opacity: '1', transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        settle: {
          '0%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        pop: 'pop 0.4s cubic-bezier(0.34,1.56,0.64,1) both',
        settle: 'settle 2.4s ease-out both',
      },
    },
  },
  plugins: [],
}
