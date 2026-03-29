import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:        '#0D1E3A',
        'navy-light':'#1A3259',
        gold:        '#B8892A',
        'gold-light':'#D4A84B',
        techblue:    '#1A6B9E',
        slate:       '#3E4E5E',
        cloud:       '#E8EDF2',
        offwhite:    '#F7F9FC',
        mist:        '#EEF2F7',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Georgia', 'Times New Roman', 'serif'],
        ui:      ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
