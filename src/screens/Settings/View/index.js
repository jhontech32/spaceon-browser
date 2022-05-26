import React, { Component } from 'react'
import Container from './Container'

class Settings extends Component {
  render () {
    const { navigation } = this.props

    return (
      <Container
        navigation={navigation}
      />
    )
  }
}
export default Settings