/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '.dark-theme'], // site default is dark; ".light-theme" class toggles light
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: '#6C63FF',
        logoAccent: '#7B61FF',
      },
      keyframes: {
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseDot: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(34, 197, 94, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(34, 197, 94, 0)' },
        },
      },
      animation: {
        slideInUp: 'slideInUp 1.5s ease-in-out forwards',
        rotate360: 'rotate360 25s ease-in infinite',
        pulseDot: 'pulseDot 2s infinite',
      },
    },
  },
  plugins: [],
};
