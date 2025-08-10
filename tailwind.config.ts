import type { Config } from 'tailwindcss'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import defaultTheme from 'tailwindcss/defaultTheme'
import { palette } from './app/palette.ts'

export default <Partial<Config>>{
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        sans: ['Urbanist', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['ci']),
    }),
  ],
  // Be careful using this option, it can lead to a lot of unused CSS being generated
  safelist: [
    {
      // line-clamp class used in ReadMore.vue is generated dynamically
      pattern: /^line-clamp-(\d+)$/,
    },
  ],
}
