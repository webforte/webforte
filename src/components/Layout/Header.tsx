import { Link } from 'gatsby'
import * as React from 'react'

import styled from 'styled-components'

const StyledHeader = styled.header<{ stickyHeader?: Boolean }>`
  height: 70px;
  padding: 1rem 0;

  @media (min-width: 576px) {
    height: 90px;
    padding: 2rem 0;
  }

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

import webforteLogo from '../../images/webforte-logo.svg'

type Props = { stickyHeader?: Boolean }

const Header = ({ stickyHeader }: Props) => (
  <StyledHeader stickyHeader={stickyHeader}>
    <div className="px-3 sm:px-0 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <nav className="flex items-center justify-between">
        <Link to="/" title="Zur Startseite">
          <Logo src={webforteLogo} alt="Webforte" />
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
      </nav>
    </div>
  </StyledHeader>
)

export default Header
