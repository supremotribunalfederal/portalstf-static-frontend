import style from '../../assets/scss/secoes/jurisprudencia/jurisprudencia.scss';



//jurisprudencia internacional
$('#internacional-cjcplp').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Internacional', 'CJCPLP');
});
$('#internacional-codices').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Internacional', 'Codices');
});
$('#internacional-glin').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Internacional', 'Glin');
});
$('#internacional-mercosul').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Internacional', 'Mercosul');
})