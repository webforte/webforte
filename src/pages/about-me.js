// @flow
import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Container, Row, Col } from 'reactstrap'
// import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
// import Image from '../components/Image'
import SEO from '../components/seo'
import { Headline1, Headline2 } from '../components/UI'

// const Section = styled.div`
//   padding: 0;
//   position: relative;
//   height: 100vh;
//   /* background-image: url(${portrait});
//   background-repeat: no-repeat;
//   background-size: 50% 100%, cover;
//   background-position: right top; */

//   @media screen and (min-width: 576px) {
//     padding: 0;
//   }
// `

const LogoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const LogoItem = styled.li`
  a {
    margin: 1rem 0.5rem;
    border: none;

    img {
    }
  }
`

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     logoWsn: file(
  //       relativePath: { eq: "companies/logo-wildstyle-network.png" }
  //     ) {
  //       childImageSharp {
  //         fixed(height: 200) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)
  // const { logoMindbox, logoWsn, logoLeichtLuftig } = data

  return (
    <Layout>
      <SEO title="Learn something about me and how i work." />

      <Container>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <Headline1>About me</Headline1>

            <Headline2>Technologies I use</Headline2>

            <Headline2>Companies I have been working with</Headline2>

            <LogoList>
              <LogoItem>
                <a
                  href="https://www.wildstyle-network.com/"
                  title="Wildstyle Network"
                >
                  <Img
                    fixed={logoWsn.childImageSharp.fixed}
                    alt="Wildstyle Network Logo"
                  />
                </a>
              </LogoItem>

              <LogoItem>
                <a href="https://www.mindbox.de/" title="Mindbox">
                  <img src="" alt="Mindbox Logo" />
                </a>
              </LogoItem>

              <LogoItem>
                <a
                  href="https://www.leicht-luftig.studio/"
                  title="leicht+luftig"
                >
                  <img src="" alt="leicht+luftig Logo" />
                </a>
              </LogoItem>
            </LogoList>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
