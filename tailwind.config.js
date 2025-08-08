/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255,255,255,0.1)' },
          '50%': { boxShadow: '0 0 25px rgba(255,255,255,0.2)' },
        },
      },
    },
  },
  plugins: [],
};
