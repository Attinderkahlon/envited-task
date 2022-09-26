/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
      },
      colors: {
        envited: {
          'primary-400': 'var(--primary-400)',
          'primary-300': 'var(--primary-300)',
          'primary-200': 'var(--primary-200)',
          'primary-100': 'var(--primary-100)',
          'alert-400': 'var(--alert-400)',
          'alert-300': 'var(--alert-300)',
          'alert-200': 'var(--alert-200)',
          'alert-100': 'var(--alert-100)',
          'neutral-600': 'var(--neutral-600)',
          'neutral-500': 'var(--neutral-500)',
          'neutral-400': 'var(--neutral-400)',
          'neutral-300': 'var(--neutral-300)',
          'neutral-200': 'var(--neutral-200)',
          'neutral-100': 'var(--neutral-100)',
          'secondary-300': 'var(--secondary-300)',
          'secondary-200': 'var(--secondary-200)',
          'secondary-100': 'var(--secondary-100)',
          'blue-200': 'var(--blue-200)',
          'blue-100': 'var(--blue-100)',
          'blue-50': 'var(--blue-50)',
          'pink-300': 'var(--pink-300)',
          'light-pink-300': 'var(--light-pink-300)',
          'light-pink-200': 'var(--light-pink-200)',
          'light-pink-100': 'var(--light-pink-100)',
          'green-300': 'var(--green-300)',
        },
      },
    },
  },
  plugins: [],
}
