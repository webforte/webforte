module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
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
  plugins: [],
}
