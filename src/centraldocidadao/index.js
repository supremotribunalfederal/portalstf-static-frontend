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

//paginação 
$(function(){
    $('#parte2').hide();
//parte 1 
    $(".btn-next-1").click(function(){
        $('#parte1').hide();
        $('#parte2').show();
    });
//parte 2
    $('.btn-voltar-2').click(function(){
        $('#parte2').hide();
        $('#parte1').show();
    });

    $(".btn-next-2").click(function () {
        $('#parte2').hide();
        $('#parte3').show();
      
    });
});