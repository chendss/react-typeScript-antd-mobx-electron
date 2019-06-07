import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
export default class Home extends Component {
  static propTypes = {}

  render() {
    return <div>{this.props.store.username}</div>
  }
}
