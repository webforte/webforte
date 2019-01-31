// @flow
import styled from 'styled-components'
import * as v from '../../config/variables'

const BigLink = styled.a`
  display: inline-block;
  font-weight: bold;
  margin: 0.25rem 0;
  color: ${v.black};
  border-bottom: 2px solid ${v.cyan} !important;
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
    color: ${v.white} !important;

    &:before {
      transform: scaleY(1);
    }
  }
`

export default BigLink
