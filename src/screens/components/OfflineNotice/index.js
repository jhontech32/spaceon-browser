import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import NetInfo from '@react-native-community/netinfo'

import Notice from './Notice'

class OfflineNotice extends PureComponent {
  componentDidMount = async () => {
    await NetInfo.addEventListener(state => {
      this.handleConnectivityChange(state)
    })
  }

  componentWillUnmount = async () => {
    await NetInfo.addEventListener(state => {
      this.handleConnectivityChange(state)
    })
  }

  handleConnectivityChange = (state) => {
    const { dispatch } = this.props
    // Jangan lupa diubah kembali nantinya
    const data = { isConnected: state }
    if (state) {
      dispatch(checking(data))
    } else {
      dispatch(checking(data))
    }
  }

  render () {
    const { isConnected } = this.props

    return (
      <>
        {!isConnected && (<Notice />)}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.offlineStore.list,
  isConnected: state.offlineStore.isConnected
})

export default connect(mapStateToProps)(OfflineNotice)
