// @flow
import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container } from 'reactstrap'
import { Layout } from '../components/Layout'
// import Image from '../components/Image'
import SEO from '../components/seo'

const Section = styled.div`
  padding: 2rem 0;

  @media screen and (min-width: 576px) {
    padding: 4rem 0;
  }
`

const Lead = styled.h1``

const ProfileImage = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-bottom: 2rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Moderne Web- und App-Entwicklung" />

    <Section>
      <Container>
        <ProfileImage src={require('../images/me.jpg')} alt="Me" />

        <Lead>
          – Hi, I'm Konstantin Werner,
          <br /> a freelance web and app developer.
        </Lead>
      </Container>
    </Section>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
