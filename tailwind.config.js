const tailwindColors = require('tailwindcss/colors');

const sizes = {};

for (let i = 0; i < 500; i++) {
  sizes[i] = `${i / 4}rem`;
  sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`;
}

const textSizes = {};

for (let i = 0; i < 100; i++) {
  textSizes[i] = `${i}px`;
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}', './styles/**/*.scss'],
  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '600px',
      'max-md': { max: '767px' },
      md: '768px',
      'max-lg': { max: '989px' },
      lg: '990px',
      'max-xl': { max: '1199px' },
      xl: '1200px',
    },
    extend: {
      spacing: sizes,
      minHeight: sizes,
      minWidth: sizes,
      maxHeight: sizes,
      maxWidth: sizes,
      borderRadius: sizes,
      fontSize: textSizes,
      colors: {
        primary: {
          DEFAULT: '#dfa667',
        },
        yellow: {
          DEFAULT: '#dfa667',
          ...tailwindColors.yellow,
        },
        gray: {
          ...tailwindColors.gray,
          50: '#f8f8f8',
          100: '#c4c4c4',
          200: '#b7b7b7',
          300: '#707070',
          400: '#353535',
        },
        black: {
          DEFAULT: '#111111',
        },
      },
      fontFamily: {
        default: ['Greycliff CF'],
        demi: ['Greycliff CF Demi'],
        aldrich: ['Aldrich', 'sans-serif'],
      },
      zIndex: {
        '-1': -1,
      },
      boxShadow: {
        'yellow-md': '0 0 0 0.25rem #8d101740',
        'green-md': '0 0 0 0.25rem #00522c40',
        'blog-card': '0px 15px 60px rgba(67, 69, 70, 0.1)',
      },
    },
  },
  plugins: [],
};
