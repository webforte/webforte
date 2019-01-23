// @flow
import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container, Row, Col } from 'reactstrap'
import { Layout } from '../components/Layout'
// import Image from '../components/Image'
import SEO from '../components/seo'

const portrait = require('../images/portrait.jpg')

const Section = styled.div`
  padding: 0;
  background-image: url(${portrait});
  background-repeat: no-repeat;
  background-size: 50% 100%, cover;
  background-position: right top;

  @media screen and (min-width: 576px) {
    padding: 0;
  }
`

const Lead = styled.h1``

const ProfileImage = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-bottom: 2rem;
`

const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
`

const IndexPage = () => (
  <Layout stickyHeader>
    <SEO title="Moderne Web- und App-Entwicklung" />

    <Section>
      <Container fluid>
        <Row>
          <Col sm="6">
            <Wrap>
              {/* <ProfileImage src={require('../images/me.jpg')} alt="Me" /> */}

              <Lead>
                – Hi, I'm Konstantin Werner,
                <br /> a freelance web and app developer.
              </Lead>
            </Wrap>
          </Col>

          <Col sm="6">
            {/* <img src={portrait} style={{ maxWidth: '100%' }} alt="Me" /> */}
          </Col>
        </Row>
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
