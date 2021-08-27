import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
import styled from 'styled-components'

import { Container, Row, Col } from 'reactstrap'
// import * as v from '../config/variables'
import { Layout } from '../components/Layout'
import SEO from '../components/seo'
import { Headline1 } from '../components/UI'

import personText from '../images/illustrations/person-text.svg'

const PersonText = styled.img`
  width: 300px;
  margin: 3rem auto;
  display: block;
  max-width: 100%;

  @media (min-width: 992px) {
    margin: 0 auto 3rem;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Hit me up with a message and let's talk projects." />

      <Container>
        <Row>
          <Col lg={{ size: 5, offset: 1 }}>
            <Headline1>Contact</Headline1>
          </Col>
        </Row>

        <Row>
          <Col lg={{ size: 5, offset: 1 }}>
            For project inquiries or questions, you can easily send me a mail to{' '}
            <a href="mailto:&#107;&#111;&#110;&#115;&#116;&#097;&#110;&#116;&#105;&#110;&#064;&#119;&#101;&#098;&#102;&#111;&#114;&#116;&#101;&#046;&#105;&#111;">
              &#107;&#111;&#110;&#115;&#116;&#097;&#110;&#116;&#105;&#110;&#064;&#119;&#101;&#098;&#102;&#111;&#114;&#116;&#101;&#046;&#105;&#111;
            </a>
            .
            {/* 
            <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
            <iframe
            className="airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shrCgOD0wr8uqhsRq?backgroundColor=teal"
            frameBorder="0"
            onmousewheel=""
            width="100%"
            height="853"
            style={{ background: 'transparent', border: '1px solid #ccc' }}
            title="Contact form"
          /> */}
          </Col>

          <Col lg={{ size: 5 }}>
            <img
              src={personText}
              alt="Let's chat"
              className="max-w-72 my-8 sm:mb-8"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
