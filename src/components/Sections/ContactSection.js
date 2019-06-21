// @flow
import React from 'react'
import styled from 'styled-components'
import { Lead } from '../UI'

const Centered = styled.div`
  text-align: center;
  padding: 2rem 0;

  @media screen and (min-width: 576px) {
    padding: 3rem 0 6rem;
  }
`

const ContactSection = () => {
  return (
    <Centered>
      <p className="h2">Interested in working with me?</p>
      <Lead>
        Let&lsquo;s create something together and{' '}
        <a href="mailto:&#107;&#111;&#110;&#115;&#116;&#097;&#110;&#116;&#105;&#110;&#064;&#119;&#101;&#098;&#102;&#111;&#114;&#116;&#101;&#046;&#105;&#111;">
          {' '}
          talk.
        </a>
      </Lead>
    </Centered>
    // @flow
  )
}

export default ContactSection
