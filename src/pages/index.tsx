import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container as BsContainer } from 'reactstrap'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import SEO from '../components/seo'
import { BigLink } from '../components/UI'

const portrait = require('../images/portrait.jpg')

const Section = styled.div`
  padding: 0;
  position: relative;
  height: 100vh;
  /* background-image: url(${portrait});
  background-repeat: no-repeat;
  background-size: 50% 100%, cover;
  background-position: right top; */

  @media screen and (min-width: 576px) {
    padding: 0;
  }
`

const Lead = styled.h1`
  font-size: 2.2rem;
  width: 100%;
`

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;

  @media screen and (min-width: 576px) {
    width: 50%;
  }
`

const Container = styled(BsContainer)`
  height: 100%;
`

const IndexPage = () => (
  <Layout stickyHeader>
    <SEO title="Modern web and app development" />

    <Section>
      <div className="absolute top-0 right-0 w-1/2 h-full z-10">
        <StaticImage
          src="../images/portrait.jpg"
          alt="Konstantin Werner"
          className="w-full h-full"
        />
      </div>

      <Container>
        <Content>
          {/* <ProfileImage src={require('../images/me.jpg')} alt="Me" /> */}

          <Lead>
            – Hi, I&apos;m Konstantin,
            <br /> a freelance web and app developer.
          </Lead>

          <div>
            <BigLink as={Link} to="portfolio">
              See my work
            </BigLink>
          </div>
        </Content>
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
