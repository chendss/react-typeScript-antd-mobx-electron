import * as React from 'react'
import { Component } from 'react'
import * as PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

@inject('store')
@observer
export default class Home extends React.Component<Props, object> {
    static propTypes = {}

    render() {
        return <div>{this.props.store.username}</div>
    }
}
