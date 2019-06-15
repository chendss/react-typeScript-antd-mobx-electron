# react-typeScript-antd-mobx-electron

## git

配置远程仓库
git remote add origin url

再添加一个远程仓库
git remote set-url --add origin https://github.com/chendss/react-typeScript-antd-mobx-electron.git

一次提交到所有远程仓库
git push --all

## 命令解析

文章后面会解释为什么执行这些命令可以做这些事情，这些命令完全是自定义的。

- npm run dev 启动开发模式
- npm run build 打包应用
- npm run init 安装依赖

## 项目版本

- 生产依赖-`dependencies 表示生产依赖包`

```javascript
"dependencies": {
    "antd": "^3.19.2",
    "axios": "^0.19.0",
    "lodash": "^4.17.11",
    "mobx": "^5.10.0",
    "mobx-react": "^6.0.3",
    "moment": "^2.24.0",
    "qs": "^6.7.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
}
```

- 开发依赖- `devDependencies 表示开发依赖包` -`不要在意那么多包，根本不需要懂`

```javascript
"devDependencies": {
    "cross-env": "^5.2.0",
    "@babel/cli": "^7.4.4",
    "@babel/core": "^7.4.5",
    "@babel/plugin-proposal-class-properties": "^7.4.4",
    "@babel/plugin-proposal-decorators": "^7.4.4",
    "@babel/plugin-proposal-do-expressions": "^7.2.0",
    "@babel/plugin-proposal-export-default-from": "^7.2.0",
    "@babel/plugin-proposal-export-namespace-from": "^7.2.0",
    "@babel/plugin-proposal-function-bind": "^7.2.0",
    "@babel/plugin-proposal-logical-assignment-operators": "^7.2.0",
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.4.4",
    "@babel/plugin-proposal-optional-chaining": "^7.2.0",
    "@babel/plugin-proposal-pipeline-operator": "^7.3.2",
    "@babel/plugin-proposal-throw-expressions": "^7.2.0",
    "@babel/plugin-syntax-decorators": "^7.2.0",
    "@babel/plugin-syntax-dynamic-import": "^7.2.0",
    "@babel/plugin-syntax-jsx": "^7.2.0",
    "@babel/plugin-syntax-typescript": "^7.3.3",
    "@babel/plugin-transform-runtime": "^7.4.4",
    "@babel/polyfill": "^7.4.4",
    "@babel/preset-env": "^7.4.5",
    "@babel/preset-react": "^7.0.0",
    "@babel/runtime-corejs2": "^7.4.5",
    "@types/lodash": "^4.14.134",
    "@types/node": "^12.0.7",
    "@types/react": "^16.8.19",
    "@types/react-dom": "^16.8.4",
    "@types/webpack-env": "^1.13.9",
    "autoprefixer": "^9.6.0",
    "awesome-typescript-loader": "^5.2.1",
    "babel-loader": "^8.0.6",
    "babel-plugin-import": "^1.12.0",
    "babel-polyfill": "^6.26.0",
    "clean-webpack-plugin": "^3.0.0",
    "concurrently": "^4.1.0",
    "css-loader": "^2.1.1",
    "electron": "^5.0.3",
    "electron-packager": "^13.1.1",
    "friendly-errors-webpack-plugin": "^1.7.0",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.9.0",
    "less-loader": "^5.0.0",
    "mini-css-extract-plugin": "^0.7.0",
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    "postcss-loader": "^3.0.0",
    "prop-types": "^15.7.2",
    "react-hot-loader": "^4.9.0",
    "react-router-dom": "^5.0.1",
    "style-loader": "^0.23.1",
    "terser-webpack-plugin": "^1.3.0",
    "typescript": "^3.5.1",
    "uglifyjs-webpack-plugin": "^2.1.3",
    "webpack": "^4.33.0",
    "webpack-cli": "^3.3.3",
    "webpack-dev-server": "^3.7.1"
  }
```

## 必要的工具

- [node](http://nodejs.org) 不懂的不要看这篇文章。
- [cnpm](https://npm.taobao.org) `npm install -g cnpm --registry=https://registry.npm.taobao.org` 有时候国内的环境的问题，需要用这个淘宝镜像，不到万不得已别用

- [concurrently](https://www.npmjs.com/package/concurrently)   `npm i concurrently -save-dev`使用 concurrently 运行多个 npm 命令，可以用来同时跑多个npm命令

- [cross-env](https://github.com/kentcdodds/cross-env#readme) `npm install --save-dev cross-env`不同系统环境变量设置方式不一样，这个工具可以兼容多平台
- [electron](https://electronjs.org/docs/tutorial/installation)   `npm install electron --save-dev` electron是跨平台pc应用程序技术方案。
- [yarn](https://yarn.bootcss.com/docs/install/#mac-stable) 更好用的包管理工具
  - mac环境`sudo brew install yarn`
  - windows-直接[下载](https://yarn.bootcss.com/docs/install/#windows-stable)
    - 安装[Chocolatey](https://chocolatey.org/) ,windows的包管理工具，类似mac的brew
    - `choco install yarn` 即可安装
  - linux `sudo apt-get update && sudo apt-get install yarn`

- [typeScript](https://www.typescriptlang.org) `npm install -g typescript`
- [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) `yarn add webpack-dev-server -D`这个东西是专门给开发的时候使用的，功能很多但是一定不要在意，不会就搜。

## 一、webpack配置

- `npm init` 初始化一下，这时候会出现一个*package.json*文件，大概会长这个样子。（没错，初始化之后没什么需要在意的。）

```javascript
{
    "name": "react-electron", // 项目的名字
    "version": "1.0.0", // 项目版本号 没卵用
    "description": "", // 不必在意
    "scripts": {
        // 几条命令，不用在意
    },
    "repository": {
        // 仓库
    },
    "keywords": [], // 不必在意
    "author": "", // 不必在意
    "dependencies": {
        // 生产依赖包
    },
    "devDependencies": {
        // 开发依赖包
    }
}

```



- 创建一个文件夹*webpack（你喜欢叫什么都无所谓）*，接下来的操作在此文件夹里进行

  - 需要一个开发时候给  *webpack-dev-server* 调用的js文件，创建  *webpack.config.dev.js* 文件，注意这个js文件跟普通的js文件是一毛一样的。文件内容如下

    ```javascript
    module.exports = {
        mode: 'development', //随便给个模式名称
        devtool: 'eval-source-map', // 不必在意，抄这个就好了
        entry: [
            // 后面会填
        ],
        output: {
            filename: 'public/js/[name].[hash:8].js',
            path: appDist,
            publicPath: '/'
        },
        plugins: [
            // 后面会填
        ],
        module: {
            rules: [
            ],
        },
        devServer: {
            contentBase: '', // 表示放在哪个文件夹
            hot: true,
            host: 'localhost',
            port: port,
            historyApiFallback: true,
            // 是否将错误展示在浏览器蒙层
            overlay: true,
            inline: true,
            // 打印信息
            stats: 'errors-only',
            // 设置代理
        },
        externals: {
        },
        resolve: {}
    }
    ```

    

  