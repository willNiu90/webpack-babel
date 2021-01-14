const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.[hash:6].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, './src'),
                    path.resolve(__dirname, './node_modules/@will_niu/babel-test')
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(le|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: function () {
                            return [
                                require('autoprefixer')()
                            ]
                        }
                    }
                }, 'less-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240, //10K
                            esModule: false,
                            name: '[name]_[hash:6].[ext]',
                            outputPath: 'assests'
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: false,
                collapseWhitespace: false
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: '3000',
        compress: true,
        hot: true
    },
    devtool: 'cheap-module-eval-source-map'
}