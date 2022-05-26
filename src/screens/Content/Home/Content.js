import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

import Browsing from '../../Browsing'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  }
})

class Content extends Component {
  render () {
    const { defaultTheme } = this.props

    return (
      <Browsing />
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.themeStore.loading,
  defaultTheme: state.themeStore.defaultTheme
})

export default connect(mapStateToProps)(Content)
