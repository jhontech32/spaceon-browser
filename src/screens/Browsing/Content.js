import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Icon } from 'native-base'

import color from 'theme/color'

import Website from './Website'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -15,
    backgroundColor: color.primaryColor
  },
  wrapOutside: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: color.AccentprimaryColor
  },
  input: {
    borderColor: color.dividerColor,
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 10,
    backgroundColor: color.cloudColor,
    color: color.smoothText
  },
  iconSearch: {
    fontSize: 25,
    color: color.smoothText
  },
  leftSide: {
    width: '85%'
  },
  rightSide: {
    width: '13%',
    marginLeft: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 5,
    backgroundColor: color.dividerColor
  },
  bottomNav: {
    width: '100%',
    backgroundColor: color.primaryColor,
    paddingHorizontal: 10,
    paddingVertical: 2,
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 2,
    borderTopColor: color.AccentprimaryColor
  },
  txtSearhDefault: {
    color: color.textIcons
  }
})

class Content extends Component {
  state = {
    keyword: null,
    resultKeyword: null
  }

  render () {
    const { keyword, resultKeyword } = this.state

    return (
      <View style={styles.container}>
        {/* <Text>This is header</Text> */}
        <View style={styles.wrapOutside}>
          <View style={styles.leftSide}>
            <TextInput
              style={styles.input}
              placeholder="Search or type web address"
              placeholderTextColor={color.smoothText}
              onChangeText={(text) => this.setState({ keyword: text })}
            />
          </View>
          <View style={styles.rightSide}>
            <TouchableOpacity
              onPress={() => this.setState({ resultKeyword: keyword })}
            >
              <Icon
                name="search"
                type="Ionicons"
                style={styles.iconSearch}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Website resultKeyword={resultKeyword} />
        <View style={styles.bottomNav}>
          <Text style={styles.txtSearhDefault}>Search Engines: <Text style={{ color: color.dividerColor, fontWeight: 'bold' }}>Google</Text></Text>
        </View>
      </View>
    )
  }
}

export default Content
