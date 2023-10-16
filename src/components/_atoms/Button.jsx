import React from 'react'
import { styled } from 'styled-components'

const Button = ({onClick, value}) => {
  return (
    <ButtonComponent onClick={onClick}>{value}</ButtonComponent>
  )
}

export default Button

const ButtonComponent = styled.button`
  width: 200px;
  height: 5vh;
`