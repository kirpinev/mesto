import { combineReducers } from 'redux'
import { userInfoReducer } from './userInfoReducer'
import { placesReducer } from 'app/reducers/placesReducer'

export const reducers = combineReducers({
  userInfo: userInfoReducer,
  places: placesReducer
})
