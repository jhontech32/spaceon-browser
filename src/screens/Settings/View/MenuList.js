import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View, StyleSheet, Alert
} from 'react-native'
import {
  List, ListItem, Text, Left, Right, Icon, Button
} from 'native-base'
// import { logout } from 'actions/auth/authAction'

import color from 'theme/color'

const styles = StyleSheet.create({
  txtSetName: {
    fontSize: 13,
    color: color.secondaryText
  },
  list: {
    paddingVertical: 10
  },
  btnLogout: {
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10
  }
})

class MenuList extends Component {
  logoutNow = (dispatch, navigation) => {
    Alert.alert(
      'Keluar',
      'Apakah anda sudah yakin ingin keluar ?',
      [
        {
          text: 'batal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Keluar', onPress: () => dispatch(logout(navigation)) }
      ],
      { cancelable: false }
    )
  }

  render () {
    const { navigation, dispatch } = this.props
    const data = [
      { id: 1, name: 'Theme', goTo: 'SetTheme' }
    ]

    return (
      <View>
        <List style={styles.list}>
          {
            data.map((item, index) => (
              <ListItem key={index} onPress={() => navigation.navigate(item.goTo)}>
                <Left>
                  <Text style={styles.txtSetName}>{item.name}</Text>
                </Left>
                <Right>
                  <Icon name="chevron-right" type="Entypo" />
                </Right>
              </ListItem>
            ))
          }
        </List>
        {/* <Button
          full
          danger
          small
          bordered
          iconLeft
          style={styles.btnLogout}
          onPress={() => this.logoutNow(dispatch, navigation)}
        >
          <Icon name="poweroff" type="AntDesign" />
          <Text>Keluar</Text>
        </Button> */}
      </View>
    )
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(MenuList)