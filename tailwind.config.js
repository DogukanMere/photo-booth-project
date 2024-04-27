/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '400px',

      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      xxl: '1536px',
    },
    extend: {},
    colors: {
      paper: '#ffffff',
      black: '#000',
      blackTransDark: 'rgba(0, 0, 0, 0.9)',
      blackTrans: 'rgba(0, 0, 0, 0.6)',
      blackTransLight: 'rgba(0, 0, 0, 0.3)',
      blackTransMain: 'rgba(0, 0, 0, 0.5)',

      // Font color
      fcPrimary: '#3F3D3C',

      // primary
      primaryLight: '#463f3a',
      primaryMain: '#b400ff',
      primaryDark: '#47008c',
      primary200: '#931dff',
      primary800: '#270063',

      // secondary
      secondaryLight: '#D6CCC2',
      secondaryMain: '#FA8107',
      secondaryDark: '#C96004',
      secondary200: '#FFB742',
      secondary800: '#8D4700',

      // success Colors
      successLight: '#B9F6CA',
      success200: '#69f0AE',
      successMain: '#00e676',
      successDark: '#00C853',
      successDarker: '#156110',

      // cancel
      cancelLight: '#fbe9e7',
      cancelMain: '#d84315',

      // error
      errorLight: '#ef9a9a',
      errorMain: '#f44336',
      errorDark: '#c62828',

      // warning
      warningLight: '#fff8e1',
      warningMain: '#ffe57f',
      warningDark: '#ffc107',

      // grey
      grey50: '#fafafa',
      grey100: '#f5f5f5',
      grey200: '#eeeeee',
      grey300: '#e0e0e0',
      grey500: '#9e9e9e',
      grey600: '#757575',
      grey700: '#616161',
      grey900: '#212121',
      greyBg: '#eef2f6',
    },
  },
  plugins: [],
};
