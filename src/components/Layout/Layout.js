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
    font-size: 3rem;
  }

  h2, .h2 {
    font-size: 2.5rem;
  }
`

const Container = styled.div`
  min-height: 700px;

  a {
    color: ${v.black};
    border-bottom: 2px solid ${v.black};

    &:hover,
    &:focus {
      color: ${v.black};
      text-decoration: none;
    }
  }
`

type Props = {
  children: any,
  stickyHeader: boolean,
}

const Layout = ({ children, stickyHeader }: Props) => (
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
        <Header
          siteTitle={data.site.siteMetadata.title}
          stickyHeader={stickyHeader}
        />

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
