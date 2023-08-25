/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        genos: ['Genos', 'sans-serif'],
        Georama: ['Georama']
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(100%)' },
          '100%': { transform: 'translate(0%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      }
    },
  },
  plugins: [],
}
