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
    font-family: ${v.fontFamilySerif};
    font-weight: 400;
    color: ${v.black};
  }

  h1, .h1 {
    font-size: 13vw;
    line-height: 1.4;
    margin: 2rem 0 2rem;

    @media (min-width: 576px) {
      font-size: 2.5rem;
    }
  }

  h2, .h2 {
    font-size: 10vw;
    line-height: 1.4;
    margin: 2rem 0 1rem;
    
    @media (min-width: 576px) {
    font-size: 2rem;
    }
  }

  ul, ol {
    li {
      margin-bottom: 0.75rem;
    }
  }
`

export default GlobalStyle
