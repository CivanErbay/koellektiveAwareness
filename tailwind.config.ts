import {
  // pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.mjs'

import { getFontsWithFallback } from './utils/font'
// import { safelist } from './utils/colors'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ec0054',
        secondary: '#ff2674',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@pinegrow/tailwindcss-plugin').default({
      //colors: pg_colors, // primary, secondary etc
      // colors: {
      //   primary: '#ec0054', // change this to your desired primary color
      //   secondary: '#ff2674'
      // },
      fonts: getFontsWithFallback(pg_fonts),
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
    require('flowbite/plugin')
  ],
  get content() {
    const _content = [
      '{.,*-layer}/components/**/*.{js,vue,ts}',
      '{.,*-layer}/layouts/**/*.vue',
      '{.,*-layer}/pages/**/*.vue',
      '{.,*-layer}/plugins/**/*.{js,ts}',
      '{.,*-layer}/nuxt.config.{js,ts}',
      '{.,*-layer}/app.vue',
      '{.,*-layer}/*.{mjs,js,ts}',
      "./node_modules/flowbite/**/*.{js,ts}"
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
}
