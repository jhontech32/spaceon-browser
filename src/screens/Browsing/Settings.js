import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'

import color from 'theme/color'

class Settings extends Component {
  render () {
    const { navigation } = this.props

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
      >
        <Icon
          name="settings"
          type="Ionicons"
          style={{ fontSize: 25, color: color.textIcons }}
        />
      </TouchableOpacity>
    )
  }
}
export default Settings