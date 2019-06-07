const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') // 可以将 public 目录下的文件夹拷贝到 dist 输出文件夹下 可以自动将 dist 下的 js 文件引入到 html 文件中

const webpack = require('webpack')
const appSrc = path.resolve(__dirname, '../src')
const appDist = path.resolve(__dirname, '../dist')
const appPublic = path.resolve(__dirname, '../public')
const appIndex = path.resolve(appSrc, 'index.js')
const appHtml = path.resolve(appPublic, 'index.html')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { port } = require('./easy.config')
const { cssRules } = require('./base.css.config')
const { resolve } = require('./resolve.allias')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        appIndex
    ],
    output: {
        filename: 'public/js/[name].[hash:8].js',
        path: appDist,
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: appHtml,
            filename: 'index.html'
        }),
        new FriendlyErrorsWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader?cacheDirectory',
                include: [appSrc],
                exclude: /node_modules/
            }
        ].concat(cssRules),
    },
    devServer: {
        contentBase: appPublic,
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
        proxy: {
            '/api': {
                changeOrigin: true,
                target: 'https://easy-mock.com/mock/5c2dc9665cfaa5209116fa40/example',
                pathRewrite: {
                    '^/api/': '/'
                }
            }
        }
    },
    resolve: resolve
}