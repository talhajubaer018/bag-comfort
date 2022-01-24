module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: {
          500: '#C3872C',
          hover: '#D8A557',
        },
        customTeal: {
          200: '#E4EEF1',
          300: '#E0F1FB',
          500: '#62C8D8'
        },
        customGray: {
          200: '#F3F3F3',
          300: '#F8F9FB',
          400: '#7B7B7B',
          700: '#707070',
          900: '#4B4B4B'
        },
        customLavender: {
          300: '#EEECFF'
        }
      },
      fontSize: {
        10: '0.625rem !important',
        11: '0.6875rem !important',
        12: '0.75rem !important',
        14: '0.875rem !important',
        15: '0.9375rem !important',
        16: '1rem !important',
        18: '1.125rem !important',
        20: '1.25rem !important',
        25: '1.5625rem !important',
        30: '1.875rem !important',
        40: '2.5rem !important',
        50: '3.125rem !important',
      },
      gridTemplateColumns: {
        '1/2': '1fr 2fr',
        '3/2': '3fr 2fr',
      },
      spacing: {
        '10': '10%',
        '15': '15%',
      },
      boxShadow: {
        custom: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
      },
      width: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
      },
      maxWidth: {
        '3/4': '75%',
        '9/10': '90%',
      },
      zIndex: {
        'n1': '-1',
      }
    }
  },
  plugins: [],
}
