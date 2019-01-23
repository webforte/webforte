import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'
import { Container } from 'reactstrap'

const StyledHeader = styled.header`
  height: 70px;
  padding: 1rem 0;
  display: flex;
  align-items: center;

  ${({ stickyHeader }) =>
    stickyHeader &&
    `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
    `}
`

const Nav = styled.nav`
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img`
  width: 40px;
`

const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
`

const MenuItem = styled.li`
  a,
  button {
    margin: 0 0.7rem;
    color: #141414;
    text-decoration: none;
    border-bottom: 2px solid #141414;

    &:hover,
    &:focus {
      border-bottom: 2px solid #141414;
    }
  }
`

type Props = {
  siteTitle: string,
  stickyHeader: boolean,
}

const Header = ({ stickyHeader }: Props) => (
  <StyledHeader stickyHeader={stickyHeader}>
    <Container>
      <Nav>
        <Link to="/" title="Zur Startseite">
          <Logo
            src={require('../../images/webforte-logo.svg')}
            alt="webƒorte"
          />
        </Link>

        <MenuList>
          <MenuItem>
            <Link to="/portfolio">Work</Link>
          </MenuItem>
          <MenuItem>
            <a href="mailto:&#107;&#111;&#110;&#115;&#116;&#097;&#110;&#116;&#105;&#110;&#064;&#119;&#101;&#098;&#102;&#111;&#114;&#116;&#101;&#046;&#105;&#111;">
              Contact
            </a>
          </MenuItem>
        </MenuList>
      </Nav>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
