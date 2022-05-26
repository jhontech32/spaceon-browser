import React, { Component } from 'react'
import { View, StyleSheet, BackHandler } from 'react-native'
import color from 'theme/color'

import MenuList from './MenuList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.textIcons
  }
})

class Content extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton = () => {
    return true
  }

  render () {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <MenuList
          navigation={navigation}
        />
      </View>
    )
  }
}
export default Content
