import style from '../../assets/scss/secoes/noticias/noticias.scss';
import $ from 'jquery';
import moment from 'moment';

moment.locale("pt-BR");
moment().format('LT');

var horaAtualizacao = $(".hora-atualizacao").text();
var periodo = moment(horaAtualizacao, "DD/MM/YYYY hh:mm").fromNow()
$(".intervalo-atualizacao").text(periodo.replace('atrás',''));

//event tracker do Google Analytics

//botões de feedback
$('#noticia-informacao-util-sim').on('click', function(){
	ga('send', 'event', 'Notícia', 'Classificação de utilidade', 'Sim');
});

$('#noticia-informacao-util-nao').on('click', function(){
	ga('send', 'event', 'Notícia', 'Classificação de utilidade', 'Não');
});
