// @flow
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Container, Row, Col } from 'reactstrap'
import * as v from '../config/variables'
import { Layout } from '../components/Layout'
import SEO from '../components/seo'
import { Headline1, Headline2 } from '../components/UI'
import { ContactSection } from '../components/Sections'

const LogoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const LogoItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: none ease 0.2s;
  transition-property: filter, transform;
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
    transform: scale(1.07);
  }

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 33.333333%;
  }

  a {
    border: none;
    display: inline-block;
    margin: 0.5rem 0.5rem;

    @media (min-width: 576px) {
      margin: 0.5rem 1rem;
    }
    img {
    }
  }
`

const Vita = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 5rem;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`

const ProfileImage = styled(Img)`
  flex: 0 0 auto;
  border-radius: 300px;
  margin: 0 0 2rem;
  transition: transform ease 0.2s;

  @media (min-width: 768px) {
    margin: 0 2rem 0 0;
  }

  &:hover {
    transform: scale(1.07);
  }
`

const VitaFacts = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: ${v.gray};
  font-size: 1.2rem;

  > li {
    margin: 0 0 0.5rem;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoWsn: file(
        relativePath: { eq: "companies/logo-wildstyle-network.png" }
      ) {
        childImageSharp {
          fixed(width: 300, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoMindbox: file(relativePath: { eq: "companies/logo-mindbox.png" }) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoLeichtLuftig: file(
        relativePath: { eq: "companies/logo-leicht-luftig.png" }
      ) {
        childImageSharp {
          fixed(width: 230, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      logoContentful: file(
        relativePath: { eq: "technologies/logo-contentful.png" }
      ) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoDirectus: file(
        relativePath: { eq: "technologies/logo-directus.png" }
      ) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoGatsby: file(relativePath: { eq: "technologies/logo-gatsby.png" }) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoNode: file(relativePath: { eq: "technologies/logo-nodejs.png" }) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoReact: file(relativePath: { eq: "technologies/logo-react.png" }) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoReactNative: file(
        relativePath: { eq: "technologies/logo-react-native.png" }
      ) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const {
    me,
    logoMindbox,
    logoWsn,
    logoLeichtLuftig,
    logoContentful,
    logoDirectus,
    logoGatsby,
    logoNode,
    logoReact,
    logoReactNative,
  } = data

  return (
    <Layout>
      <SEO title="Learn something about me and how i work." />

      <Container>
        <Row>
          <Col lg={{ size: 10, offset: 1 }}>
            <Headline1>About me</Headline1>

            <Vita>
              <ProfileImage
                fixed={me.childImageSharp.fixed}
                alt="Konstantin Werner"
              />

              <VitaFacts>
                <li>Born and currently living in Dresden, Germany</li>
                <li>
                  I handcraft modern apps with focus on user friendliness,
                  simplicity and a solid technology stack.
                </li>
                <li>
                  I have 6 years experience in web development and 3 years in
                  cross plattform app development.
                </li>
              </VitaFacts>
            </Vita>

            <Headline2>Technologies I use</Headline2>

            <LogoList>
              <LogoItem>
                <a href="https://reactjs.org/" title="Go to React website">
                  <Img
                    fixed={logoReact.childImageSharp.fixed}
                    alt="React logo"
                  />
                </a>
              </LogoItem>
              <LogoItem>
                <a
                  href="https://facebook.github.io/react-native/"
                  title="Go to React Native website"
                >
                  <Img
                    fixed={logoReactNative.childImageSharp.fixed}
                    alt="React Native logo"
                  />
                </a>
              </LogoItem>
              <LogoItem>
                <a href="https://www.gatsbyjs.org" title="Go to Gatsby website">
                  <Img
                    fixed={logoGatsby.childImageSharp.fixed}
                    alt="Gatsby logo"
                  />
                </a>
              </LogoItem>
              <LogoItem>
                <a href="https://nodejs.org/" title="Go to NodeJS website">
                  <Img
                    fixed={logoNode.childImageSharp.fixed}
                    alt="NodeJS logo"
                  />
                </a>
              </LogoItem>
              <LogoItem>
                <a href="https://directus.io/" title="Go to Directus website">
                  <Img
                    fixed={logoDirectus.childImageSharp.fixed}
                    alt="Directus logo"
                  />
                </a>
              </LogoItem>
              <LogoItem>
                <a
                  href="https://www.contentful.com/"
                  title="Go to Contentful website"
                >
                  <Img
                    fixed={logoContentful.childImageSharp.fixed}
                    alt="Contentful logo"
                  />
                </a>
              </LogoItem>
            </LogoList>

            <Headline2>Companies I have been working with</Headline2>

            <LogoList>
              <LogoItem>
                <a
                  href="https://www.wildstyle-network.com/"
                  title="Go to Wildstyle website Network"
                >
                  <Img
                    fixed={logoWsn.childImageSharp.fixed}
                    alt="Wildstyle Network Logo"
                  />
                </a>
              </LogoItem>

              <LogoItem>
                <a href="https://www.mindbox.de/" title="Go to Mindbox website">
                  <Img
                    fixed={logoMindbox.childImageSharp.fixed}
                    alt="Mindbox Logo"
                  />
                </a>
              </LogoItem>

              <LogoItem>
                <a
                  href="https://www.leicht-luftig.studio/"
                  title="Go to leicht+luftig website"
                >
                  <Img
                    fixed={logoLeichtLuftig.childImageSharp.fixed}
                    src=""
                    alt="leicht+luftig Logo"
                  />
                </a>
              </LogoItem>
            </LogoList>
          </Col>
        </Row>

        <div style={{ margin: '5rem 0 0 ' }}>
          <ContactSection />
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
