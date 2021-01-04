import styled from 'styled-components'

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  min-width: 150px;
  border-radius: 50%;
  object-fit: cover;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s linear;
  }

  @media screen and (max-width: 980px) {
    margin-top: 40px;
  }
`
