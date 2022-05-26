import 'react-native-gesture-handler'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Icon } from 'native-base'

import color from 'theme/color'

const styles = StyleSheet.create({
  focusColor: {
    fontSize: 28,
    color: color.primaryColor
  },
  notFocusColor: {
    fontSize: 20,
    color: color.dividerColor
  },
  containCircle: {
    borderColor: color.primaryColor,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: 60,
    height: 60,
    backgroundColor: color.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  iconCircle: {
    fontSize: 24,
    color: color.textIcons
  }
})

class TabBarItem extends Component {
  render () {
    const {
      circleMenu, iconName, focused, typeIcon
    } = this.props

    return (
      <View>
        {
          circleMenu
            ? (
              <View style={styles.containCircle}>
                <Icon style={styles.iconCircle} name={iconName} type={typeIcon || 'AntDesign'} />
              </View>
            )
            : (
              <Icon
                style={focused ? styles.focusColor : styles.notFocusColor}
                name={iconName}
                type={typeIcon || 'AntDesign'}
              />
            )
        }
      </View>
    )
  }
}

TabBarItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  focused: PropTypes.bool,
  typeIcon: PropTypes.string
}

export default TabBarItem
