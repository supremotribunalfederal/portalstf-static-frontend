import style from '../../assets/scss/secoes/textos/textos.scss';
import $ from 'jquery';

import moment from 'moment';

$("#texto-informacao-util-sim").click(function() {
    $("#texto-informacao-util-agradecimento").show();
});

$("#texto-informacao-util-nao").click(function() {
    $("#texto-informacao-util-agradecimento").show();
});

//event tracker do Google Analytics

//botões de feedback
$('#texto-informacao-util-sim').on('click', function(){
	ga('send', 'event', 'Textos', 'Classificação de utilidade', 'Sim');
});

$('#texto-informacao-util-nao').on('click', function(){
	ga('send', 'event', 'Textos', 'Classificação de utilidade', 'Não');
});


$("#enviar-correcao-texto").click(function() {
    $("#form-sugerir-correcao-texto").hide();
    var textoCorrecao = $("#correcao-texto").val();

     // TODO Implementar chamada para o backend.
    console.log("Enviando correção...");
    console.log(textoCorrecao);

    $("#correcao-texto").val("");
});

var dataAtualizacao = $(".data-atualizacao").text();
var dataMoment = moment(dataAtualizacao);
$(".data-atualizacao").text(dataMoment.format("dddd, DD") + " de " + dataMoment.format("MMMM").toLowerCase() + " de " + dataMoment.format("YYYY"));