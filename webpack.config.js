var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var CODE = __dirname;
var React = require('react');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader'
]

module.exports = {

  devtool: 'source-map',

  entry: './app/main.js',
  output: {
    path: 'build/js',
    filename: 'app.js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { 
        test: /\.(js|jsx)$/, 
        loader: 'babel-loader',
        exclude: [nodeModulesPath],
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('../styles/styles.css', {
      allChunks: true
    })
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.sass','.scss'],
    root: [path.join(__dirname, './sass')]
  }

};
