/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: 'hsl(240, 2%, 13%)',        // eerie-black-1
        'surface-light': 'hsl(240, 1%, 17%)', // onyx
        primary: 'hsl(133, 77%, 49%)',        // main green
        'primary-light': 'hsl(133, 77%, 55%)', // lighter green
        'primary-dark': 'hsl(133, 77%, 45%)',  // darker green
        accent: 'hsl(133, 77%, 60%)',          // brightest green
        gray: {
          400: 'hsl(0, 0%, 84%)',            // light-gray
          500: 'hsl(0, 0%, 70%)',            // lighter gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'gradient-surface': 'var(--gradient-bg)',
        'gradient-border': 'var(--gradient-border)',
        'gradient-green': 'var(--gradient-green)',
      },
    },
  },
  plugins: [],
};