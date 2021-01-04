type PlaceAction = {
  type: string
  payload: []
}

export const placesReducer = (state: [] = [], action: PlaceAction): [] => {
  switch (action.type) {
    case 'FETCH_PLACES':
      return [...state, ...action.payload]
    case 'ADD_PLACE':
      return [...state, ...action.payload]
    default:
      return state
  }
}
