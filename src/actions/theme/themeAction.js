import Alert from 'utils/alert'
import {
  FETCH_SET_THEME,
  RECEIVE_SET_THEME,
  SUCCESS_SET_THEME,
  FAILED_SET_THEME
} from '../types'

const fetch = () => {
  return {
    type: FETCH_SET_THEME
  }
}

const receive = (defaultTheme) => {
  return {
    type: RECEIVE_SET_THEME,
    payload: {
      defaultTheme
    }
  }
}

const success = (message) => {
  Alert.success(message)
  return {
    type: SUCCESS_SET_THEME
  }
}

const failed = (error) => {
  Alert.warning(error)
  return {
    type: FAILED_SET_THEME,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const setTheme = (data) => async (dispatch) => {
  try {
    dispatch(fetch())
    dispatch(receive(data))
    dispatch(success({ message: 'Success change theme !' }))
  } catch (error) {
    return dispatch(failed(error))
  }
}

export {
  setTheme
}
