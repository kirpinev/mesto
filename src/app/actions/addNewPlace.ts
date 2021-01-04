export const addNewPlace = (place: {}) => {
  return {
    type: 'ADD_PLACE',
    payload: [place]
  }
}
