// @flow
import { createGlobalStyle } from 'styled-components'
import * as v from '../../config/variables'

const GlobalStyle = createGlobalStyle`

  html, body {
    font-size: 18px;
  }

  body {
    color: ${v.black};
  }

  a {

  }
  
  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: 'Scope One', sans-serif;
    font-weight: 400;
    color: ${v.black};
  }

  h1, .h1 {
    font-size: 2rem;
    line-height: 1.4;
  }

  h2, .h2 {
    font-size: 2rem;
    line-height: 1.4;
  }
`

export default GlobalStyle