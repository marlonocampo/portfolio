/** @type {import('tailwindcss').Config} */
import * as daysiui from 'daisyui'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}'
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
      }
    }
  },
  plugins: [daysiui, typography],
  daisyui: {
    logs: false,
    themes: [
      {
        darkTheme: {
          primary: '#131d3f',
          secondary: '#cfd7f1',
          'secondary-content': '#edf1ff',
          'secondary-focus': '#1f2c55',
          info: '#01bebe',
          'info-content': '#02a5a5',
          'font-size': '18px',
          white: '#cfd7f1',
          neutral: '#3d4451',
          fontFamily: ['overpass']
        },
        ligthTheme: {
          primary: '#ecf1f5',
          secondary: '#39456e',
          'secondary-content': '#131d3f',
          'secondary-focus': '#e1e9f0',
          info: '#01bebe',
          'info-content': '#02a5a5',
          'font-size': '18px',
          white: '#cfd7f1',
          neutral: '#3d4451',
          fontFamily: ['overpass']
        }
      }
    ]
  }
}
