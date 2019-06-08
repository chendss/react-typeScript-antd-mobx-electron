module.exports = {
    imgCssRules: [
        {
            test: /\.(png|jpg|jpeg|gif|ico)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '../images/[name].[ext]',
                        publicPath: '../images/'
                    }
                }
            ]
        },
        {
            test: /\.(otf|eot|svg|ttf|woff)\??/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '../font/[name].[ext]',
                        publicPath: '../font/'
                    }
                }
            ]
        }
    ]
}