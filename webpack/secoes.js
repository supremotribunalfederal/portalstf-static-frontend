const htmlWebpack = require('html-webpack-plugin');

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
    'documento',
    'centraldocidadao',
    'pesquisajurisprudencia',
    'sobmedidacidadaos',
    'sobmedidaadvogados',
    'sobmedidaestudantes',
    'sobmedidaorgaos'
];

const entries = secoes.map(secao => {
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
});

module.exports = function(configuracaoWebpack) {

    entries.forEach(configuracaoDaSecao => {
        configuracaoWebpack.plugins.push(configuracaoDaSecao.plugin);
        configuracaoWebpack.entry[configuracaoDaSecao.nome] = configuracaoDaSecao.entry;
    });

};