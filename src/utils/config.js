import {
  API_DEBUG,
  API_PROTOCOL,
  API_HOST,
  API_PORT,
  API_VERSION,

  STATIC_TOKEN,

  IMAGE_PROTOCOL,
  IMAGE_HOST,
  IMAGE_PORT,
  IMAGE_VERSION
} from 'react-native-dotenv'

export const debug = API_DEBUG

export const APIPROTOCOL = API_PROTOCOL
export const APIHOST = API_HOST
export const APIPORT = API_PORT
export const APIVERSION = API_VERSION

export const APIURL = `${APIPROTOCOL}://${APIHOST}:${API_PORT}${APIVERSION}`
// export const APIURL = `${APIPROTOCOL}://${APIHOST}`
export const APIURLNOVERSION = `${APIPROTOCOL}://${APIHOST}${API_PORT}`

export const STATICTOKEN = STATIC_TOKEN

export const IMAGEPROTOCOL = IMAGE_PROTOCOL
export const IMAGEHOST = IMAGE_HOST
export const IMAGEPORT = IMAGE_PORT
export const IMAGEVERSION = IMAGE_VERSION
export const IMAGEURL = `${IMAGE_PROTOCOL}://${IMAGE_HOST}:${IMAGE_PORT}${IMAGEVERSION}`

export const apiAuth = '/auth'
export const apiUser = '/users'
export const apiJobs = '/job-orders'
export const apiPsi = '/detail-many-psi'
export const apiDashboard = '/dashboard'
export const apiTeam = '/team'

export const optionsImage = {
  title: 'Select Photo',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}
