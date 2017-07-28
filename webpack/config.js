const path = require('path');

const PATHS = {
  dist: path.join(__dirname, '../dist'),
  src: path.join(__dirname, '../src'),
  assets: path.join(__dirname, '../assets'),
  scss: path.join(__dirname, '../assets/scss'),
  img: path.join(__dirname, '../assets/img'),
  ghPages: path.join(__dirname, '../showroom-build')
};

const secoes = [
  'noticias',
  'textos',
  'repercussaogeral',
  'jurisprudencia',
  'transparencia'
];

const includes = [
  'header',
  'sob-medida',
  'mapa-do-site',
  'footer',
  'paginacao',
  'pesquisa',
  'pesquisa-transparencia',
  'pesquisa-jurisprudencia',
  'pesquisa-repgeral'
]

module.exports = {
  PATHS,
  secoes,
  includes
};
