import style from '../../assets/scss/secoes/repercussaogeral/repercussaogeral.scss';



//GOOGLE ANALYTICS

$('#repgeral-quantidade-temas-categoria').on('click', function(){
	ga('send', 'event', 'Repercussão Geral', 'Quantidade de Temas', 'Por Categoria');
});
$('#repgeral-quantidade-sobrestados-data').on('click', function(){
	ga('send', 'event', 'Repercussão Geral', 'Quantidade de Sobrestados', 'Por Data');
});