// @flow
import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container } from 'reactstrap'
import * as v from '../config/variables'
import { Layout } from '../components/Layout'
// import Image from '../components/Image'
import SEO from '../components/seo'

const Section = styled.div`
  padding: 2rem 0;

  @media screen and (min-width: 576px) {
    padding: 4rem 0;
  }
`

const ReferencesList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Reference = styled.li`
  padding: 0;
  margin-bottom: 3rem;
`

// const RefImage = styled.img`
//   max-width: 100%;
//   border-radius: 3px;
// `

const RefTitle = styled.h2`
  font-family: ${v.fontFamilySansSerif};
`

const HeadlineSection = styled.header`
  margin: 2rem 0 3rem;

  > h1 {
    margin: 0;
    line-height: 1.2;
  }

  > p {
    margin: 0;
    line-height: 1.2;
    color: ${v.gray};
    font-family: ${v.fontFamilySerif};
    /* font-weight: 300; */
    font-size: 3rem;
  }
`

const FactsList = styled.ul`
  list-style-type: none;
  margin: 1rem 0 0.5rem;
  padding-left: 0rem;
`

const Fact = styled.li``

const RefLink = styled.a`
  display: inline-block;
  margin: 0.25rem 0;
`

const PortfolioPage = () => (
  <Layout>
    <SEO title="Current work" />

    <Section>
      <Container>
        <HeadlineSection>
          <h1>Latest work</h1>
          <p>Selected projects</p>
        </HeadlineSection>

        <ReferencesList>
          <Reference>
            {/* <RefImage
              src={require('../images/work/thomas-henry.jpg')}
              alt="Website of Thomas Henry"
            /> */}

            <RefTitle>Thomas Henry</RefTitle>

            <FactsList>
              <Fact>Multilangual corporate website</Fact>
              <Fact>Type of work: Wordpress, React</Fact>
              <Fact>
                <a href="https://www.thomas-henry.de">Launch the website</a>
              </Fact>
            </FactsList>
          </Reference>

          <Reference>
            <RefTitle>Hans & Gretel</RefTitle>

            <FactsList>
              <Fact>
                A tool that support physicians with the handling of child
                endangerment cases
              </Fact>
              <Fact>Type of work: React Native, iOS, Android</Fact>
              <Fact>
                <a href="https://www.handunsgretel.help">Launch the website</a>
              </Fact>
            </FactsList>
          </Reference>

          <Reference>
            <RefTitle>20squares</RefTitle>

            <FactsList>
              <Fact>An easy to use app for creating photo books</Fact>
              <Fact>Type of work: React Native, iOS, Android</Fact>
            </FactsList>

            <RefLink>
              <a href="https://itunes.apple.com/de/app/20squares-dein-fotobuch/id1147125245?mt=8">
                Launch the website
              </a>
            </RefLink>
          </Reference>

          <Reference>
            <RefTitle>"So geht sächsisch." Website</RefTitle>

            <FactsList>
              <Fact>
                Multilangual image campaign portal of the free state of saxony
              </Fact>
              <Fact>Type of work: Wordpress</Fact>
              <Fact>
                <a href="https://www.so-geht-saechsisch.de">
                  Launch the website
                </a>
              </Fact>
            </FactsList>
          </Reference>
        </ReferencesList>
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

export default PortfolioPage
