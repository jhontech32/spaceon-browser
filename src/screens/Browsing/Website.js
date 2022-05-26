import React, { Component } from 'react'
import {
  Text, StyleSheet, BackHandler
} from 'react-native'
import { WebView } from 'react-native-webview'
import FastImage from 'react-native-fast-image'

import color from 'theme/color'

import Loading from 'components/Loading'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnClose: {
    backgroundColor: color.guideColor
  },
  containBtnGuide: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: color.accentIcons,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '100%'
  },
  btnGuide: {
    backgroundColor: color.guideColor,
    borderRadius: 10
  },
  webViewContainer: {
    zIndex: 0,
    backgroundColor: color.accentIcons
  }
})

class Container extends Component {
  state = {
    isVisible: false,
    canGoBack: true
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton = () => {
    const { canGoBack } = this.state
    if (canGoBack === true) {
      this.webView.goBack()
      return true
    }
    return true
  }

  ActivityIndicatorLoadingView = () => {
    return (
      <Loading />
    )
  }

  _onNavigationStateChange (navState) {
    // console.log('====>', navState)
    this.setState({
      canGoBack: navState.canGoBack
    })
  }

  render () {
    const { resultKeyword } = this.props

    console.log('resultKeyword', resultKeyword)

    const result = `https://google.com/search?q=${resultKeyword}&sourceid=chrome-mobile`

    console.log('result', result)

    return (
      <>
        {
          resultKeyword !== null ? (
            <WebView
              userAgent="Mozilla/5.0 (Linux; Android 16; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19 Firefox/61.0"
              source={{ uri: result }}
              ref={component => { this.webView = component }}
              // onNavigationStateChange={this._onNavigationStateChange.bind(this)}
              onNavigationStateChange={navState => {
                this._onNavigationStateChange(navState)
              }}
              renderLoading={this.ActivityIndicatorLoadingView}
              style={styles.webViewContainer}
              decelerationRate="fast"
              javaScriptEnabled
              domStorageEnabled
              startInLoadingState
              sharedCookiesEnabled
              scrollEnabled={false}
              allowsFullscreenVideo
              onError={(err) => console.log('error', err)}
            />
          )
            : (
              <FastImage
                style={{ width: '100%', height: '100%' }}
                source={{
                  uri: 'https://cdn.dribbble.com/users/3130221/screenshots/11943363/media/f0e7ecea183e4a9e16d5164c4b32cd92.gif',
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            )
        }
      </>
    )
  }
}
export default Container