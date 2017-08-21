const path = require('path');
const config = require('./config')
const PATHS = config.PATHS;
const secoes = config.secoes;
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const chunksOrder = require('./chunks-order');

module.exports = (common) => {
  secoes.forEach((secao) => {
    const secaoEntry = [
      path.join(PATHS.src, `/${secao}/index.js`),
      path.join(PATHS.scss, `/secoes/${secao}/${secao}.scss`)
    ];
    
    const secaoCss = new ExtractTextPlugin(`assets/styles/${secao}/${secao}.css`);

    const secaoRule = {
      test: /\.scss/,
      use: secaoCss.extract({
        use: ['css-loader?url=false', 'sass-loader'],
        fallback: 'style-loader'
      }),
      include: path.join(PATHS.scss, `/secoes/${secao}`)
    }
    
    const secaoHtml = new HtmlPlugin({
      filename: `${secao}/index.html`,
      template: `!!ejs-compiled-loader!${path.join(PATHS.src, `/${secao}/index.html`)}`,
      chunks: config.secoesChunks[secao].include,
      chunksSortMode: chunksOrder(config.secoesChunks[secao].include), 
      excludeChunks: config.secoesChunks[secao].exclude.filter((i) => config.secoesChunks[secao].include.indexOf(i) === -1),
      extraCss: config.secoesChunks[secao].extraCss
    });
    
    common.entry[secao] = secaoEntry;
    common.module.rules.push(secaoRule);
    common.plugins.push(secaoHtml);
    common.plugins.push(secaoCss);
  });

  return common;
}
