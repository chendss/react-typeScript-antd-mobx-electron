const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') // 可以将 public 目录下的文件夹拷贝到 dist 输出文件夹下 可以自动将 dist 下的 js 文件引入到 html 文件中

const webpack = require('webpack')
const appSrc = path.resolve(__dirname, '../src')
const appDist = path.resolve(__dirname, '../dist')
const appPublic = path.resolve(__dirname, '../public')
const appIndex = path.resolve(appSrc, 'index.js')
const appHtml = path.resolve(appPublic, 'index.html')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { cssRules } = require('./prod.css.config')
const { resolve } = require('./resolve.allias')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { optimization } = require('./prod.optimization')

module.exports = {
    stats: {
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    },
    performance: {
        hints: false
    },
    mode: 'production',
    devtool: 'hidden-source-map',
    entry: [
        appIndex
    ],
    output: {
        filename: 'public/js/[name].[hash:8].js',
        path: appDist,
        publicPath: './'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: appHtml,
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'public/styles/[name].[contenthash:8].css',
            chunkFilename: 'public/styles/[name].[contenthash:8].chunk.css'
        }),
        new webpack.DefinePlugin({
            // 定义 NODE_ENV 环境变量为 production
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new CleanWebpackPlugin()
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
    optimization: optimization,
    resolve: resolve
}