import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text } from 'native-base'

import color from 'theme/color'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: color.textIcons,
    position: 'absolute'
  },
  imageLoading: {
    width: 250,
    height: 250,
    alignSelf: 'center'
  },
  txtLoading: {
    paddingTop: 10,
    textAlign: 'center',
    color: color.darkPrimaryColor,
    paddingBottom: 100
  }
})

class Loading extends Component {
  render () {
    return (
      <View style={styles.container}>
        {/* <Image
          source={require('assets/app/loading.gif')}
          style={styles.imageLoading}
        /> */}
        <Text style={styles.txtLoading}>Please wait..</Text>
      </View>
    )
  }
}
export default Loading