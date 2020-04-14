// @flow
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Container, Row, Col } from 'reactstrap'
import * as v from '../config/variables'
import { Layout } from '../components/Layout'
import SEO from '../components/seo'
import { Headline1, Headline2, TextContainer, Section } from '../components/UI'
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
      height: 70px;
    }
  }
`

const Vita = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* margin: 0 0 5rem; */

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
      allContentfulFirma(
        filter: { showAsPartner: { eq: true }, node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            id
            name
            website
            showAsPartner
            logo {
              id
              fluid(maxHeight: 140) {
                src
                srcSet
              }
            }
          }
        }
      }
      allContentfulFreund(
        filter: { node_locale: { eq: "en-US" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            id
            name
            profession
            website
          }
        }
      }
    }
  `)
  const {
    me,
    logoContentful,
    logoDirectus,
    logoGatsby,
    logoNode,
    logoReact,
    logoReactNative,
    allContentfulFirma,
    allContentfulFreund,
  } = data

  return (
    <Layout>
      <SEO title="Learn something about me and how i work." />

      <Container>
        <Row>
          <Col lg={{ size: 10, offset: 1 }}>
            <Section>
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
            </Section>

            <Section>
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
                  <a
                    href="https://www.gatsbyjs.org"
                    title="Go to Gatsby website"
                  >
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
            </Section>

            <Section id="companies">
              <Headline2>Companies & partners</Headline2>

              <LogoList>
                {allContentfulFirma.edges.map(({ node }) => {
                  const { id, website, name, logo } = node
                  const {
                    fluid: { src },
                  } = logo

                  return (
                    <LogoItem key={id}>
                      <a href={website} title={`Go to ${name} website`}>
                        <img src={src} alt={`${name} Logo`} />
                      </a>
                    </LogoItem>
                  )
                })}
              </LogoList>
            </Section>

            <Section id="friends">
              <h2>Colleages & friends</h2>

              <TextContainer>
                <p>
                  Team work is key. I think that best results can be achieved by
                  exchanging knowledge and ideas. I am happy to be part of a
                  strong network of independent designers, developers and
                  project managers:
                </p>
                <ul>
                  {allContentfulFreund.edges.map(({ node }) => {
                    const { name, profession, website, id } = node

                    return (
                      <li key={id}>
                        <strong>{name}</strong>
                        {profession && (
                          <>
                            <br />
                            {profession}
                          </>
                        )}
                        {website && (
                          <>
                            {' '}
                            —{' '}
                            <a href={website} title={`Website of ${name}`}>
                              Website
                            </a>
                          </>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </TextContainer>
            </Section>
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
