import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {
  View, StyleSheet, BackHandler
} from 'react-native'
import { Text, Button, Icon } from 'native-base'
import { WebView } from 'react-native-webview'

import color from 'theme/color'
import globalStyle from 'theme/style'

import Loading from 'components/Loading'
import Modal from 'react-native-modal'
import Guide from './Guide'

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
    const { navigation } = this.props
    const { isVisible } = this.state
    const { params } = navigation.state

    return (
      <View style={styles.container}>

        <View>
          <Button style={{ backgroundColor: color.primaryColor }} onPress={() => navigation.navigate('Home')}>
            <Icon name="box" type="Entypo" />
            <Text uppercase={false} style={globalStyle.boldText}>Masuk ke Box yang lain ?</Text>
          </Button>
        </View>

        {
          params && params.item.guide && (
            <View>
              <Modal isVisible={isVisible}>
                <Guide />
                <Button
                  full
                  style={styles.btnClose}
                  onPress={() => this.setState({ isVisible: false })}
                >
                  <Text>Close</Text>
                </Button>
              </Modal>

              <View style={styles.containBtnGuide}>
                <Button
                  full
                  style={styles.btnGuide}
                  onPress={() => this.setState({ isVisible: true })}
                >
                  <Text uppercase={false}>Lihat cara pakai</Text>
                </Button>
              </View>
            </View>
          )
        }

        {
          params && params.item ? (
            <WebView
              userAgent="Mozilla/5.0 (Linux; Android 16; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19 Firefox/61.0"
              source={{ uri: params.item.href }}
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
              <Text>
                Something went wrong!
              </Text>
            )
        }
      </View>
    )
  }
}
export default withNavigation(Container)