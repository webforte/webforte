import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import * as v from '../../config/variables'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import Footer from './Footer'

const Container = styled.div`
  min-height: 550px;

  a:not(.no-underline):not(.border-none) {
    color: ${v.grayDarker};
    border-bottom: 2px solid ${v.grayDarker};

    &:hover,
    &:focus {
      color: ${v.black};
      text-decoration: none;
    }
  }
`

type Props = {
  children: any
  stickyHeader?: Boolean
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
    render={(data) => (
      <>
        <GlobalStyle />
        <Header
          siteTitle={data.site.siteMetadata.title}
          stickyHeader={stickyHeader}
        />

        <div className="px-3 sm:px-0 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          {children}
        </div>

        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
