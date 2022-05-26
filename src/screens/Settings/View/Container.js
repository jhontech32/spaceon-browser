import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import color from 'theme/color'

import CustomHeader from 'components/CustomHeader'
import Content from './Content'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class Container extends Component {
  render () {
    const { navigation } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <CustomHeader
          title="SETTINGS"
          backButton
          navigation={navigation}
          backgroundColor={color.primaryColor}
          statusBarColor={color.primaryColor}
        />
        <Content
          navigation={navigation}
        />
      </SafeAreaView>
    )
  }
}
export default Container
