import style from '../../assets/scss/secoes/transparencia/transparencia.scss';

import $ from 'jquery';
//event tracker do Google Analytics

//include de pesquisa
$('#btnPesquisarTransparencia').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Pesquisa', 'Pesquisa topo');
});

//blocos de estatísticas
$('#estatisticasTransparencia').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Estatisticas', 'Ver mais estatisticas');
});
$('#consulteRemuneracoes').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Estatisticas', 'Consulte as remunerações');
});
$('#baixeEditais').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Estatisticas', 'Baixe Editais e Acompanhe');
});
$('#pesquiseCompras').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Estatisticas', 'Pesquise as Compras');
});
$('#pesquiseDespesas').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Estatisticas', 'Pesquise as Despesas');
});
$('#vejaContratos').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Estatisticas', 'Veja os Contratos');
});
