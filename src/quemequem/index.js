import style from '../../assets/scss/secoes/quemequem/quemequem.scss';
import $ from 'jquery';
import moment from 'moment';

var dataAtualizacao = $(".data-atualizacao").text();
var dataMoment = moment(dataAtualizacao);
$(".data-atualizacao").text(dataMoment.format("dddd, DD") + " de " + dataMoment.format("MMMM").toLowerCase() + " de " + dataMoment.format("YYYY"));

$("#quemequem-informacao-util-sim").click(function() {
    $("#quemequem-informacao-util-agradecimento").show();
    $("#pergunta-informacao-util").hide();
    $("#quemequem-informacao-util-sim").hide();
    $("#quemequem-informacao-util-nao").hide();
});

$("#quemequem-informacao-util-nao").click(function() {
    $("#quemequem-informacao-util-agradecimento").show();
    $("#pergunta-informacao-util").hide();
    $("#quemequem-informacao-util-sim").hide();
    $("#quemequem-informacao-util-nao").hide();
});

//event tracker do Google Analytics

//botões de feedback
$('#quemequem-informacao-util-sim').on('click', function(){
	ga('send', 'event', 'Quem é quem', 'Classificação de utilidade', 'Sim');
});

$('#quemequem-informacao-util-nao').on('click', function(){
	ga('send', 'event', 'Quem é quem', 'Classificação de utilidade', 'Não');
});
