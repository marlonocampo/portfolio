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
      12: 'repeat(auto-fit, minmax(0, 1fr))'
    }
  },
  plugins: [daysiui, typography],
  daisyui: {
    themes: [
      {
        ligthTheme: {
          primary: '#131d3f',
          secondary: '#cfd7f1',
          'secondary-content': '#edf1ff',
          info: '#01bebe',
          'font-size': '16px',
          white: '#cfd7f1',
          neutral: '#3d4451',
          fontFamily: ['overpass']
        },
        darkTheme: {
          primary: '#ecf1f5',
          secondary: '#39456e',
          'secondary-content': '#131d3f',
          info: '#01bebe',
          'font-size': '16px',
          white: '#cfd7f1',
          neutral: '#3d4451',
          fontFamily: ['overpass']
        }
      }
    ]
  }
}
