import { Dispatch } from 'redux'
import { updateUserInfo } from 'app/api/Api'

export const updateUserNameAndAbout = (values: {
  name?: string
  about?: string
}) => async (dispatch: Dispatch) => {
  await updateUserInfo(values)

  dispatch({
    type: 'UPDATE_USER_INFO',
    payload: { name: values.name, about: values.about }
  })
}
