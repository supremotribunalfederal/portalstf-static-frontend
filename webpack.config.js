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
  img: path.join(__dirname, '/assets/img'),
  ghPages: path.join(__dirname, '/showroom-build')
};

const VENDORS = ['bootstrap-loader'];

const customCss = new ExtractTextPlugin("assets/styles/[name].css");

const publicPath = process.env.GH_PAGES ? process.env.GH_PAGES.trim() : '/';

var config = {};
const common = {
  entry: {
    bundle: [
      path.join(PATHS.src, '/index.js'),
      path.join(PATHS.scss, '/main.scss')
    ],
    vendor: VENDORS,
    noticias: [
      path.join(PATHS.src, '/noticias/index.js'),
      path.join(PATHS.scss, '/secoes/noticias/noticias.scss')
    ],
    repercussaogeral: [
      path.join(PATHS.src, '/repercussaogeral/index.js'),
      path.join(PATHS.scss, '/secoes/repercussaogeral/repercussaogeral.scss')
    ],
    transparencia: [
      path.join(PATHS.src, '/transparencia/index.js'),
      path.join(PATHS.scss, '/secoes/transparencia/transparencia.scss')
    ],
    jurisprudencia: [
      path.join(PATHS.src, '/jurisprudencia/index.js'),
      path.join(PATHS.scss, '/secoes/jurisprudencia/jurisprudencia.scss')
    ]
  },

  output: {
    path: process.env.GH_PAGES ? PATHS.ghPages : PATHS.dist,
    filename: 'scripts/[name].[chunkhash].js',
    publicPath
  },

  resolve: {
    extensions: ['.js', '.html'],
    alias: {
      assets: PATHS.assets
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
        use: customCss.extract({
          use: 'css-loader!sass-loader?sourceMaps'
        }),
        exclude: /node_modules|noticias|repercussaogeral|transparencia|jurisprudencia/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?url=false', 'sass-loader'],
        include: path.join(PATHS.scss, '/secoes/noticias')
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(PATHS.scss, '/secoes/repercussaogeral')
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(PATHS.scss, '/secoes/transparencia')
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(PATHS.scss, '/secoes/jurisprudencia')
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
    new HtmlPlugin({
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/index.html')}`,
      chunks: ['bundle', 'vendor', 'manifest']
    }),
    new HtmlPlugin({
      filename: 'qlik.html',
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/qlik.html')}`,
      chunks: ['bundle', 'vendor', 'manifest']
    }),
    new HtmlPlugin({
      filename: 'noticias/index.html',
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/noticias/index.html')}`,
      chunks: ['noticias', 'bundle', 'vendor', 'manifest']
    }),
    new HtmlPlugin({
      filename: 'textos/index.html',
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/textos/index.html')}`,
      chunks: ['noticias', 'bundle', 'vendor', 'manifest']
    }),
    new HtmlPlugin({
      filename: 'repercussaogeral/index.html',
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/repercussaogeral/index.html')}`,
      chunks: ['repercussaogeral', 'bundle', 'vendor', 'manifest']
    }),
    new HtmlPlugin({
      filename: 'transparencia/index.html',
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/transparencia/index.html')}`,
      chunks: ['transparencia', 'bundle', 'vendor', 'manifest']
    }),
    new HtmlPlugin({
      filename: 'jurisprudencia/index.html',
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/jurisprudencia/index.html')}`,
      chunks: ['jurisprudencia', 'bundle', 'vendor', 'manifest']
    }),
    // Compilação dos includes para facilitar a inserção no ASP
    new HtmlPlugin({
      filename: 'includes/footer.html',
      inject: false,
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/includes/footer.html')}`
    }),    
    new HtmlPlugin({
      filename: 'includes/header.html',
      inject: false,
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/includes/header.html')}`
    }),
    new HtmlPlugin({
      filename: 'includes/mapa-do-site.html',
      inject: false,
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/includes/mapa-do-site.html')}`
    }),
    new HtmlPlugin({
      filename: 'includes/paginacao.html',
      inject: false,
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/includes/paginacao.html')}`
    }),
    new HtmlPlugin({
      filename: 'includes/pesquisa.html',
      inject: false,
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/includes/pesquisa.html')}`
    }),
    new HtmlPlugin({
      filename: 'includes/pesquisa-transparencia.html',
      inject: false,
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/includes/pesquisa-transparencia.html')}`
    }),
    new HtmlPlugin({
      filename: 'includes/sob-medida.html',
      inject: false,
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/includes/sob-medida.html')}`
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