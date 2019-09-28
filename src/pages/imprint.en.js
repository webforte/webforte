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

const ImpressumPage = () => (
  <Layout>
    <SEO title="Imprint" />

    <Container>
      <Headline>Imprint</Headline>
      <p>
        <strong>Information according to § 5 TMG</strong>
      </p>
      <p>
        Konstantin Werner
        <br />
        Bischofsweg 24
        <br />
        01099 Dresden
      </p>

      <p>
        E-Mail:{' '}
        <a href="mailto:&#107;&#111;&#110;&#115;&#116;&#097;&#110;&#116;&#105;&#110;&#064;&#119;&#101;&#098;&#102;&#111;&#114;&#116;&#101;&#046;&#105;&#111;">
          &#107;&#111;&#110;&#115;&#116;&#097;&#110;&#116;&#105;&#110;&#064;&#119;&#101;&#098;&#102;&#111;&#114;&#116;&#101;&#046;&#105;&#111;
        </a>
      </p>

      <p>
        Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </Container>
  </Layout>
)

export default ImpressumPage
