const merge = require('merge');
const common = require('./webpack/common');
const compileSecoes = require('./webpack/secoes');
const includes = require('./webpack/includes');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const compiled = compileSecoes(common);

let config = {};
if (process.env.NODE_ENV === 'production') {
  config = merge(compiled, {
    plugins: compiled.plugins.concat(includes)
  });
} else {
  config = merge(compiled, {
      devServer: {
        port: 3000,
        publicPath: '/'
      }
  });
}

module.exports = config;
