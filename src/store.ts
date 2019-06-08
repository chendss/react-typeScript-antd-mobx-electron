/*
 * @file: store.js
 * @author: beichensky
 * @description: 用来存放全局数据的 Model
 */

import { observable, action } from 'mobx'

export default class Store {

    @observable username = '小明3'

    /**
     * 修改 username 的方法
     */
    @action
    changeUserName = (name) => {
        this.username = name
    }

}