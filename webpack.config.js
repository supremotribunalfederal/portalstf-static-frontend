const path = require('path');
const babili = require('babili-webpack-plugin');
const extractText = require('extract-text-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const htmlWebpack = require('html-webpack-plugin');

const webpack = require('webpack');

const indexHtml = new htmlWebpack({
  template: '!!ejs-compiled-loader!./src/index.html',
  chunks: ['vendor', 'bundle']
});

let plugins = [];

plugins.push(indexHtml);
plugins.push(new extractText('estilos.css')); 

plugins.push(new webpack.ProvidePlugin({
    '$': 'jquery/dist/jquery.js',
    'jQuery': 'jquery/dist/jquery.js'
}));

plugins.push(new webpack.optimize.CommonsChunkPlugin({

    name: 'vendor',
    filename: 'vendor.js'

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
        app: './src/index.js'
        //vendor: ['jquery', 'bootstrap', 'moment', 'urijs']
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
                test: /\.(jpg|jpeg|gif|png|svg|ico)$/i,
                use: 'url-loader?limit=24000&name=[name].[ext]&outputPath=assets/img/',
                include: path.resolve(__dirname, 'assets/img')
            },
            { 
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
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