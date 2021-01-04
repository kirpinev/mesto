import { Dispatch } from 'redux'
import { getPlaces } from 'app/api/Api'

export const fetchPlaces = () => async (dispatch: Dispatch) => {
  const response = await getPlaces()

  dispatch({
    type: 'FETCH_PLACES',
    payload: response
  })
}
