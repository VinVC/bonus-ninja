const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
// 创建多个实例
const extractCSS = new ExtractTextWebpackPlugin(
  'assets/css/[name].[hash:8].css'
)
module.exports = {
  entry: {
    // main: ['core-js', '@/index.js']
    main: '@/index.js'
    // corejs: 'core-js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
        // use: ['babel-loader']
        // include:[]
        // include: [
        //   path.resolve(__dirname, '../src'),
        //   path.resolve(__dirname, '../node_modules/@babel/runtime')
        // ]
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: extractCSS.extract({
          use: ['css-loader', 'postcss-loader'],
          fallback: 'style-loader',
          publicPath: '../../'
        })
      }
    ]
  },
  plugins: [extractCSS],
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src')
    }
  }
}
