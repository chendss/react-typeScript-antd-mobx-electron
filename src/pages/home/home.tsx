import * as React from 'react'
import { Component } from 'react'
import * as PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'



@inject('store')
@observer
export default class Home extends React.Component<IProps, object> {
    static propTypes = {}
    readonly state: IProps
    render() {
        return <div>{this.props.store.username + 'hello world'}</div>
    }
}
