import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
import { LocaleProvider } from 'antd'
import { HashRouter } from 'react-router-dom'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'
import App from '@/App.tsx'
import Store from './store'


const Home = () => {
    return <App></App>
}

ReactDom.render(
    <Provider store={new Store()}>
        <LocaleProvider locale={zh_CN}>
            <HashRouter>
                <Home></Home>
            </HashRouter>
        </LocaleProvider>
    </Provider>
    ,
    document.querySelector('#root')
)