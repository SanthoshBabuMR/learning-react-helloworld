var path = require('path'),
    webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: __dirname + "/dist",
    port: 3030
  },
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /(\.js$)|(\.jsx$)/,
      loaders: ['babel', 'babel-loader']
    }]
  }
};
