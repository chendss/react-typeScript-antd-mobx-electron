const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') // 可以将 public 目录下的文件夹拷贝到 dist 输出文件夹下 可以自动将 dist 下的 js 文件引入到 html 文件中

const webpack = require('webpack')
const appSrc = path.resolve(__dirname, '../src')
const appDist = path.resolve(__dirname, '../dist')
const appPublic = path.resolve(__dirname, '../public')
const appIndex = path.resolve(appSrc, 'index.tsx')
const appHtml = path.resolve(appPublic, 'index.html')
const { cssRules } = require('./prod.css.config')
const { resolve } = require('./resolve.allias')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { optimization } = require('./prod.optimization')
const { imgCssRules } = require('./img.config')

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
    devtool: 'eval-source-map',
    entry: [
        '@babel/plugin-syntax-typescript',
        '@babel/plugin-syntax-decorators',
        '@babel/plugin-syntax-jsx',
        appIndex
    ],
    output: {
        filename: 'public/js/[name].[hash:8].js',
        path: appDist,
        publicPath: './'
    },
    plugins: [
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
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader?cacheDirectory',
                include: [appSrc],
                exclude: /node_modules/
            }
        ].concat(imgCssRules).concat(cssRules),
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    optimization: optimization,
    resolve: resolve
}