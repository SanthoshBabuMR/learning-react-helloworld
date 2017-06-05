const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcPath = path.join(__dirname, 'app', 'src');
const buildPath = path.join(__dirname, 'app', 'build');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'app.js'),
  output: {
    path: buildPath,
    filename: 'js/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    title: 'ReactJS hello world'
  })],
  devServer: {
    contentBase: buildPath,
    compress: true,
    port: 9000
  }
}
