export type UserInfoState = {
  about: string
  avatar: string
  cohort: string
  name: string
  _id: string
}

type UserInfoAction = {
  type: string
  payload: UserInfoState
}

export const initialState = {
  about: '',
  avatar: '',
  cohort: '',
  name: '',
  _id: ''
}

export const userInfoReducer = (
  state: UserInfoState = initialState,
  action: UserInfoAction
): UserInfoState => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { ...state, ...action.payload }
    case 'FETCH_USER_DATA':
      return { ...state, ...action.payload }
    case 'UPDATE_USER_AVATAR':
      return { ...state, ...action.payload }
    case 'UPDATE_USER_INFO':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
