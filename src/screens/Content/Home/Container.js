import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native'

import color from 'theme/color'

// import CustomHeader from 'components/CustomHeader'
import Content from './Content'
// import Settings from './Settings'
// import Browsing from './Browsing'
// import Multiverse from './Multiverse'

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
        {/* <CustomHeader
          title="SPACE ON"
          backButton={false}
          navigation={navigation}
          backgroundColor={color.primaryColor}
          statusBarColor={color.primaryColor}
          leftMenu
          componentLeft={<Browsing navigation={navigation} />}
          rightMenu
          componentRight={
            <View style={styles.wrapNav}>
              <Settings navigation={navigation} />
            </View>
          }
        /> */}
        <Content
          navigation={navigation}
        />
      </SafeAreaView>
    )
  }
}
export default Container
