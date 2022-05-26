import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Icon, Text } from 'native-base'

import color from 'theme/color'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: color.errorColor,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width
  },
  offlineText: {
    fontSize: 12,
    color: color.textIcons
  },
  icon: {
    color: color.textIcons,
    fontSize: 14,
    paddingHorizontal: 10
  }
})

class Notice extends Component {
  render () {
    return (
      <View style={styles.offlineContainer}>
        <Icon
          name="exclamation-circle"
          type="FontAwesome"
          style={styles.icon}
        />
        <Text style={styles.offlineText}>Anda sedang berada dimode offline.</Text>
      </View>
    )
  }
}
export default Notice
