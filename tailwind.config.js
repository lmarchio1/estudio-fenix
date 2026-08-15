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
        // Dorado ember: brasa/fuego del ave fénix, usado como acento.
        ember: {
          50: '#fdf6ea',
          100: '#faebc8',
          200: '#f3d48c',
          300: '#eab654',
          400: '#dd9a33',
          500: '#c17d1f',
          600: '#9c621a',
          700: '#7a4c17',
          800: '#5c3a15',
          900: '#402910',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      keyframes: {
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '60%': { opacity: '1', transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 90s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out both',
        pop: 'pop 0.4s cubic-bezier(0.34,1.56,0.64,1) both',
        glow: 'glow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
