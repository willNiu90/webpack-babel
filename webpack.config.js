const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './src'),
        filename: 'bound.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                include: [
                    path.resolve(__dirname, './src'),
                    path.resolve(__dirname, './node_modules/@will_niu/babel-test')
                ],
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    mode: 'development'
}