const webpack = require('webpack');
const path = require('path');
const merge = require('merge');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PATHS = {
  dist: path.join(__dirname, '/dist'),
  src: path.join(__dirname, '/src'),
  assets: path.join(__dirname, '/assets'),
  scss: path.join(__dirname, '/assets/scss'),
  img: path.join(__dirname, '/assets/img'),
  ghPages: path.join(__dirname, '/showroom-build')
};

const VENDORS = ['bootstrap-loader', 'moment'];

const customCss = new ExtractTextPlugin("assets/styles/[name].css");
const noticiasCss = new ExtractTextPlugin("assets/styles/noticias/noticias.css");
const repercussaogeralCss = new ExtractTextPlugin("assets/styles/repercussaogeral/repercussaogeral.css");
const transparenciaCss = new ExtractTextPlugin("assets/styles/transparencia/transparencia.css");
const jurisprudenciaCss = new ExtractTextPlugin("assets/styles/jurisprudencia/jurisprudencia.css");
const textosCss = new ExtractTextPlugin("assets/styles/textos/textos.css");

const publicPath = process.env.GH_PAGES ? process.env.GH_PAGES.trim() : '/';

const chunksOrder = (order) => {
  return (a, b) => {
    return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
  }
}

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
    ],
    textos: [
      path.join(PATHS.src, '/textos/index.js'),
      path.join(PATHS.scss, '/secoes/textos/textos.scss')
    ]
  },

  output: {
    path: process.env.GH_PAGES ? PATHS.ghPages : PATHS.dist,
    filename: 'scripts/[name].js',
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
        exclude: /node_modules|noticias|repercussaogeral|transparencia|jurisprudencia|textos/
      },
      {
        test: /\.scss$/,
        use: noticiasCss.extract({
          use: 'css-loader?url=false!sass-loader?sourceMaps',
          fallback: 'style-loader'
        }),
        include: path.join(PATHS.scss, '/secoes/noticias')
      },
      {
        test: /\.scss$/,
        use: repercussaogeralCss.extract({
          use: 'css-loader?url=false!sass-loader?sourceMaps',
          fallback: 'style-loader'
        }),
        include: path.join(PATHS.scss, '/secoes/repercussaogeral')
      },
      {
        test: /\.scss$/,
        use: transparenciaCss.extract({
          use: 'css-loader?url=false!sass-loader?sourceMaps',
          fallback: 'style-loader'
        }),
        include: path.join(PATHS.scss, '/secoes/transparencia')
      },
      {
        test: /\.scss$/,
        use: jurisprudenciaCss.extract({
          use: 'css-loader?url=false!sass-loader?sourceMaps',
          fallback: 'style-loader'
        }),
        include: path.join(PATHS.scss, '/secoes/jurisprudencia')
      },
      {
        test: /\.scss$/,
        use: textosCss.extract({
          use: 'css-loader?url=false!sass-loader?sourceMaps',
          fallback: 'style-loader'
        }),
        include: path.join(PATHS.scss, '/secoes/textos')
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
      chunks: ['vendor', 'bundle'],
      chunksSortMode: chunksOrder(['vendor', 'bundle']),
      excludeChunks: ['jurisprudencia']
    }),
    new HtmlPlugin({
      filename: 'qlik.html',
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/qlik.html')}`,
      chunks: ['vendor', 'bundle'],
      chunksSortMode: chunksOrder(['vendor', 'bundle'])
    }),
    new HtmlPlugin({
      filename: 'noticias/index.html',
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/noticias/index.html')}`,
      chunks: ['vendor', 'bundle', 'noticias'],
      chunksSortMode: chunksOrder(['vendor', 'bundle', 'noticias'])
    }),
    new HtmlPlugin({
      filename: 'textos/index.html',
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/textos/index.html')}`,
      chunks: ['vendor', 'bundle', 'textos'],
      chunksSortMode: chunksOrder(['vendor', 'bundle', 'textos'])
    }),
    new HtmlPlugin({
      filename: 'repercussaogeral/index.html',
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/repercussaogeral/index.html')}`,
      chunks: ['vendor', 'bundle', 'repercussaogeral'],
      chunksSortMode: chunksOrder(['vendor', 'bundle', 'repercussaogeral'])
    }),
    new HtmlPlugin({
      filename: 'transparencia/index.html',
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/transparencia/index.html')}`,
      chunks: ['vendor', 'bundle', 'transparencia'],
      chunksSortMode: chunksOrder(['vendor', 'bundle', 'transparencia'])
    }),
    new HtmlPlugin({
      filename: 'jurisprudencia/index.html',
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/jurisprudencia/index.html')}`,
      chunks: ['vendor', 'bundle', 'jurisprudencia'],
      chunksSortMode: chunksOrder(['vendor', 'bundle', 'jurisprudencia'])
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
      filename: 'includes/pesquisa-jurisprudencia.html',
      inject: false,
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/includes/pesquisa-jurisprudencia.html')}`
    }),
    new HtmlPlugin({
      filename: 'includes/pesquisa-reogeral.html',
      inject: false,
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/includes/pesquisa-repgeral.html')}`
    }),
    new HtmlPlugin({
      filename: 'includes/sob-medida.html',
      inject: false,
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, '/includes/sob-medida.html')}`
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: 2
    }),
    customCss,
    noticiasCss,
    repercussaogeralCss,
    transparenciaCss,
    jurisprudenciaCss,
    textosCss
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