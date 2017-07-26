import style from '../../assets/scss/secoes/jurisprudencia/jurisprudencia.scss';


//GOOGLE ANALYTICS

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


//informativo STF
$('#informativo-semanal').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Informativo STF', 'Informativo semanal');
});
$('#informativo-temas').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Informativo STF', 'Informativo por temas');
});
$('#informativo-pesquisa').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Informativo STF', 'Pesquisa de Informativo');
});

//legislacao anotada
$('#leg-anotada-constituicao').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Legislação Anotada', 'A constituicao e o Supremo');
});
$('#leg-anotada-infraconst').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Legislação Anotada', 'Leis infraconstitucionais');
});