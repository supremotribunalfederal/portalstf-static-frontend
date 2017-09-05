import style from '../../assets/scss/secoes/votacoes/votacoes.scss';
import $ from 'jquery';

import moment from 'moment';

$("#sugerir-correcao-texto").click(function() {
    $("#form-sugerir-correcao-texto").show();
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