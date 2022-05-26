import React, { Component } from 'react'
import Container from './Container'

class SetTheme extends Component {
  render () {
    const { navigation } = this.props

    return (
      <Container
        navigation={navigation}
      />
    )
  }
}
export default SetTheme