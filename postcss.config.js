import tailwind from 'tailwindcss'
import * as autoprefixer from 'autoprefixer'

export default {
  plugins: {
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: tailwind,
    autoprefixer
  }
}
