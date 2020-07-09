import { createGlobalStyle } from 'styled-components'
import RubikLight from '../fonts/Rubik-Light.woff2'
import RubikReg from '../fonts/Rubik-Regular.woff2'
import RubikMed from '../fonts/Rubik-Medium.woff2'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: url(${RubikLight}), url(${RubikLight}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
      U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url(${RubikReg}), url(${RubikReg}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
      U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: url(${RubikMed}), url(${RubikMed}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
      U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    color: inherit;
    font-family: 'Rubik';
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  p {
    margin: 0;
    color: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0px;
    width: 100%;
    padding: 0px auto;
    background: ${props => props.theme.colors.white20};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
  input:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  input[type='button' i],
  input[type='submit' i],
  input[type='reset' i],
  input[type='file' i]::-webkit-file-upload-button,
  button {
    padding: 0;
  }
  input {
    -webkit-appearance: none;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    padding: 0;
    border: none;
  }

  .scroll::-webkit-scrollbar-track {
    width: 6px;
    border-radius: 3px;
    background-color: ${props => props.theme.colors.white30};
  }
  .scroll::-webkit-scrollbar {
    width: 6px;
  }
  .scroll::-webkit-scrollbar-thumb {
    width: 6px;
    height: 20%;
    border-radius: 3px;
    background-color: ${props => props.theme.colors.blue50};
  }

  *:focus {
    outline: none;
    filter: none !important;
  }
`

export default GlobalStyle
