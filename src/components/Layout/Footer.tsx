import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Container } from 'reactstrap'

import * as v from '../../config/variables'

const FooterWrap = styled.footer`
  background: ${v.white};
  /* min-height: 10rem; */
  font-size: 0.8rem;
  padding: 2rem 0 2rem;
  margin-top: 2rem;

  p {
    line-height: 1.8;
    color: ${v.gray};
  }

  strong {
    color: ${v.grayDarker};
    text-transform: uppercase;
  }

  a,
  span {
    + a,
    span {
      margin-left: 0.5rem;
    }
  }

  a {
    color: ${v.grayDark};
    border-bottom: 1px solid ${v.grayDark};

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`

const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`

const Col = styled.div``

const Footer = () => {
  const now = new Date()

  return (
    <FooterWrap>
      <Container>
        <FooterRow>
          <Col sm={{ size: '4' }}>
            <p>
              <strong>Konstantin Werner</strong>
              <br />
              <span>© {now.getFullYear()}</span>
              <Link to="/imprint">Imprint</Link>
              <Link to="/privacy">Privacy</Link>
            </p>
          </Col>
          <Col sm={{ size: '4' }}>
            <p>
              <strong>Contact</strong>
              <br />
              <a href="mailto:&#107;&#111;&#110;&#115;&#116;&#097;&#110;&#116;&#105;&#110;&#064;&#119;&#101;&#098;&#102;&#111;&#114;&#116;&#101;&#046;&#105;&#111;">
                &#107;&#111;&#110;&#115;&#116;&#097;&#110;&#116;&#105;&#110;&#064;&#119;&#101;&#098;&#102;&#111;&#114;&#116;&#101;&#046;&#105;&#111;
              </a>
            </p>
          </Col>
          <Col sm={{ size: '4' }}>
            <p>
              <strong>Find me on</strong>
              <br />
              <a
                href="https://www.linkedin.com/in/konstantin-werner-433750a0/"
                title="Find me on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.xing.com/profile/Konstantin_Werner5"
                title="Find me on Xing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Xing
              </a>
            </p>
          </Col>
        </FooterRow>

        {/* <div style={{width: "auto !important", minWidth: '375px', maxWidth: '415px', height: '415px'}}>
        <iframe style={{width: '100%', height: '100%'}} frameBorder="0" scrolling="no" src="https://www.stadtradeln.de/fileadmin/radelkalender/embed/radelmeter-team.php?sr_team_id=391620" title="Stadtradeln"/></div> */}
      </Container>
    </FooterWrap>
  )
}
export default Footer
