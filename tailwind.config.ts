import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {
    //   'karry': '#FFEBD2',
    //   'atomic-tangerine': '#FFA364',
    //   'crusta': '#FC7643',
    //   'apple-blossom': '#AF4F41',
    //   'pickled-bluewood': '#273248',
    //   'blue-grey': '#475C7A',
    // }
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
export default config
