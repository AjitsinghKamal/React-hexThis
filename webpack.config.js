var path = require('path');
var webpack = require('webpack');
/*
var htmlPlug=require('html-webpack-plugin');
var htmlPlugConfig=new htmlPlug({
  template: __dirname+'/app/index.html',
  filename:'index.html',
  inject:'body'
});
*/
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
//  plugins: [htmlPlugConfig]
};
