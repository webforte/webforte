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
      <Headline>Datenschutz</Headline>
      <p>
        <strong>Diese Seite speichert keine personenbezogenen Daten.</strong>
      </p>
      <p>Versprochen!</p>
    </Container>
  </Layout>
)

export default PrivacyPage
