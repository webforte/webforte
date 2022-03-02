import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'

import * as v from '../config/variables'
import { Layout } from '../components/Layout'
import { Lead } from '../components/UI'

import { ReferencesList } from '../components/ReferencesList'
import { ContactSection } from '../components/Sections'

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

  @media screen and (min-width: 992px) {
    margin: 4rem 0 8rem;
    width: 60%;
  }

  @media screen and (min-width: 1200px) {
    margin: 4rem 0 8rem;
    width: 50%;
  }

  > h1 {
    margin: 0;
    line-height: 1.3;
    font-size: 1.5rem;

    @media screen and (min-width: 576px) {
      font-size: 2rem;
    }
  }

  /* > p {
    margin: 0;
    line-height: 1.2;
    color: ${v.gray};
    font-family: ${v.fontFamilySerif};
    font-size: 3rem;
  } */
`

type Props = {
  data: unknown
}

const PortfolioPage = ({ data }: Props) => {
  const {
    contentfulSeite: { lead, subtitle /* , sections */ },
    allContentfulReferenz: { edges },
    // contentfulPortfolio: { name, id },
  } = data

  const references = edges.map((r) => r.node)
  const orderedReferences = references
    .sort((a, b) => {
      return b.year - a.year
    })
    .sort((a, b) => b.isHighlight - a.isHighlight)

  return (
    <Layout>
      <SEO title="Current work" />

      <Section>
        <div className="px-3 sm:px-0 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
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

          <ReferencesList references={orderedReferences} />

          <ContactSection />
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    contentfulPortfolio(id: { eq: $id }) {
      name
      id
    }

    allContentfulReferenz(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          id
          name
          subline
          description
          isHighlight
          private
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
            gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }

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
          isHighlight
          private
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
            gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`

export default PortfolioPage
