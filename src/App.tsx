import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/home/home.tsx'
import GlobalModel from './store'
import styles from './App.less'

const globalModel = new GlobalModel()

export default (props) => {
    return (
        <div className={styles.App}>
            <Switch globalModel={globalModel}>
                <Route exact path='/' component={Home} />
            </Switch>
        </div>
    )
}