const autoprefixer = require('autoprefixer') // 自动前缀
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    cssRules: [
        {
            test: /\.(css|less)$/,
            exclude: /node_modules/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: true,
                    localIdentName: '[local].[hash:8]'
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [autoprefixer()]
                }
            },
            {
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true
                }
            }
            ]
        },
        {
            test: /\.(css|less)$/,
            include: /node_modules/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            },
            {
                loader: 'css-loader',
                options: {}
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [autoprefixer()]
                }
            },
            {
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true
                }
            }
            ]
        },
    ]
}