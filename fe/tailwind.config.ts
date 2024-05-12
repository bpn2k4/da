import { CSSProperties } from "react"
import type { Config } from "tailwindcss"

type Utilities = {
  [key: string]: CSSProperties | { [key: string]: 0 }
}

const utilities: Utilities = {
  '.bg-primary': { '@apply bg-rgb-240 dark:bg-rgb-15': 0 },
  '.text-primary': { '@apply text-rgb-15 dark:text-rgb-240': 0 },
  '.offset-0': { top: 0, left: 0, right: 0, bottom: 0 },
  '.center': { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  '.shadow-primary': { '@apply shadow-[0_4px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_4px_32px_0_rgba(0,0,0,0.1)]': 0 },
}

const config: Config = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        98: '0.98',
        99: '0.99',
      },
      colors: {
        rgb: {
          0: 'rgb(0,0,0)',
          15: 'rgb(15,15,15)',
          30: 'rgb(30,30,30)',
          35: 'rgb(35,35,35)',
          40: 'rgb(40,40,40)',
          55: 'rgb(55,55,55)',
          65: 'rgb(65,65,65)',
          75: 'rgb(75,75,75)',
          80: 'rgb(80,80,80)',
          100: 'rgb(100,100,100)',
          195: 'rgb(195,195,195)',
          225: 'rgb(225,225,225)',
          235: 'rgb(235,235,235)',
          240: 'rgb(240,240,240)',
          250: 'rgb(250,250,250)',
          255: 'rgb(255,255,255)',
        },
        bka: 'rgb(207,14,35)'
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
      }
    },
  },
  plugins: [
    ({ addUtilities }: any) => addUtilities(utilities)
  ],
}
export default config
