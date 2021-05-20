module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
        },
      },
      fontFamily: {
        body: [
          'Open Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
