import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import {
  Header,
  Right,
  Button,
  Icon
} from 'native-base'

import color from 'theme/color'

const styles = StyleSheet.create({
  headTitle: {
    fontSize: 18,
    alignSelf: 'center',
    color: color.smoothText,
    fontFamily: 'Poppins-Medium'
  },
  wrapHeadNav: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftSide: {
    width: '20%'
  },
  bodySide: {
    width: '60%'
  },
  rightSide: {
    width: '20%',
    paddingLeft: 30
  },
  separatorHide: {
    height: 50,
    width: 30,
    backgroundColor: color.primaryColor
  },
  rightNativeSide: {
    alignItems: 'center'
  }
})

class CustomHeader extends PureComponent {
  render () {
    const {
      navigation,
      title,
      backgroundColor,
      statusBarColor,
      leftMenu,
      rightMenu,
      backButton,
      // rightIconName,
      // rightIconType,
      // goTo,
      componentLeft,
      componentRight
    } = this.props

    return (
      <Header
        androidStatusBarColor={statusBarColor}
        style={{ backgroundColor: backgroundColor }}
      >
        <View style={styles.wrapHeadNav}>

          <View style={styles.leftSide}>
            {
              backButton ? (
                <Button transparent onPress={() => navigation.goBack()}>
                  <Icon name="arrowleft" type="AntDesign" style={{ color: color.textIcons }} />
                  <View style={styles.separatorHide} />
                </Button>
              ) : null
            }

            {
              leftMenu ? (
                <Right style={styles.rightNativeSide}>
                  {componentLeft}
                </Right>
              ) : null
            }
          </View>

          <View style={styles.bodySide}>
            <Text uppercase style={[styles.headTitle, { color: color.textIcons }]}>{title}</Text>
          </View>

          <View style={styles.rightSide}>
            {
              rightMenu ? (
                <Right style={styles.rightNativeSide}>
                  {componentRight}
                </Right>
              ) : null
            }
          </View>

        </View>

      </Header >
    )
  }
}

CustomHeader.defaultProps = {
  backButton: true,
  rightMenu: false
  // rightIconType: 'AntDesign'
}

CustomHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string,
  statusBarColor: PropTypes.string,
  rightMenu: PropTypes.bool,
  // rightIconName: PropTypes.string,
  // rightIconType: PropTypes.string,
  backButton: PropTypes.bool
}

export default CustomHeader
