import { css } from 'styled-components'
import RubikLight from '../fonts/rubik-300.woff'
import RubikReg from '../fonts/rubik-400.woff'
import RubikMed from '../fonts/rubik-500.woff'

const fontFace = css`
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: url(${RubikLight}), url(${RubikLight}) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url(${RubikReg}), url(${RubikReg}) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: url(${RubikMed}), url(${RubikMed}) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`
export default fontFace
