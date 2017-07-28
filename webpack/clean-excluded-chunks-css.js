// Plugin para remover as chamadas para os css de fora do módulo
function CleanExcludedChunksCss() {
}
CleanExcludedChunksCss.prototype.apply = function(compiler) {
  const getChunkNameFromCss = (name) => {
    return name.match(new RegExp('(.+\/)(.+\).css$'))[2];
  }
  compiler.plugin('compilation', (compilation) => {
    compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback) => {
      const excluded = htmlPluginData.plugin.options.excludeChunks;
      const ordered = Object.keys(htmlPluginData.assets.chunks);

      htmlPluginData.assets.css = htmlPluginData.assets.css
        .filter((css) => {
          return excluded.indexOf(getChunkNameFromCss(css)) === -1;
        })
        .reduce((prev, css, index, arr) => {
          const chunk = getChunkNameFromCss(css);
          prev[index] = arr[ordered.indexOf(chunk)];
          return prev;
        }, new Array(excluded.length));

      callback(null, htmlPluginData);
    });
  });
}

module.exports = CleanExcludedChunksCss;
