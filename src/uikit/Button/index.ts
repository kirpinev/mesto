import styled from 'styled-components'

export const Button = styled.button`
  border: 1px solid white;
  cursor: pointer;

  &:focus {
    outline-color: greenyellow;
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.2);
    background-color: white;
  }
`
