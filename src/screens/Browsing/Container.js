import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'

import color from 'theme/color'

import CustomHeader from 'components/CustomHeader'
import Settings from './Settings'
import Content from './Content'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapNav: {
    paddingRight: 10
  }
})

class Container extends Component {
  render () {
    const { navigation } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <CustomHeader
          title="SPACE ON"
          backButton={false}
          navigation={navigation}
          backgroundColor={color.primaryColor}
          statusBarColor={color.primaryColor}
          rightMenu
          componentRight={
            <View style={styles.wrapNav}>
              <Settings navigation={navigation} />
            </View>
          }
        />
        <Content
          navigation={navigation}
        />
      </SafeAreaView>
    )
  }
}
export default Container
