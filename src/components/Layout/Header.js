import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'
import { Container } from 'reactstrap'

const HeaderWrap = styled.header`
  height: 50px;
`

const Header = ({ siteTitle }) => (
  <HeaderWrap>
    <Container>Header</Container>
  </HeaderWrap>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
