// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'
import 'intl'

import * as v from '../../config/variables'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import Footer from './Footer'

const Container = styled.div`
  min-height: 550px;

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
  location: Object,
  i18nMessages: Object,
  stickyHeader: boolean,
}

const Layout = (props: Props) => {
  const { children, location, i18nMessages, stickyHeader } = props

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              languages {
                defaultLangKey
                langs
              }
            }
          }
        }
      `}
      render={data => {
        const url = location.pathname
        const { langs, defaultLangKey } = data.site.siteMetadata.languages
        const langKey = getCurrentLangKey(langs, defaultLangKey, url)
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/')
        const langsMenu = getLangs(
          langs,
          langKey,
          getUrlForLang(homeLink, url)
        ).map(item => ({
          ...item,
          link: item.link.replace(`/${defaultLangKey}/`, '/'),
        }))

        return (
          <IntlProvider locale={langKey} messages={i18nMessages}>
            <GlobalStyle />
            <Header
              siteTitle={data.site.siteMetadata.title}
              stickyHeader={stickyHeader}
              langs={langsMenu}
            />

            <Container>{children}</Container>

            <Footer />
          </IntlProvider>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
