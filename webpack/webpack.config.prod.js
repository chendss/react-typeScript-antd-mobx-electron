const path = require('path')
const appSrc = path.resolve(__dirname, '../src')
const appDist = path.resolve(__dirname, '../dist')
const appIndex = path.resolve(appSrc, 'index.tsx')
const { cssRules } = require('./prod.css.config')
const { resolve } = require('./resolve.allias')
const { optimization } = require('./prod.optimization')
const { imgCssRules } = require('./img.config')
const plugins = require('./prod.plugins')

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
    devtool: false,
    entry: {
        vendor: ['@babel/polyfill'],
        app: [appIndex]
    },
    output: {
        filename: 'public/js/[name].[hash:8].js',
        path: appDist,
        publicPath: './'
    },
    plugins: plugins,
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ['babel-loader', 'awesome-typescript-loader?cacheDirectory'],
                include: [appSrc],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ['babel-loader', 'source-map-loader'],
                exclude: /node_modules/,
            }
        ].concat(imgCssRules).concat(cssRules),
    },
    externals: {
    },
    optimization: optimization,
    resolve: resolve
}