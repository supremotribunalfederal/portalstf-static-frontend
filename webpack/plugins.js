const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');
const extractText = require('extract-text-webpack-plugin');

module.exports = function() {

    let plugins = [];
    plugins.push(new htmlWebpack({
        template: '!!ejs-compiled-loader!./src/index.html',
        chunks: ['vendor', 'bundle'],
        hash: true
    }));

    plugins.push(new extractText('assets/styles/[name].css'));

    plugins.push(new webpack.ProvidePlugin({
        '$': 'jquery/dist/jquery.js',
        'jQuery': 'jquery/dist/jquery.js',
        'Q': 'q/q.js'
    }));

    plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'scripts/vendor.js'
    }));

    return plugins;

};
