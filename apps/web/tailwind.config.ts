import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        moonbar: {
          // Current palette
          pink:      '#F068B5',  // primary pink
          darkpink:  '#B74F8A',  // dark pink
          body:      '#626262',  // body text
          footer:    '#2C2C2C',  // footer bg
          introbg:   '#F0F0F0',  // intro section bg
          appbg:     '#F2F2F2',  // app banner bg
          online:    '#70C11F',  // reader online
          busy:      '#F59E0B',
          offline:   '#9CA3AF',
          // Legacy aliases (used by reader components)
          dark:      '#626262',
          mid:       '#888888',
          night:     '#2C2C2C',
          gold:      '#F068B5',
          purple:    '#B74F8A',
          star:      '#F068B5',
          teal:      '#9cd9e1',
        },
      },
      fontFamily: {
        display: ['Raleway', 'system-ui', 'sans-serif'],   // nav, hero headings, section headings
        sans:    ['Overpass', 'system-ui', 'sans-serif'],  // body, buttons, supporting UI
      },
      backgroundImage: {
        'brand-gradient':   'linear-gradient(135deg, #f068b5 0%, #d888c1 25%, #b4b9d4 50%, #9cd9e1 76%, #87f6ec 100%)',
        'brand-gradient-35':'linear-gradient(35deg,  #f068b5 0%, #d888c1 25%, #b4b9d4 50%, #9cd9e1 76%, #87f6ec 100%)',
        'pink-cta':         'linear-gradient(#F068B5 0%, #B74F8A 100%)',
        'green-cta':        'linear-gradient(to right, #70C11F 0%, #94E526 100%)',
        'pink-mobile':      'linear-gradient(#F068B5 0%, #B74F8A 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in':    'fadeIn 0.4s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
