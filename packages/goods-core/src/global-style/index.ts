import {
  createGlobalStyle,
  FlattenSimpleInterpolation,
} from 'styled-components'
import defaultFontFace from './font-face'

export interface GlobalStyleProps {
  fontFace?: FlattenSimpleInterpolation
  extra?: FlattenSimpleInterpolation
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${props => props.fontFace || defaultFontFace()}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    color: inherit;
    font-family: '${props => props.theme.fontBase || 'Rubik'}';
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

  ${props => props.extra || ''}
`

export default GlobalStyle
