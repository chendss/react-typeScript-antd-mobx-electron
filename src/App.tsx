import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/home/home.tsx'
import * as styles from './App.less'
import { hot } from 'react-hot-loader/root'


export default hot((props) => {
    return (
        <div className={styles.App}>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </div>
    )
})