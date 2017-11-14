import style from '../../assets/scss/secoes/textos/textos.scss';
import $ from 'jquery';
import moment from 'moment';

moment.locale("pt-BR");
moment().format('LT');

$("#texto-informacao-util-sim").click(function() {
    $("#texto-informacao-util-agradecimento").show();
    $("#pergunta-informacao-util").hide();
    $("#texto-informacao-util-sim").hide();
    $("#texto-informacao-util-nao").hide();
});

$("#texto-informacao-util-nao").click(function() {
    $("#texto-informacao-util-agradecimento").show();
    $("#pergunta-informacao-util").hide();
    $("#texto-informacao-util-sim").hide();
    $("#texto-informacao-util-nao").hide();
});

//event tracker do Google Analytics

//botões de feedback
$('#texto-informacao-util-sim').on('click', function(){
	ga('send', 'event', 'Textos', 'Classificação de utilidade', 'Sim');
});

$('#texto-informacao-util-nao').on('click', function(){
	ga('send', 'event', 'Textos', 'Classificação de utilidade', 'Não');
});

var dataAtualizacao = $(".data-atualizacao").text();
var dataMoment = moment(dataAtualizacao);
$(".data-atualizacao").text(dataMoment.format("dddd, DD") + " de " + dataMoment.format("MMMM").toLowerCase() + " de " + dataMoment.format("YYYY"));