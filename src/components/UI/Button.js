// @flow
import React from 'react'
import styled from 'styled-components'
// import { Button as BSButton } from 'reactstrap'

const StyledButton = styled.button`
  outline: none;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  background: transparent;
  border-radius: 0.2rem;
`

const Button = ({ children }) => <StyledButton>{children}</StyledButton>

export default Button
