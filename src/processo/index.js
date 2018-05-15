import style from '../../assets/scss/secoes/processo/processo.scss';
import $ from 'jquery';
import moment from 'moment';

$(document).ready(function(){
    var processoClasse = $('#classe-numero-processo').val().split(' ');
    var parametros = 'classe=' + processoClasse[0] + '&numero=' + processoClasse[1];
    var incidente = $('#incidente').val();
    var tipoMeioProcesso = $('#meio').val();
    var peca = $('#peca').val();

    $('#btn-dje').on('click', function(){
        window.open('//stf.jus.br/portal/diarioJustica/listarDiarioJustica.asp?tipoPesquisaDJ=AP&' + parametros, '_blank');
    });

    $('#btn-jurisprudencia').on('click', function(){
        window.open('//stf.jus.br/portal/jurisprudencia/listarConsolidada.asp?' + parametros + '&origem=AP', '_blank');
    });

    $('#btn-pecas').on('click', function(){
        if(peca != 'S' && tipoMeioProcesso == 'E'){
            window.location.href = "/textos/verTexto.asp?servico=processoManualeSTF&pagina=informacaoVerPecaEletronica";
        } else {
            window.open('//redir.stf.jus.br/estfvisualizadorpub/jsp/consultarprocessoeletronico/ConsultarProcessoEletronico.jsf?seqobjetoincidente=' + incidente, '_blank');
        }
    });

    $('#btn-push').on('click', function(){
        window.open('http://stf.jus.br/portal/push/autenticarUsuario.asp?incluirProcesso=S', '_blank');
    });

    $('#todas-partes').on('click', function(e){
        e.preventDefault();
        var tabPartes = $('#tabPartes');
        $('ul>li.active').removeClass('active');
        $('ul>li.active').attr('aria-expanded','false');
        tabPartes.parent().attr('class', 'active');
        tabPartes.attr('aria-expanded','true');
        $('#partes').attr('class', 'tab-pane fade active in');
        $('ul>li.li-partes').addClass('active');
        $('#informacoes').removeClass('active in');
        $('#peticoes').removeClass('active in');
        $('#andamentos').removeClass('active in');
        $('#recursos').removeClass('active in');
        $('#deslocamento').removeClass('active in');
    });
});
//expandir informações ao clicar no icone 
$('.icone-expandir').click(function () {
    $('.menu-processo').removeClass('ajustar-menu').css('background', 'white');
    $('.card-processo, .linha-2').fadeIn("fast", function () {
        $('#btn-todas-partes, .icone-expandir').fadeOut('fast');
    });
});

$(window).scroll(function (e) {
    e.preventDefault();

    var alturaPage = $(".tab-content").height();

    if ($(window).scrollTop() < 300 || $(window).scrollTop() > alturaPage) {
        $('.tab-content').css('padding-top', '10px');
        $('.titulo-processo, .card-processo, .linha-2, .menu-processo').removeClass('fixar-objeto');
        $('.titulo-processo').removeClass('fixar-titulo');
        $('.card-processo').removeClass('fixar-card-processo');
        $('.linha-2').removeClass('fixar-linha-2');
        $('.menu-processo').removeClass('ajustar-menu');
        $('.card-processo, .linha-2').fadeIn("fast", function () {
            $('#btn-todas-partes, .icone-expandir').fadeOut('fast');
        });
    }
    else if ($(window).scrollTop() >= 300) {
        $('.tab-content').css('padding-top', '241px');
        $('.titulo-processo, .card-processo, .linha-2, .menu-processo').addClass('fixar-objeto');
        $('.titulo-processo').addClass('fixar-titulo');
        $('.card-processo').addClass('fixar-card-processo');
        $('.linha-2').addClass('fixar-linha-2');
        $('.menu-processo').addClass('ajustar-menu');
        $('.card-processo, .linha-2').fadeOut('fast', function () {
            $('#btn-todas-partes, .icone-expandir').fadeIn('fast');
        });
    }
});

$('#btn-todas-partes, .processo-link').click(function (e) {
    e.preventDefault();
    $('.li-info-geral, .li-andamentos, .li-deslocamento, .li-peticoes, .li-recursos').removeClass('active');
    $('#partes').addClass('tab-pane fade active in');
    $('ul>li.li-partes').addClass('active');
    $('#informacoes, #peticoes, #andamentos, #recursos, #deslocamento').removeClass('active in');
    $(window).scrollTop(300);
});












