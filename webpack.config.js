const path = require('path');
const babili = require('babili-webpack-plugin');
const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');
const extractText = require('extract-text-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');

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

let QLIK = {
    URL: JSON.stringify('analiticod.stf.jus.br'),
    ACERVO: {
        ID: JSON.stringify('2f46c444-d61d-48f9-b6b3-124773a3c764')
    },
    REPERCUSSAOGERAL: {
        ID: JSON.stringify('b88460cb-8745-4fbc-973b-ddfee50c02aa')
    }
};

if (process.env.NODE_ENV == 'production') {
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

    QLIK = {
        URL: JSON.stringify('transparencia.stf.jus.br'),
        ACERVO: {
            ID: JSON.stringify('9e787043-f90c-4781-a48b-c1351ba17379')
        },
        REPERCUSSAOGERAL: {
            ID: JSON.stringify('b88460cb-8745-4fbc-973b-ddfee50c02aa')
        }
    };
}

plugins.push(new webpack.DefinePlugin({
    'QLIK': QLIK
}));

let config = {
    entry: {
        bundle: ['./src/index.js', './assets/scss/main.scss'],
        vendor: ['jquery', 'bootstrap', 'moment', 'urijs', 'q', './assets/qlik/qlik-styles.css', './assets/qlik/qlik.css']
    },

    output: {
        filename: 'scripts/[name].js',
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
                test: path.join(__dirname, 'src', 'qlik', 'qlik-sense-facade.js'),
                use: [{
                    loader:'expose-loader',
                    options: 'qlikSense'
                }]
            },
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
                        {loader: "resolve-url-loader"},
                        {loader: "sass-loader?sourceMap"}
                    ], 
                    fallback: 'style-loader'
                }),
                exclude: new RegExp('node_modules')
            },
            {
                test: /\.css$/,
                use: extractText.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                }),
                exclude: path.join(__dirname, 'assets', 'qlik', 'qlik-styles.css')
            },
            {
                test: /qlik-styles\.css$/,
                use: extractText.extract({
                    use: [{
                        loader:'css-loader',
                        options: {
                            url: false
                        }
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|ico)$/i,
                use: 'url-loader?limit=24000&name=[name].[ext]&outputPath=assets/img/&publicPath=../../',
                include: path.resolve(__dirname, 'assets/img')
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|ico)$/i,
                use: 'url-loader?limit=100000',
                include: path.resolve(__dirname, 'node_modules')
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

const secoes = [
    'noticias',
    'textos',
    'textocombox',
    'repercussaogeral',
    'jurisprudencia',
    'transparencia',
    'listagem',
    'ostf',
    'quemequem',
    'votacoes',
    'pesquisaavancada',
    'erro-404',
    'listarprocessos',
    'listarporparte',
    'listarpartes',
    'processo',
    'estatistica',
    'documento'
];

secoes.map(secao => {
    let configuracaoDaSecao = {
        nome: secao,
        entry: [`./src/${secao}/index.js`, `./assets/scss/secoes/${secao}/${secao}.scss`],
        plugin: new htmlWebpack({
            template: `!!ejs-compiled-loader!./src/${secao}/index.html`,
            filename: `${secao}/index.html`,
            chunks: ['vendor', 'bundle', secao],
            hash: true
        })
    };

    return configuracaoDaSecao;
}).forEach(configuracaoDaSecao => {
    config.plugins.push(configuracaoDaSecao.plugin);
    config.entry[configuracaoDaSecao.nome] = configuracaoDaSecao.entry;
});

module.exports = config;