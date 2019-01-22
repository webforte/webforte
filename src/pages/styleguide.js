// @flow
import React from 'react'
// import { Link } from 'gatsby'

import { Container } from 'reactstrap'
import { Layout } from '../components/Layout'
// import Image from '../components/Image'
import SEO from '../components/seo'

const StyleguidePage = () => (
  <Layout>
    <SEO title="Moderne Web- und App-Entwicklung" />

    <Container>
      <h1>Styleguide</h1>

      <br />

      <h1>Überschrift 1</h1>
      <h2>Überschrift 2</h2>
      <h3>Überschrift 3</h3>
      <h4>Überschrift 4</h4>
      <h5>Überschrift 5</h5>
      <h6>Überschrift 6</h6>
    </Container>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default StyleguidePage
