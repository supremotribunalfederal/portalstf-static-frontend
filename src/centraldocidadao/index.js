import style from '../../assets/scss/secoes/centraldocidadao/centraldocidadao.scss';
import $ from 'jquery';
import moment from 'moment';

//focar no input do tipo de documento selecionado 
$('#tipoCPF').click(function(){
    $('.input-cpf').focus();
    $("#tipoCPF").prop("checked", true);
    $('#tipoRG').prop("checked", false);
});
$('#tipoRG').click(function () {
    $('.input-rg').focus();
    $("#tipoCPF").prop("checked", false);
    $('#tipoRG').prop("checked", true);
});
//mascara cpf
jQuery("#cpf").mask("999.999.999-99");
//mascara rg
jQuery("#rg").mask("9.999.999");
 
//paginação 
$(function(){
    $('#parte2, #parte3').hide();
//parte 1 
    $(".btn-next-1").click(function(){
        $('#parte1').hide();
        $('#parte2').show();
        $('.titulo-etapa').text('tipo de resposta');
    });
//parte 2
    $('.btn-voltar-2').click(function(){
        $('#parte2').hide();
        $('#parte1').show();
        $('.titulo-etapa').text('dados pessoais');
    });

    $(".btn-next-2").click(function () {
        $('#parte2').hide();
        $('#parte3').show();
        $('.titulo-etapa').text('dados do relato');
    });
    $(".btn-voltar-3").click(function () {
        $('#parte3').hide();
        $('#parte2').show();
        $('.titulo-etapa').text('tipo de resposta');
    });
});
//contar palavras
$('#relato').keydown(function () {
    var qtdCaracteres = $('#relato').val().length;
    $('.num-caracteres').text(qtdCaracteres);
});
