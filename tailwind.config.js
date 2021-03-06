module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    screens: {
      mobileS: '321px',
      mobileM: '376px',
      mobileL: '425px',
      mobile: '640px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      landscape: '1920px',
    },
    extend: {
      spacing: {
        '28': '7rem',
        '44': '11rem',
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '142': '36rem',
        '148': '38rem',
        '156': '40rem',
        '164': '42rem',
        '172': '44rem',
        '180': '46rem',
        '188': '48rem',
        '196': '50rem',
      },
      colors: {
        // background: '#F0F3EE',
        // primary: '#15161B',
        // secondary: '#7E5E32',
        // gold: '#9B7F5A',
        // olive: '#766e53',
        // dark: '#15161B',
        // background: '#17181C',
        // primary: '#f0f2ee',
        // secondary: '#7C6748',
        // gold: '#9B876D',
        // olive: '#756F5C',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        gold: 'var(--gold)',
        olive: 'var(--olive)',
        dark: 'var(--dark)',
        twitter: '#1DA1F2',
      },
      boxShadow: {
        '3d-effect': '0 0 12px 3px black',
        images: '0 0 15px 3px #444242',
        twitter: '0 0 12px -2px #1DA1F2'
      },
    },
    fontFamily: {
      sans: [
        'Rubik',
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
      landing: ['Yeseva One', 'Georgia', 'Cambria', '"Times New Roman"'],
    },
  },
  variants: {},
}
