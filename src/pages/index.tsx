import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import SEO from '../components/seo'
import { BigLink } from '../components/UI'

const Lead = styled.h1`
  font-size: 2.2rem;
  width: 100%;
`

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;

  @media screen and (min-width: 576px) {
    width: 50%;
  }
`

const IndexPage = () => (
  <Layout stickyHeader>
    <SEO title="Modern web and app development" />

    <div className="hidden sm:block absolute top-0 right-0 w-1/2 h-full z-10">
      <StaticImage
        src="../images/konstantin-glasses.jpg"
        alt="Konstantin Werner"
        className="w-full h-full"
      />
    </div>

    <div className="px-3 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <div className="sm:w-1/2 min-h-screen flex flex-warp flex-col justify-center py-8">
        <Lead>
          – Hi, I&apos;m Konstantin,
          <br /> a freelance web and app developer.
        </Lead>

        <div>
          <BigLink as={Link} to="portfolio">
            See my work
          </BigLink>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
