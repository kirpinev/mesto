import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { UserInfoState } from 'app/reducers/userInfoReducer'
import { Avatar, About, Name, Button, Loader } from 'uikit'
import { IProps } from './types'

const Info = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  color: white;
  width: 100%;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
`

const Data = styled.div`
  max-width: 364px;
  margin-left: 36px;

  @media screen and (max-width: 980px) {
    margin: 20px 0;
    text-align: center;
  }
`

const EditButton = styled(Button)`
  height: 18px;
  font-size: 12px;
  background-color: black;
  color: white;
`

const PlaceButton = styled(Button)`
  width: 150px;
  height: 50px;
  font-size: 30px;
  position: absolute;
  top: 16px;
  right: 0;
  background-color: black;
  color: white;

  @media screen and (max-width: 980px) {
    position: static;
    margin-bottom: 40px;
  }
`

export const UserInfo: FC<IProps> = ({
  toggleAvatarForm,
  toggleUserInfoForm,
  togglePlaceForm
}): JSX.Element => {
  const userInfo = useSelector(
    (state: { userInfo: UserInfoState }) => state.userInfo
  )

  return userInfo.avatar ? (
    <Info>
      <Avatar
        onClick={toggleAvatarForm}
        src={userInfo.avatar}
        alt={userInfo.name}
        width="150px"
        height="150px"
      />
      <Data>
        <Name>{userInfo.name}</Name>
        <About>{userInfo.about}</About>
        <EditButton onClick={toggleUserInfoForm}>Редактировать</EditButton>
      </Data>
      <PlaceButton onClick={togglePlaceForm}>+</PlaceButton>
    </Info>
  ) : (
    <Loader />
  )
}
