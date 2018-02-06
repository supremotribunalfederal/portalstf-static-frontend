import 'jquery.maskedinput';
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

    moment.locale("pt-BR");
    moment().format('LT');
    $(".tmp-dec").each(function(){
        var data = $(this)[0].innerText;
        var resultado = moment(data, "DD/MM/YYYY h:mm").fromNow();
        $(this).text("Há " + resultado.replace('atrás',''));
    });

    $('#entrarForum').on('click', function(){
        window.open('https://groups.google.com/forum/#!forum/repgeral', '_blank')
    });
});

var campoInputPesquisa = 'pesquisaPrincipalClasseNumero';

$('#pesquisaPrincipalNumeroUnico').mask('9999999-99.9999.9.99.9999', {autoclear: false});

//--------------------------------
// controle dos botoes de pesquisa da home na versao Desktop

$("#menuPesquisa li span").on("click", function() {
    //Remove os estilos de todas as abas.
    $("#menuPesquisa li span").each(function(index, element) {
        $(this).removeClass("ativo");
    });

    $('.botoes-pesquisa-jurisprudencia span').hide();
    $('.pesquisa-jurisprudencia-links-inferiores').hide();
    $('.pesquisa-rg-links-inferiores').hide();

    //Ativa a aba clicada.
    $(this).addClass("ativo");

    var placeholder = "";
    var aba = $(this).attr("id");

    $('.aba-pesquisa').hide();

    if (validator) {
        validator.resetForm();
        validator.reset();
    }

    $('#pesquisa-principal')[0].reset();

    switch(aba) {
        case "abaProcesso":
            placeholder = "Digite a classe e número do processo (ex: ADI 100)";
            $("#abaSelecionada").val("3");
            $('.pesquisa-processo').show();
            campoInputPesquisa = 'pesquisaPrincipalClasseNumero';
            break;
        case "abaJurisprudencia":
            placeholder = "Digite um termo para a pesquisa de jurisprudência...";
            $("#abaSelecionada").val("4");
            $('.botoes-pesquisa-jurisprudencia span').show();
            $('.pesquisa-jurisprudencia-links-inferiores').show();
            $('.pesquisa-jurisprudencia').show();
            campoInputPesquisa = 'pesquisaJurisprudencia';
            break;
        case "abaNoticias":
            placeholder = "Informe um assunto sobre uma notícia...";
            $("#abaSelecionada").val("2");
            $('.pesquisa-noticias-e-textos').show();
            campoInputPesquisa = 'pesquisaNoticiasTextos';
            break;
        case "abaTransparencia":
            placeholder = "Informe o assunto desejado...";
            $("#abaSelecionada").val("6");
            $('.pesquisa-transparencia').show();
            campoInputPesquisa = 'pesquisaTransparencia';
            break;
        default:
            placeholder = "Digite um tema para pesquisar...";
            $("#abaSelecionada").val("7");
            $('.pesquisa-repercussao').show();
            $('.pesquisa-rg-links-inferiores').show();
            campoInputPesquisa = 'pesquisaRepercussao';
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
    $('.aba-pesquisa').hide();
    var placeholder = "";
    var aba = $( "#menu-pesquisa-mobile option:selected" ).data("aba");
    if (validator) {
        validator.resetForm();
        validator.reset();
    }
    $('#pesquisa-principal')[0].reset();
    switch(aba) {
        case "abaProcesso":
            placeholder = "Digite a classe e número do processo";
            $("#abaSelecionada").val("3");
            $('.pesquisa-processo').show();
            campoInputPesquisa = 'pesquisaPrincipalClasseNumero';
            break;
        case "abaJurisprudencia":
            placeholder = "Digite um termo para a pesquisa de jurisprudência";
            $("#abaSelecionada").val("4");
            $('.pesquisa-jurisprudencia-links-inferiores').show();
            $('.pesquisa-jurisprudencia').show();
            campoInputPesquisa = 'pesquisaJurisprudencia';
            break;
        case "abaNoticias":
            placeholder = "Informe um assunto sobre uma notícia";
            $("#abaSelecionada").val("2");
            $('.pesquisa-noticias-e-textos').show();
            campoInputPesquisa = 'pesquisaNoticiasTextos';
            break;
        case "abaTransparencia":
            placeholder = "Informe o assunto desejado...";
            $("#abaSelecionada").val("6");
            $('.pesquisa-transparencia').show();
            campoInputPesquisa = 'pesquisaTransparencia';
            break;
        default:
            placeholder = "Digite um tema para pesquisar...";
            $("#abaSelecionada").val("7");
            $('.pesquisa-repercussao').show();
            campoInputPesquisa = 'pesquisaRepercussao';
            break;
    }

    $("#pesquisaPrincipal").attr("placeholder", placeholder);
    $("#pesquisaPrincipal").focus();
});

// fim do controle dos botoes de pesquisa versao mobile
//----------------------------------------------------

//----------------------------------------------------
// controle do tipo de pesquisa de processo
$(".tipo-pesquisa-processo").change(function(event) {
    if (validator) {
        validator.resetForm();
        validator.reset();
    }
    //$('#pesquisa-principal')[0].reset();
    $('.campo-pesquisa-processo').find('input').val('');
    $('.campo-pesquisa-processo').find('select.processo-classe').val('');
    switch($(this).val()) {
        case "CLASSE_E_NUMERO":
            $('.campo-pesquisa-processo').hide();
            $('.pesquisa-processo-classe').show();
            campoInputPesquisa = 'pesquisaPrincipalClasseNumero';
            break;
        case "PARTE_OU_ADVOGADO":
            $('.campo-pesquisa-processo').hide();
            $('.pesquisa-parte-advogado').show();

            campoInputPesquisa = 'pesquisaPrincipalParteAdvogado';
            break;
        case "NUMERO_UNICO":
            $('.campo-pesquisa-processo').hide();
            $('.pesquisa-numero-unico').show();
            campoInputPesquisa = 'pesquisaPrincipalNumeroUnico';
            break;
    }
});

//----------------------------------------------------
// fim do controle do tipo de pesquisa de processo

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
    var search = $('#pesquisaJurisprudencia').val();

    if ($(this).data('value').trim() == '$'){
        search = search + $(this).data('value');
    } else {
        search = search + ' ' + $(this).data('value') + ' ';
    }

    $('#pesquisaJurisprudencia').val(search);
    $("#pesquisaJurisprudencia").focus();
});

var map={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"};

function removerAcentos(s){
    return s.replace(/[\W\[\] ]/g,function(a){return map[a]||a})
};

function realizarPesquisa(id){
    var assunto = $("#abaSelecionada").val();
    var termoPesquisa = $("#" + id).val();

    if (assunto == "4") {
        window.open("//stf.jus.br/portal/jurisprudencia/listarConsolidada.asp?base=baseAcordaos&base=baseRepercussao&url=&txtPesquisaLivre=" + encodeURIComponent(termoPesquisa), '_blank');
    } else if (assunto == "3") { // Processo
        pesquisarProcesso();
    } else if (assunto == "7") { // Repercussão Geral
        window.open("//stf.jus.br/portal/jurisprudenciaRepercussao/listarProcesso.asp?PesquisaEm=tema&PesquisaEm=controversia&PesquisaEm=ambos&situacaoRG=TODAS&situacaoAtual=S&txtTituloTema=" + encodeURIComponent(termoPesquisa) + "&numeroTemaInicial=&numeroTemaFinal=&acao=pesquisarProcesso&dataInicialJulgPV=&dataFinalJulgPV=&classeProcesso=&numeroProcesso=&ministro=&ordenacao=asc&botao=", '_blank');
    }else if (assunto == "2") {
        location.href = window.location.origin + "/listagem/listarNoticias.asp?termoPesquisa=" + termoPesquisa;
    }
    else
    {
        window.open("//stf.jus.br/portal/pesquisa/listarPesquisa.asp?termo=" + removerAcentos(termoPesquisa) + "&assunto=" + assunto, '_blank');
    }
}

function pesquisarProcesso() {
    switch($('.tipo-pesquisa-processo').val()) {
        case "CLASSE_E_NUMERO":
        pesquisarProcessoPorClasseNumero();
            break;
        case "NUMERO_UNICO":
            pesquisarProcessoPorNumeroUnico();
            break;
        case "PARTE_OU_ADVOGADO":
            pesquisarProcessoPorNomeDaParteOuAdvogado();
            break;
    }
}

function pesquisarProcessoPorNumeroUnico() {
    var numeroUnico = $('#pesquisaPrincipalNumeroUnico').data($.mask.dataName)();
    var url = '';

    if (window.location.pathname.match(/^\/portal\/?.*/)) {
        url = window.location.origin + '/portal/processos/listarProcessos.asp?numeroUnico=' + numeroUnico;
    } else {
        url = window.location.origin + '/processos/listarProcessos.asp?numeroUnico=' + numeroUnico;
    }

    window.location.href = url;
}

function pesquisarProcessoPorClasseNumero() {
    var classe = $('.pesquisa-processo-classe .processo-classe').val();
    var numero = $('#pesquisaPrincipalClasseNumero').val();
    var url = '';

    if (window.location.pathname.match(/^\/portal\/?.*/)) {
        url = window.location.origin + '/portal/processos/listarProcessos.asp?classe=' + classe + '&numeroProcesso=' + numero;
    } else {
        url = window.location.origin + '/processos/listarProcessos.asp?classe=' + classe + '&numeroProcesso=' + numero;
    }

    window.location.href = url;
}

function pesquisarProcessoPorNomeDaParteOuAdvogado() {
    var url = '';
    if (window.location.pathname.match(/^\/portal\/?.*/)) {
       url = window.location.origin + '/portal/processos/listarPartes.asp?termo=' + $('#pesquisaPrincipalParteAdvogado').val();
    } else {
       url = window.location.origin + '/processos/listarPartes.asp?termo=' + $('#pesquisaPrincipalParteAdvogado').val();
    }
    window.location.href = url;
}

// Traduções do jQuery validator, já que havia um bug
// a partir da segunda validação, no qual as mensagens
// eram mostradas em inglês até que se clicasse na página.
$.extend( $.validator.messages, {
    required: "Informe o termo para a pesquisa",
    minlength: "Por favor, informe {0} ou mais caracteres para sua pesquisa."
});

var validator;

function configurarValidacaoPesquisa(id) {
    //JQUERY validation
    var conf = {
        //escolher onde posicionar a mensagem de erro
        errorPlacement: function(label, element) {
            label.addClass('alert alert-danger col-xs-10 m-t-8 m-b-0');
            label.insertAfter('.pesquisa-jurisprudencia-links-inferiores:last');
        },

        wrapper: 'span',

        rules: {
        },
        messages: {
        }
    };
    conf.rules[id] = {
        required: true,
    };
    conf.messages[id] = {
        required: "Informe o termo para a pesquisa"
    };

    if (id === 'pesquisaPrincipalParteAdvogado') {
        conf.rules[id]['minlength'] = 4;
        conf.messages[id]['minlength'] = "Por favor, informe {0} ou mais caracteres para sua pesquisa.";
    }

    if (validator) {
        validator.destroy();
    }

    validator = $('#pesquisa-principal').validate(conf);
}

//Pesquisa principal do topo da página
$('#pesquisa-principal').submit(function(e){
    configurarValidacaoPesquisa(campoInputPesquisa);

    if( $('#pesquisa-principal').valid()){
        realizarPesquisa(campoInputPesquisa);
    }
});

/* Pauta de Julgamento da Home ------------------------------------------------------------------------------------ */

//Usada no ato de clicar sobre um dia no calendário de pauta de julgamento.
function selecionarDataJulgamento(data) {
    ga('send', 'event', 'Página Geral', 'Pauta Julgamento', 'Link calendario');
    //location.href = "//stf.jus.br/portal/pauta/listarCalendario.asp?data=" + data;
    window.open("//stf.jus.br/portal/pauta/listarCalendario.asp?data=" + data, '_blank');
}

window.selecionarDataJulgamento = selecionarDataJulgamento;

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

// Selecionar a pesquisa por URL

(function pesquisaPorURL() {
    var url = window.location.pathname;
    if (url.match(/^\/jurisprudencia\/?.*/)) {
        $('#abaJurisprudencia').click();
    } else if (url.match(/(^\/noticias\/?.*|^\/listagem\/?.*)/) ) {
        $('#abaNoticias').click();
    } else if (url.match(/^\/transparencia\/?.*/)) {
        $('#abaTransparencia').click();
    } else if (url.match(/^\/repercussaogeral\/?.*/) || url.match(/^\/votacoes\/?.*/) || url.match(/^\/pesquisaavancada\/?.*/)) {
        $('#abaRepercussao').click();
    } else  {
        $('#abaProcesso').click();
    }
})();

//parametros qlik

/* ---------------------------------------------------------------------------------------------------------------- */
