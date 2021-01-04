import React, { FC } from 'react'
import styled from 'styled-components'

import { Button } from 'uikit'
import { CloseIcon } from 'icons'

import { IProps } from './types'

const StyledPopupImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const Container = styled.div`
  position: relative;
`

const StyledButton = styled(Button)`
  background: none;
  border: none;
  width: 26px;
  position: absolute;
  top: -26px;
  right: -26px;
  cursor: pointer;
  outline: none;
`

const Image = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  border-radius: 10px;
`

export const PopupImage: FC<IProps> = ({ src, alt, onClick }): JSX.Element => (
  <StyledPopupImage>
    <Container>
      <StyledButton onClick={onClick}>
        <CloseIcon />
      </StyledButton>
      <Image src={src} alt={alt} />
    </Container>
  </StyledPopupImage>
)
