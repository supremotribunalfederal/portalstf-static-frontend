import $ from 'jquery';
import './index-ga';
import moment from 'moment';
import validation from 'jquery-validation';

$('.dropdown-toggle').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(100);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(100);
});

$(document).ready(function(){
    var pesquisaSelecionada = $("#abaSelecionada").val();
    //se nao for a pesquisa de jurisprudencia, esconde botoes da pesquisa jurisprudencia
    if(pesquisaSelecionada != 4){
        $('.botoes-pesquisa-jurisprudencia span').hide();
        $('.pesquisa-jurisprudencia-links-inferiores').hide();            
    }
    
    $('[data-toggle="popover"]').popover({
        container: 'body'
    });

    $('#alto-contraste').click(function() {
        $('body').toggleClass('alto-contraste');
    });
});

moment.locale("pt-BR");    
$(".tmp-dec").html("H&aacute; " + moment().startOf("day").fromNow());    

//--------------------------------
// controle dos botoes de pesquisa da home na versao Desktop

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
    
    switch(aba) {
        case "abaProcesso":
            placeholder = "Digite a classe e número do processo (ex: ADI 100)";
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

// fim do controle dos botoes de pesquisa da home na versao Desktop
//----------------------------------------------------


//--------------------------------
// controle dos botoes de pesquisa da home na versao mobile

$("#menu-pesquisa-mobile").on("change", function() { 
    $('.pesquisa-jurisprudencia-links-inferiores').hide();  
    var placeholder = "";
    var aba = $( "#menu-pesquisa-mobile option:selected" ).data("aba");    
    switch(aba) {
        case "abaProcesso":
            placeholder = "Digite a classe e número do processo";
            $("#abaSelecionada").val("3");
            break;
        case "abaJurisprudencia":
            placeholder = "Digite um termo para a pesquisa de jurisprudência";
            $("#abaSelecionada").val("4");               
            $('.pesquisa-jurisprudencia-links-inferiores').show();  
            break;
        case "abaNoticias":
            placeholder = "Informe um assunto sobre uma notícia";
            $("#abaSelecionada").val("2");
            break;
        default:
            placeholder = "Informe o assunto desejado...";
            $("#abaSelecionada").val("6");
            break;
    }
    
    $("#pesquisaPrincipal").attr("placeholder", placeholder);
    $("#pesquisaPrincipal").focus();
});

// fim do controle dos botoes de pesquisa versao mobile
//----------------------------------------------------

//----------------------------------------------------
// controle do include de pesquisa para listas de notícias

$("#abrir-pesquisa").click(function() {
    $("#pesquisa-completa").show();
    $("#fechar-pesquisa").show();
    $("#abrir-pesquisa").hide();
    $("#rotulo-pagina").hide();
});

$("#fechar-pesquisa").click(function() {
    $("#pesquisa-completa").hide();
    $("#fechar-pesquisa").hide();
    $("#abrir-pesquisa").show();
    $("#rotulo-pagina").show();
});

//---------------------------------------------------------
// fim do controle do include de pesquisa para listas de notícias

$('.botoes-pesquisa-jurisprudencia span').on('click', function(){
    var search = $('#pesquisaPrincipal').val();
    search = search + ' ' + $(this).data('value') + ' ';
    $('#pesquisaPrincipal').val(search);        
    $("#pesquisaPrincipal").focus();
});

function realizarPesquisa(){
    var assunto = $("#abaSelecionada").val();
    var termoPesquisa = $("#pesquisaPrincipal").val();

    if (assunto == "4") {
        window.open("//stf.jus.br/portal/jurisprudencia/listarConsolidada.asp?base=baseAcordaos&base=baseRepercussao&url=&txtPesquisaLivre=" + termoPesquisa, '_blank');
    } else {
        window.open("//stf.jus.br/portal/pesquisa/listarPesquisa.asp?termo=" + termoPesquisa + "&assunto=" + assunto, '_blank');
    }
}

//Pesquisa principal do topo da página
$('#pesquisa-principal').submit(function(e){
    
    //JQUERY validation
    $('#pesquisa-principal').validate({
        //escolher onde posicionar a mensagem de erro
        errorPlacement: function(label, element) {
            label.addClass('alert alert-danger col-xs-10 m-t-8 m-b-0');
            label.insertAfter('.pesquisa-jurisprudencia-links-inferiores:last');
        },
        
        wrapper: 'span',
        
        rules: {
            pesquisaPrincipal: {
                required: true,
            }
        },
        messages: {
            pesquisaPrincipal: {
                required: "Informe o termo para a pesquisa"
            }
        }
    });
    
    if( $('#pesquisa-principal').valid()){
        realizarPesquisa();        
    }
});

/* Pauta de Julgamento da Home ------------------------------------------------------------------------------------ */

//Usada no ato de clicar sobre um dia no calendário de pauta de julgamento.
function selecionarDataJulgamento(data) {
    ga('send', 'event', 'Página Geral', 'Pauta Julgamento', 'Link calendario');
    location.href = "//stf.jus.br/portal/pauta/listarCalendario.asp?data=" + data;
}


//criando o método de regex para o validador do processo pautado
$.validator.addMethod('regex',
        function(value) {
            var regra = /(\w{2}|\w{4}) \d{2,6}/;
            return regra.test(value);
        },
        "O código de processo informado não é válido"
);

//Pesquisa processo pautado - calendario
$('#pesquisa-processo-pautado').submit(function(e){
    var form = $('#pesquisa-processo-pautado');
    //JQUERY validation
    form.validate({
        //escolher onde posicionar a mensagem de erro
        errorPlacement: function(label, element) {
            label.addClass('alert alert-danger col-xs-10 m-t-8 m-b-0');
            label.insertAfter('#botao-pesquisa-pauta');
        },
        
        wrapper: 'span',
        
        rules: {
            pesquisa_pauta: {
                required: true,
                regex: true
            }
        },
        messages: {
            pesquisa_pauta: {
                required: "Informe o termo para a pesquisa",
            }
        }
    });
    
    if( form.valid()){
        pesquisarProcessoConstaPauta();        
    }
});

function pesquisarProcessoConstaPauta() {
    var inputProcesso = document.getElementById('pesquisa_pauta');
    var processo = inputProcesso.value.split(' ');
    var classe = processo[0].trim().toUpperCase();
    var numero = processo[1].trim();
    window.open("//www.stf.jus.br/portal/pauta/listarProcesso.asp?classe=" + classe + "&argumento=" + numero, '_blank');
}

//Botão ACESSAR O PORTAL DE NOTÍCIAS
$('#btnAcessarPortalNocicitas').on('click', function() {
    ga('send', 'event', 'Página Geral', 'Notícias', 'Botão ACESSAR O PORTAL DE NOTÍCIAS');
    
    var pagina = 'listarNoticias.asp';
    
    if (window.location.port == '3000'){
        pagina = 'index.html';
    }

    location.href = window.location.origin + window.location.pathname + 'listagem/' + pagina;
});

/* ---------------------------------------------------------------------------------------------------------------- */