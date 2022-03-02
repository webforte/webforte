import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/Layout'
import SEO from '../components/seo'
// import { Button } from '../components/UI'

const Headline1 = styled.h1``

const Section = styled.div`
  padding: 3rem 0 1rem;

  @media screen and (min-width: 576px) {
    padding: 8rem 0 1rem;
  }
`

const HeadlineSection = styled.header`
  margin-bottom: 3rem;
`

const NotFoundPage = () => (
  <Layout>
    {/* Seite nicht gefunden. */}
    <SEO title="Site not found" />

    <Section>
      <div className="px-3 sm:px-0 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        <HeadlineSection>
          <Headline1>Site not found</Headline1>
          {/* Sorry, diese Route existiert nicht. */}
          <p>Sorry, the page you&apos;re looking for does not exist.</p>
        </HeadlineSection>

        <Link to="/">Back to start</Link>
      </div>
    </Section>
  </Layout>
)

export default NotFoundPage
