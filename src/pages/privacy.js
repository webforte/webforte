// @flow
import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container } from 'reactstrap'
import { Layout } from '../components/Layout'
// import { } from '../components/UI'
import SEO from '../components/seo'

const Headline = styled.h1`
  margin: 4rem 0 1.5rem;
`

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy" />

    <Container>
      <Headline>Privacy</Headline>
      <p>
        <strong>
          This site does not store or proceed any of your data whatsoever.
        </strong>
      </p>
    </Container>
  </Layout>
)

export default PrivacyPage
