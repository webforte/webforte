// @flow
import React from 'react'
import { Layout } from '../components/Layout'
import { Container } from 'reactstrap'

import SEO from '../components/seo'
import { Button } from '../components/UI'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Container>
      <h1>Seite nicht gefunden</h1>
      <p>Diese Route existiert nicht.</p>

      <Button>Zur Startseite</Button>
    </Container>
  </Layout>
)

export default NotFoundPage
