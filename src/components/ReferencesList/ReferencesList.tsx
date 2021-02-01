// @flow
import React from 'react'
import styled from 'styled-components'
import * as v from '../../config/variables'

// import references from './referencesData'
import { BigLink } from '../UI'
import BrowserWindow from '../BrowserWindow/BrowserWindow'

// const RefImage = styled.img`
//   max-width: 100%;
//   border-radius: 3px;
// `

const ImageWrap = styled.a`
  /* flex: 0 0 50%; */
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-property: transform;
  border-bottom: none !important;
  margin-bottom: 2rem;

  &:hover,
  &:focus {
    border-bottom: none !important;
    transform: scale(1.03);

    > div {
      box-shadow: 0 8px 60px rgba(0, 0, 0, 0.1);
    }
  }
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Reference = styled.li`
  padding: 0;
  margin: 3rem 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > ${ImageWrap}, > ${Information} {
    flex: 0 0 44%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 5rem 0 8rem;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`

const Title = styled.h2`
  font-family: ${v.fontFamilySansSerif};
  font-size: 1rem;
  /* line-height: 1; */
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 0 1.5rem;
`

const Subline = styled.p`
  color: ${v.black};
  font-weight: bold;
  margin: 0;
`

const WorkDescription = styled.p`
  color: ${v.gray};
  font-size: 1rem;
  margin-bottom: 1rem;
`

// Columns
const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 1rem;
`
const Column = styled.div`
  margin: 0 0 1rem;

  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`

const ColTitle = styled.div`
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
`

const ColText = styled.div`
  color: ${v.grayDark};
  font-size: 0.8rem;

  a {
    color: inherit;
    border-color: inherit;
    border-width: 1px;
  }

  > span {
    display: block;
  }
`

// const slug = (text: string) => text.replace(/\s/g, '-').toLocaleLowerCase()

type Props = {
  references: Array<unknown>
}

const ReferencesList = ({ references }: Props) => (
  <StyledList>
    {references.map((r: unknown) => (
      <Reference key={r.id}>
        <ImageWrap
          href={r.projectWebsite}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrowserWindow>
            {r.bild && (
              <img
                style={{ maxWidth: '100%' }}
                src={r.bild.fluid.src}
                alt={r.title}
              />
            )}
          </BrowserWindow>
        </ImageWrap>

        <Information>
          <Title>{r.name}</Title>
          {/* <Year>{r.year}</Year> */}

          <Subline>{r.subline}</Subline>
          <WorkDescription>{r.description}</WorkDescription>

          <Columns>
            <Column>
              <ColTitle>{r.skills.length > 1 ? 'Skills' : 'Skill'}</ColTitle>
              <ColText>
                {r.skills.map((skill) => (
                  <span key={skill.id}>{skill.name}</span>
                ))}
              </ColText>
            </Column>

            <Column>
              <ColTitle>
                {r.platforms.length > 1 ? 'Platforms' : 'Platform'}
              </ColTitle>
              <ColText>
                {r.platforms.map((platform) => (
                  <span key={platform.id}>{platform.title}</span>
                ))}
              </ColText>
            </Column>

            <Column>
              <ColTitle>Year</ColTitle>
              <ColText>{r.year}</ColText>
            </Column>

            {r.via && (
              <Column>
                <ColTitle>Via</ColTitle>
                <ColText>
                  <a href={r.via.website}>{r.via.name}</a>
                </ColText>
              </Column>
            )}
          </Columns>
          {/* <FactsList>
            <Fact>Type of work: Wordpress, React</Fact>

          </FactsList> */}
          {r.projectWebsite && (
            <div>
              <BigLink
                href={r.projectWebsite}
                title={`View project ${r.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View project
              </BigLink>
            </div>
          )}
        </Information>
      </Reference>
    ))}
  </StyledList>
)

export default ReferencesList
