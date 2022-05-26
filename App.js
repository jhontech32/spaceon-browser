import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { LogBox } from 'react-native'
import { Provider } from 'react-redux'
import { StyleProvider, Root } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'

// import PushNotification from 'react-native-push-notification'
import GlobalFont from 'utils/customfont'
import getTheme from './node_modules/native-base/src/theme/components'
import material from './native-base-theme/variables/material.js'
import Routes from './src/Routes'
import store from './src/store'

export default class App extends Component {
  componentDidMount () {
    this.initializeGlobalFont()
  }

  initializeGlobalFont = async () => {
    let fontName = 'Robot_medium'
    GlobalFont.applyGlobal(fontName)
  }

  render () {
    LogBox.ignoreLogs(['Warning: ...'])
    // Ignore log notification by message
    LogBox.ignoreAllLogs()
    // Ignore all log notifications

    return (
      <Provider store={store}>
        <Root>
          <StyleProvider style={getTheme(material)}>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </StyleProvider>
        </Root>
      </Provider>
    )
  }
}
