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

//valida o CPF digitado  
function ValidarCPF() {
    var cpf = $('#cpf').value;
    exp = /\.|\-/g
    cpf = cpf.toString().replace(exp, "");
    var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
    var soma1 = 0, soma2 = 0;
    var vlr = 11;

    for (i = 0; i < 9; i++) {
        soma1 += eval(cpf.charAt(i) * (vlr - 1));
        soma2 += eval(cpf.charAt(i) * vlr);
        vlr--;
    }
    soma1 = (((soma1 * 10) % 11) == 10 ? 0 : ((soma1 * 10) % 11));
    soma2 = (((soma2 + (2 * soma1)) * 10) % 11);

    var digitoGerado = (soma1 * 10) + soma2;
    if (digitoGerado != digitoDigitado)
        alert('CPF Invalido!');
}

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