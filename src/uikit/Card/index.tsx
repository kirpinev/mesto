import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Button, PopupImage } from 'uikit'
import { DeleteIcon, LikeInactiveIcon, LikeActiveIcon } from 'icons'
import { addLike, deleteLike, deleteCard } from 'app/api/Api'

import { IProps } from './types'

const StyledCard = styled.div`
  width: 282px;
  background-color: #fff;
  border-radius: 10px;
  min-height: 360px;
`

const Image = styled.div`
  height: 282px;
  background-image: url(${({ imageLink }: { imageLink?: string }) =>
    imageLink || ''});
  background-size: cover;
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 282px;
    height: 282px;
    background-color: rgba(0, 0, 0, 0.3);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`

const DeleteButton = styled(Button)`
  background-color: transparent;
  border: none;
  width: 18px;
  height: 20px;
  position: absolute;
  top: 18px;
  right: 15px;
  cursor: pointer;
  display: block;
  z-index: 10;
`

const Description = styled.div`
  display: flex;
  min-height: 78px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 22px;
`

const Name = styled.h3`
  margin: 0;
  font-size: 24px;
  line-height: 29px;
`

const LikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LikeButton = styled.button`
  padding: 0;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  width: 21px;
  height: 19px;
  cursor: pointer;
  transition: transform 0.3s linear;
  margin-bottom: 5px;
  outline: none;

  &:hover {
    transform: scale(1.03);
  }
`

const LikesNumber = styled.p`
  margin: 0;
`

export const Card: FC<IProps> = ({
  name,
  likes,
  link,
  owner,
  cardId
}): JSX.Element => {
  const [likesCount, setLikesCount] = useState(likes.length)
  const [isCardClicked, setIsCardClicked] = useState(false)
  const [isCardDeleted, setIsCardDeleted] = useState(false)
  const userId = useSelector(
    (state: { userInfo: { _id: string } }) => state.userInfo._id
  )
  const [isLiked, setIsLiked] = useState(
    likes.some(({ _id }) => userId === _id)
  )
  const onCardClick = () => {
    setIsCardClicked(!isCardClicked)
  }

  const onLikeClick = async () => {
    if (isLiked) {
      await deleteLike(cardId)
      // @ts-ignore
      setLikesCount(likesCount - 1)
      setIsLiked(!isLiked)
    } else if (!isLiked) {
      await addLike(cardId)
      // @ts-ignore
      setLikesCount(likesCount + 1)
      setIsLiked(!isLiked)
    }
  }

  const onTrashIconClick = () => {
    deleteCard(cardId)
    setIsCardDeleted(!isCardDeleted)
  }

  const toggleCardPopup = () => {
    return (
      <>
        {isCardClicked && (
          <PopupImage src={link} alt={name} onClick={onCardClick} />
        )}
      </>
    )
  }

  return (
    <>
      {!isCardDeleted && (
        <>
          <StyledCard>
            <Image onClick={onCardClick} imageLink={link}>
              {userId === owner && (
                <DeleteButton onClick={onTrashIconClick}>
                  <DeleteIcon />
                </DeleteButton>
              )}
            </Image>
            <Description>
              <Name>{name}</Name>
              <LikesContainer>
                <LikeButton onClick={onLikeClick}>
                  {isLiked ? <LikeActiveIcon /> : <LikeInactiveIcon />}
                </LikeButton>
                <LikesNumber>{likesCount}</LikesNumber>
              </LikesContainer>
            </Description>
          </StyledCard>
          {toggleCardPopup()}
        </>
      )}
    </>
  )
}
