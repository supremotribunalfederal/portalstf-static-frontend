const path = require('path');
const config = require('./config');
const PATHS = config.PATHS;
const includes = config.includes;
const HtmlPlugin = require('html-webpack-plugin');

const htmls = includes.map((include) => {
  return new HtmlPlugin({
    filename: `includes/${include}.html`,
    inject: false,
    template: `!!ejs-compiled-loader!${path.join(PATHS.src, `/includes/${include}.html`)}`
  });
});

module.exports = htmls
