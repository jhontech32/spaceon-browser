import React, { Component } from 'react'
import Container from './Container'

class Browsing extends Component {
  render () {
    const { navigation } = this.props

    return (
      <Container
        navigation={navigation}
      />
    )
  }
}
export default Browsing