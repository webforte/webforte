// @flow
import React from 'react'
import styled from 'styled-components'

import * as v from '../../config/variables'

const ButtonPanel = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 7px;
`
const Button = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 3px;
  background-color: ${({ color }) => color};
  box-shadow: inset 0 0 0px 1px rgba(0, 0, 0, 0.1);
`

const Center = styled.div`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  width: 100%;
`

const Right = styled.div`
  width: 30%;
`

const AddressBar = styled.div`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.03);
  width: 100%;
  height: 20px;
  border-radius: 3px;
`

const Buttons = () => (
  <ButtonPanel>
    <Button color="rgb(255, 98, 88)" />
    <Button color="rgb(255, 190, 45)" />
    <Button color="rgb(41, 202, 65)" />
  </ButtonPanel>
)

const Frame = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 250px;
  box-shadow: 0 8px 42px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-property: box-shadow;
`

const Header = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  align-content: center;
  /* justify-content: center; */
  background-color: #dde1e5;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  > div {
    flex: 0 1 auto;
  }
`

const Body = styled.div`
  /* border: 1px solid rgb(200, 200, 200); */
  /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0 1px 0 0 #000000; */
`

const BrowserWindow = ({ children }) => (
  <Frame>
    <Header>
      <Buttons />
      <Center>
        <AddressBar />
      </Center>
      <Right />
    </Header>

    <Body>{children}</Body>
  </Frame>
)

export default BrowserWindow
