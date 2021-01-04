import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  PlacesList,
  UserInfo,
  FormAvatar,
  FormPlace,
  FormUserInfo
} from 'app/components'
import { fetchUserInfo } from 'app/actions'
import { fetchPlaces } from 'app/actions/fetchPlaces'
import { Loader, Popup, Section, Header, Profile } from 'uikit'
import { LogoIcon } from 'icons'

const StyledApp = styled.section`
  background: black;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  padding-bottom: 194px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media screen and (max-width: 1024px) {
    padding-bottom: 140px;
  }
`

export const App = () => {
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false)
  const [isUserInfoPopupOpen, setIsUserInfoPopupOpen] = useState(false)
  const [isPlacePopupOpen, setIsPlacePopupOpen] = useState(false)

  const places = useSelector((state: { places: [] }) => state.places)
  const dispatch = useDispatch()

  const toggleAvatarForm = () => {
    setIsAvatarPopupOpen(!isAvatarPopupOpen)
  }
  const toggleUserInfoForm = () => {
    setIsUserInfoPopupOpen(!isUserInfoPopupOpen)
  }
  const togglePlaceForm = () => {
    setIsPlacePopupOpen(!isPlacePopupOpen)
  }

  const renderPlacePopup = useCallback(() => {
    return (
      <>
        {isPlacePopupOpen && (
          <Popup title="Добавить новое место" onClick={togglePlaceForm}>
            <FormPlace togglePlaceForm={togglePlaceForm} />
          </Popup>
        )}
      </>
    )
  }, [isPlacePopupOpen])

  const renderUserInfoPopup = useCallback(() => {
    return (
      <>
        {isUserInfoPopupOpen && (
          <Popup title="Обновить информацию" onClick={toggleUserInfoForm}>
            <FormUserInfo toggleUserInfoForm={toggleUserInfoForm} />
          </Popup>
        )}
      </>
    )
  }, [isUserInfoPopupOpen])

  const renderAvatarPopup = useCallback(() => {
    return (
      <>
        {isAvatarPopupOpen && (
          <Popup title="Обновить аватар" onClick={toggleAvatarForm}>
            <FormAvatar toggleAvatarForm={toggleAvatarForm} />
          </Popup>
        )}
      </>
    )
  }, [isAvatarPopupOpen])

  const renderPlacesList = useCallback(() => {
    return (
      <Section>{places.length === 0 ? <Loader /> : <PlacesList />}</Section>
    )
  }, [places.length])

  useEffect(() => {
    dispatch(fetchUserInfo())
    dispatch(fetchPlaces())
  }, [])

  return (
    <StyledApp>
      <Section>
        <Header>
          <LogoIcon />
        </Header>
      </Section>
      <Section>
        <Profile>
          <UserInfo
            toggleAvatarForm={toggleAvatarForm}
            toggleUserInfoForm={toggleUserInfoForm}
            togglePlaceForm={togglePlaceForm}
          />
        </Profile>
      </Section>
      {renderPlacesList()}
      {renderAvatarPopup()}
      {renderUserInfoPopup()}
      {renderPlacePopup()}
    </StyledApp>
  )
}
