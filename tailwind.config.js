module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  plugins: [],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      }
    }
  }
}
