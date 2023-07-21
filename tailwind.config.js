/** @type {import('tailwindcss').Config} */
import * as daysiui from 'daisyui'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [daysiui, typography],
  daisyui: {
    themes: [
      {
        marlonocampoTheme: {
          primary: '#131d3f',
          'primary-focus': '#d7d7d7',
          secondary: '#01bebe',
          accent: '#bec6da',
          neutral: '#3d4451',
          'base-50': '#000',
          'font-size': '14px',
          fontFamily: ['overpass']
        }
      }
    ]
  }
}
