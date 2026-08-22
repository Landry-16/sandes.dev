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
        // Tailwind's default amber scale already fits the theme; only the
        // luxurious gold accent used across CTAs and highlights is added.
        amber: {
          accent: '#d4af37',
        },
        // Deepen the darkest teal shades into a warm teal-black for
        // backgrounds; 50-800 keep Tailwind's default teal scale.
        teal: {
          900: '#0a2e3d',
          950: '#051920',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(212, 175, 55, 0.3)',
        'glow-lg': '0 0 40px rgba(212, 175, 55, 0.2)',
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
