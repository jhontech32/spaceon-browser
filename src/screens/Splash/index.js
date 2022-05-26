import React, { Component } from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet
} from 'react-native'

import color from 'theme/color'

// import Logo from 'assets/app/logo.gif'
import Background from 'assets/app/background.gif'

const styles = StyleSheet.create({
  wrapInsider: {
    alignItems: 'center',
    marginTop: -200
  },
  txtLoading: {
    fontSize: 15,
    paddingBottom: 120,
    textAlign: 'center',
    color: color.dividerColor
  },
  picThumb: {
    width: 140,
    height: 140
  },
  wrapVersion: {
    paddingVertical: 20,
    alignItems: 'center'
  },
  txtVersionNumb: {
    fontSize: 11,
    color: color.dividerColor
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtHeader: {
    fontSize: 60,
    color: color.textIcons,
    fontFamily: 'Lobster-Regular'
  }
})

class Splash extends Component {
  render () {
    return (
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.wrapInsider}>
          <Text style={styles.txtHeader}>Space On</Text>
          <View style={styles.wrapVersion}>
            <Text style={styles.txtLoading}></Text>
            <Text style={styles.txtVersionNumb}>SpaceOn - v1.0.0</Text>
            <Text style={styles.txtVersionNumb}>copyright Ⓒ 2022 - Raindev Media Tech</Text>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

export default Splash
