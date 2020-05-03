const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    screens: {
      mobile: '640px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      spacing: {
        '28': '7rem',
        '96': '24rem',
        '128': '32rem',
        '140': '38rem',
        '168': '42rem',
      },
    },
    fontFamily: {
      sans: [
        'Fira Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Noto Serif KR',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Monaco',
        'SFMono-Regular',
        'Menlo',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
      titles: ['Playfair Display', 'Georgia', 'Cambria', '"Times New Roman"'],
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.perspective-3': {
          perspective: '3px',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
