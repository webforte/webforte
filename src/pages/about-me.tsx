import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import * as v from '../config/variables'
import { Layout } from '../components/Layout'
import SEO from '../components/seo'
import { Headline1, TextContainer, Section } from '../components/UI'
import { ContactSection } from '../components/Sections'

const technologies = [
  {
    id: 1,
    name: 'React',
    website: 'https://reactjs.org/',
    image: (
      <StaticImage
        src="../images/technologies/logo-react.png"
        alt="React logo"
        className="max-h-14"
        objectFit="contain"
        placeholder="none"
      />
    ),
  },
  {
    id: 2,
    name: 'React Native',
    website: 'https://facebook.github.io/react-native/',
    image: (
      <StaticImage
        src="../images/technologies/logo-react-native.png"
        alt="React Native logo"
        className="max-h-14"
        objectFit="contain"
        placeholder="none"
      />
    ),
  },
  {
    id: 3,
    name: 'TypeScript',
    website: 'https://www.typescriptlang.org/',
    image: (
      <StaticImage
        src="../images/technologies/logo-typescript.png"
        alt="Typescript logo"
        className="max-h-14"
        objectFit="contain"
        placeholder="none"
      />
    ),
  },
  {
    id: 4,
    name: 'Gatsby',
    website: 'https://www.gatsbyjs.org',
    image: (
      <StaticImage
        src="../images/technologies/logo-gatsby.png"
        alt="Gatsby logo"
        className="max-h-14"
        objectFit="contain"
        placeholder="none"
      />
    ),
  },
  {
    id: 5,
    name: 'Node.js',
    website: 'https://nodejs.org/',
    image: (
      <StaticImage
        src="../images/technologies/logo-nodejs.png"
        alt="NodeJS logo"
        className="max-h-14"
        objectFit="contain"
        placeholder="none"
      />
    ),
  },
  {
    id: 6,
    name: 'Directus',
    website: 'https://directus.io/',
    image: (
      <StaticImage
        src="../images/technologies/logo-directus.png"
        alt="Directus logo"
        className="max-h-14"
        objectFit="contain"
        placeholder="none"
      />
    ),
  },
  {
    id: 7,
    name: 'Contentful',
    website: 'https://www.contentful.com/',
    image: (
      <StaticImage
        src="../images/technologies/logo-contentful.png"
        alt="Contentful logo"
        className="max-h-14"
        objectFit="contain"
        placeholder="none"
      />
    ),
  },
]

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

const IndexPage = ({ data }) => {
  const { allContentfulFirma, allContentfulFreund } = data

  return (
    <Layout>
      <SEO title="Learn something about me and how i work." />

      <div className="px-3 sm:px-0 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        <Section>
          <Headline1>About me</Headline1>

          <Vita>
            <div>
              <StaticImage
                src="../images/konstantin.jpg"
                alt="Konstantin Werner"
                placeholder="dominantColor"
                width={500}
                height={500}
                className="rounded-full mb-8 sm:mb-0 sm:mr-8 transition duration-200 ease-in-out hover:scale-105 shadow-xl hover:shadow-2xl"
              />
            </div>

            <VitaFacts>
              <li>Born and currently living in Dresden, Germany</li>
              <li>
                I handcraft modern apps with focus on user friendliness,
                simplicity and a solid technology stack.
              </li>
              <li>
                I have over 9 years experience in frontend development and 6
                years in cross plattform mobile development.
              </li>
            </VitaFacts>
          </Vita>
        </Section>

        <Section>
          <h2 className="mb-8">Technologies I use</h2>

          <ul className="grid gap-5 grid-cols-2 sm:grid-cols-3">
            {technologies.map(({ id, name, website, image }) => (
              <li
                key={id}
                className="flex justify-center items-center transition filter grayscale hover:grayscale-0 hover:scale-105"
              >
                <a
                  href={website}
                  title={`Go to ${name} website`}
                  className="no-underline"
                >
                  {image}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="companies">
          <h2 className="mb-8">Companies & partners</h2>

          <ul className="grid gap-5 grid-cols-2 sm:grid-cols-3">
            {allContentfulFirma.edges.map(({ node }) => {
              const { id, website, name, logo } = node

              return (
                <li
                  key={id}
                  className="flex justify-center items-center transition filter grayscale hover:grayscale-0 hover:scale-105"
                >
                  <a
                    href={website}
                    title={`Go to ${name} website`}
                    className="no-underline"
                  >
                    <GatsbyImage
                      image={getImage(logo.gatsbyImageData)}
                      alt={`${name} Logo`}
                      className="max-h-14"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </Section>

        <Section id="friends">
          <h2 className="mb-8">Colleages & friends</h2>

          <TextContainer>
            <p>
              Team work is key. I think that best results can be achieved by
              exchanging knowledge and ideas. I am happy to be part of a strong
              network of independent designers, developers and consultants:
            </p>
          </TextContainer>

          <ul className="grid grid-cols-1 my-5 gap-5 sm:grid-cols-2">
            {allContentfulFreund.edges.map(({ node }) => {
              const { name, profession, website, id, image } = node

              return (
                <div
                  key={id}
                  className="relative rounded-lg border border-gray-500 bg-white px-6 py-3 shadow-sm flex items-center space-x-3 transition duration-200 hover:shadow-lg hover:scale-105 hover:border-gray-700 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand"
                >
                  {image && (
                    <div className="flex-shrink-0">
                      <GatsbyImage
                        image={getImage(image.gatsbyImageData)}
                        className="rounded-full"
                        alt={name}
                      />
                      {/* <img
                            className="h-10 w-10 rounded-full"
                            src={image?.fixed?.src}
                            alt=""
                          /> */}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <a href={website} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-bold text-gray-600 mb-0">
                        {name}
                      </p>
                      {profession && (
                        <p className="text-sm text-gray-500 truncate mb-0">
                          {profession}
                        </p>
                      )}
                    </a>
                  </div>
                </div>
              )
            })}
          </ul>
        </Section>

        <div style={{ margin: '5rem 0 0 ' }}>
          <ContactSection />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
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
            gatsbyImageData(layout: CONSTRAINED, placeholder: NONE, height: 70)
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
          image {
            id
            gatsbyImageData(
              layout: FIXED
              placeholder: DOMINANT_COLOR
              width: 45
              height: 45
            )
          }
        }
      }
    }
  }
`

export default IndexPage
