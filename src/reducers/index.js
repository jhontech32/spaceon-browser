import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import themeStore from './themeStore'

export default combineReducers({
  form: formReducer,
  themeStore
})
