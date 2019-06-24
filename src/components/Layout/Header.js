import { Link } from 'gatsby'
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
    font-size: 0.9rem;
    margin: 0 0.5rem;
    color: #141414;
    text-decoration: none;
    border-bottom: 2px solid #141414;

    &:hover,
    &:focus {
      border-bottom: 2px solid #141414;
    }

    @media (min-width: 576px) {
      font-size: 1rem;
      margin: 0 0.7rem;
    }
  }
`

type Props = {
  // siteTitle: string,
  stickyHeader: boolean,
}

const webforteLogo = require('../../images/webforte-logo.svg')

const Header = ({ stickyHeader }: Props) => (
  <StyledHeader stickyHeader={stickyHeader}>
    <Container>
      <Nav>
        <Link to="/" title="Zur Startseite">
          <Logo src={webforteLogo} alt="webƒorte" />
        </Link>

        <MenuList>
          <MenuItem>
            <Link to="/portfolio" title="Go to Work">
              Work
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/about-me" title="Go to About me">
              About me
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/contact" title="Go to Contact">
              Contact
            </Link>
          </MenuItem>
        </MenuList>
      </Nav>
    </Container>
  </StyledHeader>
)

export default Header
