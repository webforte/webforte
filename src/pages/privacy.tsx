import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/Layout'
// import { } from '../components/UI'
import SEO from '../components/seo'

const Headline = styled.h1`
  margin: 4rem 0 1.5rem;
`

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy" />

    <div className="px-3 sm:px-0 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <Headline>Privacy</Headline>
      <p>
        <strong>
          This site does not store or proceed any of your data whatsoever.
        </strong>
      </p>
      <p>Promise!</p>
    </div>
  </Layout>
)

export default PrivacyPage
