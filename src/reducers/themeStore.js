import {
  FETCH_SET_THEME,
  RECEIVE_SET_THEME,
  SUCCESS_SET_THEME,
  FAILED_SET_THEME
} from '../actions/types'

const initialState = {
  loading: false,
  authorized: false,
  filter: {
    page: 1,
    pageSize: 5
  },
  list: [],
  defaultTheme: 'light',
  meta: {},
  dataSet: [],
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SET_THEME:
      return { ...state, loading: true }
    case RECEIVE_SET_THEME:
      return {
        ...state,
        loading: false,
        defaultTheme: action.payload.defaultTheme
      }
    case SUCCESS_SET_THEME:
      return {
        ...state,
        loading: false
      }
    case FAILED_SET_THEME:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error
      }
    default:
      return state
  }
}
