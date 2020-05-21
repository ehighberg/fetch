const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
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
          '100': '#f6bb50',
        }
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
