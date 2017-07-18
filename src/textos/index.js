import style from '../../assets/scss/secoes/textos/textos.scss';

import $ from 'jquery';

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