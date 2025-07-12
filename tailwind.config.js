/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'electric-purple': {
          400: '#b266ff',
          500: '#8d33ff',
          600: '#7a1fff',
        },
        'cyber-teal': {
          400: '#00f5d4',
          500: '#00d4aa',
          600: '#00b391',
        },
        'glow-orange': {
          400: '#ff8c5a',
          500: '#ff6b35',
          600: '#e55a2b',
        },
        'deep-space': {
          900: '#0a0a2a',
          950: '#050515',
        },
      },
    },
  },
  plugins: [],
};