import React, { FC } from 'react'
import styled from 'styled-components'

import { Button } from 'uikit'
import { CloseIcon } from 'icons'

import { IProps } from './types'

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  width: 430px;
  min-height: 260px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
  padding: 34px 36px;

  @media screen and (max-width: 540px) {
    width: calc(100% - 60px);
  }
`

const PopupButton = styled(Button)`
  width: 26px;
  position: absolute;
  top: -26px;
  right: -26px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
`

const Title = styled.h3`
  margin: 0;
  font-size: 24px;
  line-height: 30px;
`

export const Popup: FC<IProps> = ({
  children,
  title,
  onClick
}): JSX.Element => (
  <StyledPopup>
    <Content>
      <PopupButton onClick={onClick}>
        <CloseIcon />
      </PopupButton>
      <Title>{title}</Title>
      {children}
    </Content>
  </StyledPopup>
)
