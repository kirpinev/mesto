import { Dispatch } from 'redux'
import { getUserInfo } from 'app/api/Api'

export const fetchUserInfo = () => async (dispatch: Dispatch) => {
  const response = await getUserInfo()

  dispatch({
    type: 'FETCH_USER_DATA',
    payload: response
  })
}
