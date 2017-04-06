var path = require('path');
var webpack = require('webpack');

module.exports = {
  // entry: './app.js',
  // output: { path: '/Users/myyusuf/Documents/Projects/medical_app/software/next_ceu/ceu/public/app/', filename: 'bundle.js' },
  entry: './app_test.js',
  output: { path: '/Users/myyusuf/Documents/Projects/medical_app/software/next_ceu/ceu/public/app/', filename: 'bundle_test.js' },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
};
