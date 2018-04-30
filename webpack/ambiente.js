const webpack = require('webpack');
const babili = require('babili-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');

const defineConstantes = function(plugins, qlik) {
    plugins.push(new webpack.DefinePlugin({
        'QLIK': qlik
    }));
};

module.exports = {
    
    configuraDesenvolvimento: function(plugins) {
        defineConstantes(plugins, {
            URL: JSON.stringify('analiticod.stf.jus.br'),
            ACERVO: {
                ID: JSON.stringify('2f46c444-d61d-48f9-b6b3-124773a3c764')
            },
            REPERCUSSAOGERAL: {
                ID: JSON.stringify('c1de5fc6-2619-4161-a007-0d078fdc1d82'),
                TABELA_SITUACAO_RG: JSON.stringify('EbEjsXW'),
                TABELA_SITUACAO_MERITO: JSON.stringify('BUbLbb'),
                TABELA_MERITOS_JULGADOS_ANO: JSON.stringify('HmJAy')
            }
        });
    },

    configuraProducao: function(plugins) {
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

        defineConstantes(plugins, {
            URL: JSON.stringify('transparencia.stf.jus.br'),
            ACERVO: {
                ID: JSON.stringify('9e787043-f90c-4781-a48b-c1351ba17379')
            },
            REPERCUSSAOGERAL: {
                ID: JSON.stringify('b88460cb-8745-4fbc-973b-ddfee50c02aa'),
                TABELA_SITUACAO_RG: JSON.stringify('NQbAxS'),
                TABELA_SITUACAO_MERITO: JSON.stringify('b60a6338-5e54-4c85-97bf-f8a6b0424eca'),
                TABELA_MERITOS_JULGADOS_ANO: JSON.stringify('arPD')
            }
        });
    }

};