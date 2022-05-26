import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

import color from 'theme/color'

const styles = StyleSheet.create({
  btn: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: color.textIcons,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  count: {
    fontSize: 20,
    color: color.textIcons
  }
})

class Multiverse extends Component {
  render () {
    const { navigation } = this.props

    console.log('navigation at settings', navigation)

    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.count}>1</Text>
      </TouchableOpacity>
    )
  }
}
export default Multiverse