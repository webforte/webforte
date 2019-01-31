// @flow
import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'

import { Container } from 'reactstrap'
import * as v from '../config/variables'
import { Layout } from '../components/Layout'
import { ReferencesList } from '../components/ReferencesList'
// import Image from '../components/Image'
import SEO from '../components/seo'

const Section = styled.div`
  padding: 2rem 0;

  @media screen and (min-width: 576px) {
    padding: 4rem 0;
  }
`

const HeadlineSection = styled.header`
  margin: 2rem 0 4rem;

  @media screen and (min-width: 576px) {
    margin: 4rem 0 8rem
  }

  > h1 {
    margin: 0;
    line-height: 1.2;
  }

  /* > p {
    margin: 0;
    line-height: 1.2;
    color: ${v.gray};
    font-family: ${v.fontFamilySerif};
    font-size: 3rem;
  } */
`

const Lead = styled.p`
  font-family: ${v.fontFamilySansSerif};
  font-size: 1.7rem;
  margin: 1rem 0 0;
  color: ${v.gray};
`

const Centered = styled.div`
  text-align: center;
  padding: 2rem 0;

  @media screen and (min-width: 576px) {
    padding: 3rem 0 6rem;
  }
`

const PortfolioPage = ({ data }) => {
  const {
    contentfulSeite: { lead, subtitle, sections },
  } = data

  const { references } = sections[0]

  return (
    <Layout>
      <SEO title="Current work" />

      <Section>
        <Container>
          <HeadlineSection>
            <h1>{lead}</h1>
            <Lead>
              {subtitle}
              {/* Selected projects – 
              <a href="mailto:&#107;&#111;&#110;&#115;&#116;&#097;&#110;&#116;&#105;&#110;&#064;&#119;&#101;&#098;&#102;&#111;&#114;&#116;&#101;&#046;&#105;&#111;">
                text me
              </a>{' '}
              for more. */}
            </Lead>
            {/* <p>Selected projects</p> */}
          </HeadlineSection>

          <ReferencesList references={references} />

          <Centered>
            <p className="h2">Interested in working with me?</p>
            <Lead>
              Let's create something together and{' '}
              <a href="mailto:&#107;&#111;&#110;&#115;&#116;&#097;&#110;&#116;&#105;&#110;&#064;&#119;&#101;&#098;&#102;&#111;&#114;&#116;&#101;&#046;&#105;&#111;">
                {' '}
                talk.
              </a>
            </Lead>
          </Centered>
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulSeite {
      id
      title
      lead
      subtitle
      sections {
        id
        references {
          id
          name
          subline
          description
          projectWebsite
          year
          projectWebsite
          skills {
            id
            name
          }
          platforms {
            id
            title
          }
          via {
            id
            name
            website
          }
          bild {
            id
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default PortfolioPage
