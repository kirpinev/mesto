import { Dispatch } from 'redux'
import { updateAvatar } from 'app/api/Api'

export const updateUserAvatar = (values: { avatar?: string }) => async (
  dispatch: Dispatch
) => {
  await updateAvatar(values)

  dispatch({
    type: 'UPDATE_USER_AVATAR',
    payload: { avatar: values.avatar }
  })
}
