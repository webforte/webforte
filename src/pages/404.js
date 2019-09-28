// @flow
import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'reactstrap'
import styled from 'styled-components'

import { Layout } from '../components/Layout'
import SEO from '../components/seo'
// import { Button } from '../components/UI'

const Headline1 = styled.h1``

const Section = styled.div`
  padding: 3rem 0 1rem;

  @media screen and (min-width: 576px) {
    padding: 8rem 0 1rem;
  }
`

const HeadlineSection = styled.header`
  margin-bottom: 3rem;
`

const NotFoundPage = () => (
  <Layout>
    {/* Seite nicht gefunden. */}
    <SEO title="Site not found" />

    <Section>
      <Container>
        <HeadlineSection>
          <Headline1>Seite nicht gefunden</Headline1>
          {/* Sorry, diese Route existiert nicht. */}
          <p>Entschuldigung, diese Seite konnte nicht gefunden werden.</p>
        </HeadlineSection>

        <Link to="/">Zurück zur Startseite</Link>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
