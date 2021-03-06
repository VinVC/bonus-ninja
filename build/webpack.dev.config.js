const path = require('path')

const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  output: {
    // path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'bonus ninja'
    })
  ],
  devtool: 'cheap-source-map',
  devServer: {
    // contentBase: '',
    hot: true
  }
})
