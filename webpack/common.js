const webpack = require('webpack');
const path = require('path');
const config = require('./config')
const PATHS = config.PATHS;
const secoes = config.secoes;
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanExcludedChunksCss = require('./clean-excluded-chunks-css');
const chunksOrder = require('./chunks-order');


const publicPath = process.env.GH_PAGES ? process.env.GH_PAGES.trim() : '/';
const VENDORS = ['bootstrap-loader', 'moment', 'urijs', 'jquery-ui/ui/widgets/datepicker', 'jquery-validation', 'requirejs'];

const homeHtml = new HtmlPlugin({
  template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/index.html')}`,
  chunks: ['vendor', 'bundle'],
  chunksSortMode: chunksOrder(['vendor', 'bundle']),
  excludeChunks: [...secoes, 'datepicker']
});
const homeCss = new ExtractTextPlugin("assets/styles/[name].css");
const datepickerCss = new ExtractTextPlugin("assets/styles/datepicker.css");

module.exports = {
  entry: {
    bundle: [
      path.join(PATHS.src, '/index.js'),

      path.join(PATHS.scss, '/main.scss')
    ],
    vendor: VENDORS
  },
  output: {
    path: process.env.GH_PAGES ? PATHS.ghPages : PATHS.dist,
    filename: 'scripts/[name]-[hash].js',
    publicPath
  },
  resolve: {
    extensions: ['.js', '.html'],
    alias: {
      assets: PATHS.assets,
      'jquery.maskedinput': path.join(PATHS.node, 'jquery.maskedinput/src/jquery.maskedinput.js')
    }
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
        use: homeCss.extract({
          use: 'css-loader!sass-loader'
        }),
        exclude: new RegExp(`node_modules|${secoes.join('|')}`)
      },
      {
        test: /\.css$/,
        use: datepickerCss.extract({
          use: 'css-loader'
        }),
        include: path.join(PATHS.node, '/jquery-ui/themes/base')
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)$/i,
        use: `url-loader?limit=24000&name=[name].[ext]&publicPath=${publicPath}&outputPath=assets/img/`,
        include: path.join(PATHS.node, '/jquery-ui/themes/base')
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)$/i,
        use: `url-loader?limit=24000&name=[name].[ext]&publicPath=${publicPath}&outputPath=assets/img/`,
        include: PATHS.img
      },
      {
        test:/\.(woff2?|svg)$/,
        use: `url-loader?limit=10000&name=[name].[ext]&publicPath=${publicPath}&outputPath=assets/fonts/`,
        exclude: PATHS.img
      },
      {
        test: /\.(ttf|eot)$/,
        use: `file-loader?name=[name].[ext]&publicPath=${publicPath}&outputPath=assets/fonts/`
      },
      {
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        use: 'imports-loader?jQuery=jquery'
      }
    ]
  },
  plugins: [
    homeHtml,
    homeCss,
    datepickerCss,
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: 2
    }),
    new CleanExcludedChunksCss()
  ]
};
