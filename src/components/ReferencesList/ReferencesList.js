// @flow
import React from 'react'
import styled from 'styled-components'
import * as v from '../../config/variables'

import references from './referencesData'
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
  margin: 5rem 0 8rem;
  display: flex;
  justify-content: space-between;

  > ${ImageWrap}, > ${Information} {
    flex: 0 0 44%;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
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

const FurtherReading = styled.div`
  a {
    display: inline-block;
    font-weight: bold;
    margin: 0.25rem 0;
    color: ${v.black};
    border-bottom: 2px solid ${v.cyan};
    transform: perspective(1px) translateZ(0);
    /* box-shadow: 0 0 1px rgba(0, 0, 0, 0); */
    position: relative;
    transition-property: color;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    padding: 3px 8px;

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${v.cyan};
      transform: scaleY(0);
      transform-origin: 50% 100%;
      transition-property: transform;
      transition-duration: 0.2s;
      /* transition-timing-function: ease-out; */
    }

    &:hover,
    &:focus {
      text-decoration: none;
      color: ${v.white};

      &:before {
        transform: scaleY(1);
      }
    }
  }
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

  > span {
    display: block;
  }
`

const slug = (text: string) => text.replace(/\s/g, '-').toLocaleLowerCase()

const ReferencesList = () => (
  <StyledList>
    {references.map(r => (
      <Reference key={r.id}>
        <ImageWrap href={r.url}>
          <BrowserWindow>
            {r.image && (
              <img style={{ maxWidth: '100%' }} src={r.image} alt={r.title} />
            )}
          </BrowserWindow>
        </ImageWrap>

        <Information>
          <Title>{r.title}</Title>
          {/* <Year>{r.year}</Year> */}

          <Subline>{r.subtitle}</Subline>
          <WorkDescription>{r.workDescription}</WorkDescription>

          <Columns>
            <Column>
              <ColTitle>{r.skills.length > 1 ? 'Skills' : 'Skill'}</ColTitle>
              <ColText>
                {r.skills.map(skill => (
                  <span key={`platform-${slug(skill)}`}>{skill}</span>
                ))}
              </ColText>
            </Column>

            <Column>
              <ColTitle>
                {r.platform.length > 1 ? 'Platforms' : 'Platform'}
              </ColTitle>
              <ColText>
                {r.platform.map(platform => (
                  <span key={`platform-${slug(platform)}`}>{platform}</span>
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
                <ColText>{r.via.name}</ColText>
              </Column>
            )}
          </Columns>
          {/* <FactsList>
            <Fact>Type of work: Wordpress, React</Fact>

          </FactsList> */}
          {r.url && (
            <FurtherReading>
              <a href={r.url}>View project</a>
            </FurtherReading>
          )}
        </Information>
      </Reference>
    ))}
  </StyledList>
)

export default ReferencesList
