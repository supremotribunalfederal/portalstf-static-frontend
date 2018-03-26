const path = require('path');

const PATHS = {
  node: path.join(__dirname, '../node_modules'),
  dist: path.join(__dirname, '../dist'),
  src: path.join(__dirname, '../src'),
  assets: path.join(__dirname, '../assets'),
  scss: path.join(__dirname, '../assets/scss'),
  img: path.join(__dirname, '../assets/img'),
  ghPages: path.join(__dirname, '../showroom-build')
};

const mainChunks = ['vendor', 'bundle'];
const externals =['datepicker'];


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
  'pesquisajurisprudencia',
  'erro-404',
  'listarprocessos',
  'listarporparte',
  'listarpartes',
  'processo',
  'estatistica',
  'documento',
  'sobmedidaadvogados',
  'sobmedidacidadaos',
  'sobmedidaorgaos',
  'sobmedidaestudantes'
];

const secoesChunks = secoes.reduce((prev, cur) => {
  prev[cur] = {
    include: [...mainChunks, cur],
    exclude: [...secoes.filter((i) => i !== cur), ...externals],
    extraCss: []
  };
  return prev;
}, {});
secoesChunks.listagem.include.push('datepicker');
secoesChunks.listagem.extraCss.push('datepicker');

const includes = [
  'header',
  'sob-medida',
  'mapa-do-site',
  'footer',
  'paginacao',
  'pesquisa',
  'pesquisa-lista',
  'pesquisa-acordaos',
  'pesquisa-repercussao-geral',
  'pesquisa-sumulas',
  'pesquisa-sumulas-vinculantes',
  'processo-informacoes',
  'processo-partes',
  'processo-andamentos',
  'processo-deslocamento',
  'processo-peticoes',
  'processo-recursos',
  'card-acessar-portal-transparencia',
  'card-agenda-dos-ministros',
  'card-audiencias-publicas',
  'card-banners-qlik',
  'card-cadastro-newsletter',
  'card-canais-atendimento',
  'card-composicao',
  'card-constituicao',
  'card-duvidas',
  'card-estatisticasProcessuais',
  'card-forum',
  'card-glossario',
  'card-guardiao',
  'card-informativo',
  'card-jurisprudencia-do-stf',
  'card-jurisprudencia-lateral',
  'card-legislacao-anotada',
  'card-noticias',
  'card-numerosSTF',
  'card-pautas-julgamento',
  'card-radio-justica',
  'card-repercussao-geral',
  'card-repercussao-lateral',
  'card-supremo-em-acao',
  'card-transparencia',
  'card-tv-justica'
]

module.exports = {
  PATHS,
  secoes,
  mainChunks,
  secoesChunks,
  includes
};
