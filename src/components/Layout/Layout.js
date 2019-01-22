// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import '../../styles/style-basic.scss'

import * as v from '../../config/variables'
import { Header, Footer } from '.'
// import './layout.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 17px;
    color: ${v.black};
  }

  a {
    /* color: #90cac0; */
  }
  
  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: 'Scope One', sans-serif;
    font-weight: 400;
    color: ${v.black};
  }

  h1, .h1 {
    font-size: 3rem;
  }
`

const Container = styled.div`
  min-height: 700px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />

        <Container>{children}</Container>

        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
