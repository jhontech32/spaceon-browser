import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import color from 'theme/color'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.textIcons
  }
})

class Content extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>This is setting theme page !</Text>
      </View>
    )
  }
}
export default Content
