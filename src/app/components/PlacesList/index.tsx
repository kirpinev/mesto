import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Card } from 'uikit'

const StyledPlaceList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 281px);
  grid-gap: 18px 18px;
  justify-content: center;
`

export const PlacesList = (): ReactElement => {
  const places = useSelector((state: { places: [] }) => state.places)

  return (
    <StyledPlaceList>
      {places.map(
        (place: {
          _id: string
          name: string
          link: string
          likes: []
          owner: { _id: string }
        }) => {
          return (
            <Card
              key={place._id}
              name={place.name}
              link={place.link}
              likes={place.likes}
              owner={place.owner._id}
              cardId={place._id}
            />
          )
        }
      )}
    </StyledPlaceList>
  )
}
