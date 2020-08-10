/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

const fontFace = () => {
  const RubikLight = require('./fonts/rubik-300.woff')
  const RubikReg = require('./fonts/rubik-400.woff')
  const RubikMed = require('./fonts/rubik-500.woff')
  return `
    @font-face {
      font-family: 'Rubik';
      font-style: normal;
      font-display: swap;
      font-weight: 300;
      src: url(${RubikLight}), url(${RubikLight}) format('woff');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Rubik';
      font-style: normal;
      font-display: swap;
      font-weight: lighter;
      src: url(${RubikLight}), url(${RubikLight}) format('woff');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Rubik';
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: url(${RubikReg}), url(${RubikReg}) format('woff');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Rubik';
      font-style: normal;
      font-display: swap;
      font-weight: 500;
      src: url(${RubikMed}), url(${RubikMed}) format('woff');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Rubik';
      font-style: normal;
      font-display: swap;
      font-weight: bold;
      src: url(${RubikMed}), url(${RubikMed}) format('woff');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `
}
export default fontFace
