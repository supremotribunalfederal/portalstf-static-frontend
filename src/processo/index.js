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
//esconder informa��es de processo ao rolar o scroll
$('div.tab-content').scroll(function(){
    $('.card-processo').fadeOut('slow', function(){
        $('.linha-2').fadeOut();
        $('#btn-todas-partes').fadeIn();
        $('.icone-expandir').fadeIn();
    });
});
//expnadir informa��es ao clicar no icone 
$('.icone-expandir').click(function(){
    $('.card-processo').fadeIn('slow');
    $('.linha-2').fadeIn();
    $(this).fadeOut('slow');
    $('#btn-todas-partes').fadeOut('slow');
});
//ir para tab ao clicar no icone 'partes'
$('#btn-todas-partes').click(function(e){
    e.preventDefault();
    $('ul>li.active').removeClass('active');
    $('#partes').addClass('tab-pane fade active in');
    $('ul>li.li-partes').addClass('active');
    $('#informacoes').removeClass('active in');
    $('#peticoes').removeClass('active in');
    $('#andamentos').removeClass('active in');
    $('#recursos').removeClass('active in');
    $('#deslocamento').removeClass('active in');
});
//mostrar informa��es com o scroll no topo
$(window).mouseover(function(e){
    e.preventDefault();
    if ($('div.tab-content').scrollTop() == 0){
        $('.card-processo').fadeIn("slow", function () {
            $('.linha-2').fadeIn();
            $('#btn-todas-partes').fadeOut();
            $('.icone-expandir').fadeOut();
        });
    }
});









