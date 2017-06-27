import $ from 'jquery';
import './index-ga';

$('.dropdown-toggle').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(100);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(100);
});


$(document).ready(function(){
    $('.botoes-pesquisa-jurisprudencia span').hide();
    $('.pesquisa-jurisprudencia-links-inferiores').hide();    
});


moment.locale("pt-BR");    
$(".tmp-dec").html("H&aacute; " + moment().startOf("day").fromNow());    

$("#menuPesquisa li span").on("click", function() {
    //Remove os estilos de todas as abas.
    $("#menuPesquisa li span").each(function(index, element) {
        $(this).removeClass("ativo");
    });

    $('.botoes-pesquisa-jurisprudencia span').hide();
    $('.pesquisa-jurisprudencia-links-inferiores').hide();   
    
    //Ativa a aba clicada.
    $(this).addClass("ativo");
    
    var placeholder = "";
    var aba = $(this).attr("id");
    //$abaSelecionada = $("#abaSelecionada").val();
    
    switch(aba) {
        case "abaProcesso":
            placeholder = "Digite a classe e número do processo (ex: ADI 100), o nome da parte ou o protocolo...";
            $("#abaSelecionada").val("3");
            break;
        case "abaJurisprudencia":
            placeholder = "Digite um termo para a pesquisa de jurisprudência...";
            $("#abaSelecionada").val("4");
            $('.botoes-pesquisa-jurisprudencia span').show();
            $('.pesquisa-jurisprudencia-links-inferiores').show();   
            break;
        case "abaNoticias":
            placeholder = "Informe um assunto sobre uma notícia...";
            $("#abaSelecionada").val("2");
            break;
        default:
            placeholder = "Informe o assunto desejado...";
            $("#abaSelecionada").val("6");
            break;
    }
    
    $("#pesquisaPrincipal").val("");
    $("#pesquisaPrincipal").attr("placeholder", placeholder);
    $("#pesquisaPrincipal").focus();
});


$('.botoes-pesquisa-jurisprudencia span').on('click', function(){
    var search = $('#pesquisaPrincipal').val();
    search = search + ' ' + $(this).data('value') + ' ';
    $('#pesquisaPrincipal').val(search);        
    $("#pesquisaPrincipal").focus();
});


function realizarPesquisa(){
    var assunto = $("#abaSelecionada").val();
    var termoPesquisa = $("#pesquisaPrincipal").val();
    location.href = "//hstf.stf.jus.br/portal/pesquisa/listarPesquisa.asp?termo=" + termoPesquisa + "&assunto=" + assunto;
}

$("#btnPesquisar").click(function(){
    realizarPesquisa();
});

$("#pesquisaPrincipal").keyup(function(e){
    if(e.keyCode == 13) {
        realizarPesquisa();
    }
});