import style from '../../assets/scss/secoes/listagem/listagem.scss';

import $ from 'jquery';
import moment from 'moment';
import URI from 'urijs';
import validation from 'jquery-validation';

import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/datepicker.css';

$(document).ready(function(){
    $.validator.addMethod('dataValida', function (value, element) {
        return this.optional(element) || moment(value,"DD/MM/YYYY").isValid();
    }, "Data inválida.");

    $.validator.addMethod('dataInicialMenorDataFinal', function (value, element) {
        var dataInicial = moment(value,"DD/MM/YYYY")
        
        var dataFinal = moment($('#data_final').val(),"DD/MM/YYYY");
                
        if (dataInicial > dataFinal){
            return false;
        }

        return true;
        
    }, "Data inicial maior que a data final.");
});

$('#data_inicial').datepicker({
    dateFormat: "dd/mm/yy"
});
$('#data_final').datepicker({
    dateFormat: "dd/mm/yy"
});

$('#btn-datepicker-inicial').click(function() {
    $('#data_inicial').datepicker('show');
});

$('#btn-datepicker-final').click(function() {
    $('#data_final').datepicker('show');
});

$('#btn-add-inicial').click(function() {
    $('#data_inicial').val('');
    $('#data_inicial').focus();
});

$('#btn-add-final').click(function() {
    /*
    var dataFinal = $('#data-final').datepicker('getDate');
    if (dataFinal) {
        var dataFinalFormatada = moment(dataFinal).format("DD/MM/YYYY");
        $('#data-final').datepicker('setDate');
        var url = new URI(window.location.href);
        url.removeQuery("dataA");
        url.addQuery("dataA", dataFinalFormatada);
        url.removeQuery("paginaAtual");
        window.location.href = url.toString();
    }
    */
    $('#data_final').val('');
    $('#data_final').focus();
});

$('#form-pesquisa-noticias').submit(function(e){
    $('#form-pesquisa-noticias').validate({
        errorPlacement: function(label, element) {
            label.addClass('alert alert-danger col-md-12 m-t-16 m-b-0');
            label.insertAfter('#btnPesquisarNoticias');
        },
        wrapper: 'span',
        rules: {
            data_inicial: {
                dataValida: true,
                dataInicialMenorDataFinal: true
            },
            data_final: {
                dataValida: true
            }
        },
        messages: {
            data_inicial: {
                dataValida: "Data inicial inválida.",
                dataInicialMenorDataFinal: "Data inicial maior que a final."
            },
            data_final: {
                dataValida: "Data final inválida."
            }
        }
    });

    if ($('#form-pesquisa-noticias').valid()){
        pesquisarNoticiasUsandoFiltro();
    }
});

function pesquisarNoticiasUsandoFiltro(){
    var dataInicial = $('#data_inicial').datepicker('getDate');
    var dataFinal = $('#data_final').datepicker('getDate');
    var url = new URI(window.location.href);
    url.removeQuery('dataDe');
    url.removeQuery('dataA');
    
    if (dataInicial){
        var dataInicialFormatada = moment(dataInicial).format("DD/MM/YYYY");
        $('#data_inicial').datepicker('setDate');
        url.removeQuery("dataDe");
        url.addQuery("dataDe", dataInicialFormatada);
    }

    if (dataFinal){
        var dataFinalFormatada = moment(dataFinal).format("DD/MM/YYYY");
        $('#data_final').datepicker('setDate');
        url.removeQuery("dataA");
        url.addQuery("dataA", dataFinalFormatada);
    }

    url.removeQuery("paginaAtual");
    window.location.href = url.toString(); 
}
/*
$('#btnPesquisarNoticias').click(function(){
    var dataInicial = $('#data-inicial').datepicker('getDate');
    var dataFinal = $('#data-final').datepicker('getDate');
    var url = new URI(window.location.href);
    url.removeQuery('dataDe');
    url.removeQuery('dataA');
    
    if (dataInicial){
        var dataInicialFormatada = moment(dataInicial).format("DD/MM/YYYY");
        $('#data-inicial').datepicker('setDate');
        url.removeQuery("dataDe");
        url.addQuery("dataDe", dataInicialFormatada);
    }

    if (dataFinal){
        var dataFinalFormatada = moment(dataFinal).format("DD/MM/YYYY");
        $('#data-final').datepicker('setDate');
        url.removeQuery("dataA");
        url.addQuery("dataA", dataFinalFormatada);
    }

    url.removeQuery("paginaAtual");
    window.location.href = url.toString(); 
});
*/
$('.paginacao-ir-para-pagina').click(function () {
    var pagina = parseInt($(this).attr("data-pagina"));
    var url = new URI(window.location.href);
    url.removeQuery("paginaAtual");
    url.addQuery("paginaAtual", pagina);
    window.location.href = url.toString();
});

$('#paginacao-pagina-anterior').click(function() {
    var url = new URI(window.location.href);
    var paginaAtual = url.query(true).paginaAtual;
    if (paginaAtual > 1) {
        paginaAtual--;
        url.removeQuery("paginaAtual");
        url.addQuery("paginaAtual", paginaAtual);
        window.location.href = url.toString();
    }
});

$('#paginacao-proxima-pagina').click(function() {
    if (!$(this).closest('li').hasClass("disabled")) {
        var url = new URI(window.location.href);
        var paginaAtual = url.query(true).paginaAtual;
        if (!paginaAtual) paginaAtual = 1;
        paginaAtual++;
        url.removeQuery("paginaAtual");
        url.addQuery("paginaAtual", paginaAtual);
        window.location.href = url.toString();
    }
});