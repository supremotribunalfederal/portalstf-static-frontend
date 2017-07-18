import style from '../../assets/scss/secoes/noticias/noticias.scss';

import $ from 'jquery';

$("#sugerir-correcao-noticia").click(function() {
    $("#form-sugerir-correcao-noticia").show();
});

$("#enviar-correcao-noticia").click(function() {
    $("#form-sugerir-correcao-noticia").hide();
    var noticiaCorrecao = $("#correcao-noticia").val();

     // TODO Implementar chamada para o backend.
    console.log("Enviando correção...");
    console.log(noticiaCorrecao);

    $("#correcao-noticia").val("");
});