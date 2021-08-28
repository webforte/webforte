module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xs: '0.8rem',
      },
      colors: {
        brand: '#90cac0',
        gray: {
          600: '#696464',
        },
      },
    },
  },
  variants: {
    extend: {
      grayscale: ['hover'],
    },
  },
  plugins: [],
}
