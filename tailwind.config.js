/* eslint-disable @typescript-eslint/no-require-imports */
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      zIndex: {
        9999: '9999',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        gradient: 'gradient 5s ease infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
        pulse: 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        gradient: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        glow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.4)' },
        },
      },
      backgroundSize: {
        // 👇 necessary for animate-gradient
        '200%': '200% 200%',
      },
      blur: {
        120: '120px',
        140: '140px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // 👇 Allow arbitrary background-size utility like `bg-[length:200%]`
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-size': (value) => ({
            backgroundSize: value,
          }),
        },
        { values: theme('backgroundSize') }
      );
    }),
  ],
};
