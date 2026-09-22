/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'lb-cream': '#f6f6ee',
        'lb-cream-light': '#fbfbf7',
        'lb-cream-dark': '#ebebdf',
        'lb-gray': '#636164',
        'lb-gray-dark': '#2c2a2d',
        'lb-gray-light': '#8a888b',
        'lb-white': '#ffffff',
        'lb-accent': '#d97537',
        'lb-accent-dark': '#be6025',
        'lb-accent-light': '#fdf2eb',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-in-out',
        'slide-left': 'slide-left 0.7s ease-out',
        'slide-right': 'slide-right 0.7s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(44, 42, 45, 0.07)',
        'luxury-hover': '0 25px 50px -12px rgba(44, 42, 45, 0.12)',
        'card': '0 4px 20px rgba(99, 97, 100, 0.06)',
      },
    },
  },
  plugins: [],
};
