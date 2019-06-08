// 文件别名设置
const path = require('path')
const appSrc = path.resolve(__dirname, '../src')
module.exports = {
    resolve: {
        alias: {
            src: appSrc,
            utils: path.resolve(__dirname, '../src/utils'),
            pages: path.resolve(__dirname, '../src/pages'),
            '@': path.resolve(__dirname, '../src'),
            '~': path.resolve(__dirname, '../src/components'),
        },
        modules: [path.resolve(__dirname, '../node_modules')], // 强制node_modules搜索模块
        extensions: ['.jsx', '.ts', '.js', '.tsx', '.css', '.less', '.json']
    }
}