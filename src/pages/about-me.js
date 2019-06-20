// @flow
import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container } from 'reactstrap'
// import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
// import Image from '../components/Image'
import SEO from '../components/seo'
import { Headline1 } from '../components/UI'

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

const IndexPage = () => (
  <Layout>
    <SEO title="Learn something about me and how i work." />

    <Container>
      <Headline1>About me</Headline1>
    </Container>
  </Layout>
)

export default IndexPage
