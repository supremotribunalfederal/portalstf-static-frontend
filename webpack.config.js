const webpack = require('webpack');
const path = require('path');
const merge = require('merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  dist: path.join(__dirname, '/dist'),
  src: path.join(__dirname, '/src'),
  assets: path.join(__dirname, '/assets')
};

const VENDORS = ['jquery'];

var config = {};
const common = {
  entry: {
    bundle: path.join(PATHS.src, '/index.js'),
    vendor: VENDORS
  },

  output: {
    path: PATHS.dist,
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        include: PATHS.src
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.src, '/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config = merge(common, {

  });
} else {
  config = merge(common, {
      devServer: {
        port: 3000,
        publicPath: '/'
      }
  });
}

module.exports = config;