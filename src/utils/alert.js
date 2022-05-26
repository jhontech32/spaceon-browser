import { StyleSheet } from 'react-native'
import { Toast } from 'native-base'

import color from 'theme/color'

const textStyle = { fontSize: 13, fontFamily: 'Ubuntu-Medium' }

const styles = StyleSheet.create({
  alert: {
    width: '90%',
    top: 0,
    marginTop: 10,
    marginVertical: 60,
    // backgroundColor: color.primaryTextTransparent,
    color: color.textIcons,
    alignSelf: 'center',
    borderRadius: 20
  }
})

const success = (response) => {
  Toast.show({
    text: typeof response === 'object' ? response.message : response,
    buttonText: '✖',
    position: 'bottom',
    duration: 2000,
    type: 'success',
    style: styles.alert,
    textStyle
  })
}

const warning = (response) => {
  Toast.show({
    text: typeof response === 'object' ? response.message : response,
    buttonText: 'Ok',
    position: '✖',
    type: 'warning',
    duration: 2000,
    style: styles.alert,
    textStyle
  })
}

const danger = (response) => {
  Toast.show({
    text: typeof response === 'object' ? response.message : response,
    buttonText: '✖',
    position: 'bottom',
    type: 'danger',
    duration: 2000,
    style: styles.alert,
    textStyle
  })
}

export default {
  success,
  warning,
  danger
}
