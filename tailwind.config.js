/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        amber: {
          50: '#faf8f3',
          100: '#f5f1e8',
          200: '#ebe3d5',
          300: '#ddd4c4',
          400: '#c9b398',
          500: '#b8956f',
          600: '#a37d4f',
          700: '#8a6a42',
          800: '#714f3a',
          900: '#5d4337',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
