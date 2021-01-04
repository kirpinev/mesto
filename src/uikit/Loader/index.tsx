import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(180deg);
  }
`

const StyledLoader = styled.div`
  width: 5em;
  height: 5em;
  margin: 50px auto;
  border-radius: 50%;

  & i::after {
    position: absolute;
    clip: rect(0, 5em, 5em, 1em);
    width: 5em;
    height: 5em;
    content: '';
    animation: ${spinner} 0.8s ease-in-out infinite;
    border-radius: 50%;
    box-shadow: inset 0 0 0 0.1em white;
  }
`

export const Loader = () => (
  <StyledLoader>
    <i />
  </StyledLoader>
)
