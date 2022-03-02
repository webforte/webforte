import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

// import * as v from '../config/variables'
import { Layout } from '../components/Layout'
import SEO from '../components/seo'
import { Headline1 } from '../components/UI'

import personText from '../images/illustrations/person-text.svg'
import { Form } from '../components/Form'

const IndexPage = () => {
  const { formiumForm } = useStaticQuery(
    graphql`
      query {
        formiumForm(slug: { eq: "webforte" }) {
          id
          createAt
          name
          projectId
          schema
          slug
          updateAt
          version
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Hit me up with a message and let's talk projects." />

      <div className="container mx-auto">
        <div>
          <Headline1>Contact</Headline1>
        </div>

        <div className="grid gap-7 grid-cols-1 md:grid-cols-2">
          <Form data={formiumForm} />

          <div className="sm:pl-10">
            <img
              src={personText}
              alt="Let's chat"
              className="max-w-72 my-8 sm:mb-8"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
