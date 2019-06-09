const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin') // 可以将 public 目录下的文件夹拷贝到 dist 输出文件夹下 可以自动将 dist 下的 js 文件引入到 html 文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const appPublic = path.resolve(__dirname, '../public')
const appHtml = path.resolve(appPublic, 'index.html')

module.exports = [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
        // 定义 NODE_ENV 环境变量为 production
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new HTMLWebpackPlugin({
        template: appHtml,
        filename: 'index.html'
    }),

    new MiniCssExtractPlugin({
        filename: 'public/styles/[name].[contenthash:8].css',
        chunkFilename: 'public/styles/[name].[contenthash:8].chunk.css'
    }),
]