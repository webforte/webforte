// @flow
import React from 'react'
import { Button as BSButton } from 'reactstrap'

const Button = ({ children, style }) => {
  return <BSButton style={style}>{children}</BSButton>
}

export default Button
