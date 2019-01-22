// @flow
import React from 'react'
import styled from 'styled-components'

import * as v from '../../config/variables'

const FooterWrap = styled.footer`
  background: ${v.black};
  min-height: 10rem;
`

const Footer = () => <FooterWrap>Footer</FooterWrap>

export default Footer
