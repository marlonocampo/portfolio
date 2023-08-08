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
    }
  },
  plugins: [daysiui, typography],
  daisyui: {
    themes: [
      {
        ligthTheme: {
          primary: '#131d3f',
          secondary: '#cfd7f1',
          'secondary-content': '#f3f6ff',
          info: '#01bebe',
          'font-size': '16px',
          white: '#cfd7f1',
          neutral: '#3d4451',
          fontFamily: ['overpass']
        },
        darkTheme: {
          primary: '#e9ebf2',
          secondary: '#131d3f',
          'secondary-content': '#f3f6ff',
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
