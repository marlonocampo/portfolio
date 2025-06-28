/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx,html}'
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'rotate(0%)' }
        },
        slideOut: {
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
          '0%': { transform: 'rotate(0%)', opacity: 1 }
        }
      },
      animation: {
        slide: 'slide .3s linear',
        slideOut: 'slideOut .3s linear'
      },
      colors: {
        blue1: 'rgba(52, 92, 227, 0.2)',
        blue2: 'rgba(0, 41, 132, 0.2)',
        green1: 'rgba(106, 233, 190, 0.2)',
        green2: 'rgba(0, 150, 125, 0.2)',
        red1: 'rgba(251, 135, 135, 0.2)',
        red2: 'rgba(209, 13, 13, 0.2)',
        purple1: 'rgba(71, 21, 207, 0.2)',
        purple2: 'rgba(39, 0, 235, 0.2)'
      },
      fontFamily: {
        base: ['Overpass']
      }
    }
  },
  plugins: [typography]
}
