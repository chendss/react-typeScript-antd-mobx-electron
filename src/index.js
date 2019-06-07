import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
import { LocaleProvider } from 'antd'
import { HashRouter } from 'react-router-dom'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'
import { AppContainer } from 'react-hot-loader'
import App from '@/App'
import Store from './store.js'

const Home = () => {
    return <App></App>
}

ReactDom.render(
    <Provider store={new Store()}>
        <LocaleProvider locale={zh_CN}>
            <HashRouter>
                <AppContainer>
                    <Home></Home>
                </AppContainer>
            </HashRouter>
        </LocaleProvider>
    </Provider>
    ,
    document.querySelector('#root')
)

if (module.hot) {
    module.hot.accept()
}