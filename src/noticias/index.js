import style from '../../assets/scss/secoes/noticias/noticias.scss';
import $ from 'jquery';
import moment from 'moment';

$("#noticia-informacao-util-sim").click(function() {
    $("#noticia-informacao-util-agradecimento").show();
    $("#pergunta-informacao-util").hide();
    $("#noticia-informacao-util-sim").hide();
    $("#noticia-informacao-util-nao").hide();
});

$("#noticia-informacao-util-nao").click(function() {
    $("#noticia-informacao-util-agradecimento").show();
    $("#pergunta-informacao-util").hide();
    $("#noticia-informacao-util-sim").hide();
    $("#noticia-informacao-util-nao").hide();
});

var horaAtualizacao = $(".hora-atualizacao").text();
$(".intervalo-atualizacao").text(moment(horaAtualizacao, "DD/MM/YYYY hh:mm").fromNow());

//event tracker do Google Analytics

//botões de feedback
$('#noticia-informacao-util-sim').on('click', function(){
	ga('send', 'event', 'Notícia', 'Classificação de utilidade', 'Sim');
});

$('#noticia-informacao-util-nao').on('click', function(){
	ga('send', 'event', 'Notícia', 'Classificação de utilidade', 'Não');
});

