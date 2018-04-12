const path = require('path');
const babili = require('babili-webpack-plugin');
const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');
const extractText = require('extract-text-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');

const indexHtml = new htmlWebpack({
    template: '!!ejs-compiled-loader!./src/index.html',
    chunks: ['vendor', 'bundle'],
    hash: true
});

let plugins = [];
plugins.push(indexHtml);
plugins.push(new extractText('assets/styles/[name].css')); 

plugins.push(new webpack.ProvidePlugin({
    '$': 'jquery/dist/jquery.js',
    'jQuery': 'jquery/dist/jquery.js'
}));

plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'scripts/vendor.js'
}));

let SERVICE_URL = JSON.stringify('http://localhost:3000');
if (process.env.NODE_ENV == 'production') {
    SERVICE_URL = JSON.stringify('http://endereco-da-aplicacao');
    
    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

    plugins.push(new babili());
    
    plugins.push(new optimizeCss({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            discardComments: {
                removeAll: true
            }
        },
        canPrint: true
    }));
}

plugins.push(new webpack.DefinePlugin({
    SERVICE_URL: SERVICE_URL
}));

module.exports = {
    entry: {
        bundle: ['./src/index.js', './assets/scss/main.scss'],
        vendor: ['jquery', 'bootstrap', 'moment', 'urijs']
    },

    output: {
        filename: 'scripts/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js', '.html'],
        alias: {
            assets: path.join(__dirname, 'assets')
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: extractText.extract({
                    use: [
                        {loader: "css-loader"},
                        {loader: "sass-loader"}
                    ], 
                    fallback: 'style-loader'
                }),
                exclude: new RegExp('node_modules|secoes}')
            },
            {
                test: /\.css$/,
                use: extractText.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|ico)$/i,
                use: 'url-loader?limit=24000&name=[name].[ext]&outputPath=assets/img/&publicPath=../../',
                include: path.resolve(__dirname, 'assets/img')
            },
            { 
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&publicPath=../../'
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader'
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
            }  
        ]
    },

    plugins: plugins
};