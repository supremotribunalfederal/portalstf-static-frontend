const path = require('path');
const config = require('./config')
const PATHS = config.PATHS;
const secoes = config.secoes;
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const chunksOrder = require('./chunks-order');

module.exports = (common) => {
  const secoesChunks = ['vendor', 'bundle'];
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
      chunks: [...secoesChunks, secao],
      chunksSortMode: chunksOrder([...secoesChunks, secao]), 
      excludeChunks: secoes.filter((i) => i !== secao)
    });
    
    common.entry[secao] = secaoEntry;
    common.module.rules.push(secaoRule);
    common.plugins.push(secaoHtml);
    common.plugins.push(secaoCss);
  });

  return common;
}
