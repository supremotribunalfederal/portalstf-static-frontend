const webpack = require('webpack');
const path = require('path');
const merge = require('merge');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  dist: path.join(__dirname, '/dist'),
  src: path.join(__dirname, '/src'),
  assets: path.join(__dirname, '/assets'),
  scss: path.join(__dirname, '/assets/scss'),
  img: path.join(__dirname, '/assets/img')
};

const VENDORS = ['bootstrap-loader'];

const customCss = new ExtractTextPlugin("styles/[name].css");

var config = {};
const common = {
  entry: {
    bundle: [
      path.join(PATHS.src, '/index.js'),
      path.join(PATHS.scss, '/main.scss')
    ],
    vendor: VENDORS
  },

  output: {
    path: PATHS.dist,
    filename: 'scripts/[name].[chunkhash].js',
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
      },
      {
        test: /\.scss$/,
        use: customCss.extract({
          use: 'css-loader!sass-loader'
        }),
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)$/i,
        use: 'url-loader?limit=24000&name=[name].[ext]&publicPath=/&outputPath=assets/img/',
        include: PATHS.img
      },
      {
        test:/\.(woff2?|svg)$/,
        use: 'url-loader?limit=10000&name=[name].[ext]&publicPath=/&outputPath=assets/fonts/'
      },
      {
        test: /\.(ttf|eot)$/,
        use: 'file-loader?name=[name].[ext]&publicPath=/&outputPath=assets/fonts/'
      },
      {
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        use: 'imports-loader?jQuery=jquery'
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: path.join(PATHS.src, '/index.html'),
      chunks: ['bundle', 'vendor', 'manifest']
    }),
    new HtmlPlugin({
      filename: 'qlik.html',
      template: path.join(PATHS.src, '/qlik.html'),
      chunks: ['bundle', 'vendor', 'manifest']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),
    customCss
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