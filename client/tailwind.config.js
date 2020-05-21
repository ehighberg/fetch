const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        purple: {
          ...colors.purple,
          '700': '#632ca6',
        },
        yellow: {
          ...colors.yellow,
          '400': '#f6bb50',
        },
        gray: {
          ...colors.gray,
          '100': '#fcfcfc',
          '101': 'rgb(250,250,250)',
        }
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
