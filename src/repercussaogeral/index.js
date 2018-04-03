import style from '../../assets/scss/secoes/repercussaogeral/repercussaogeral.scss';


import $ from 'jquery';

$(document).ready(function() {
    
    var showChar = 150;  
    var ellipsestext = "...";
    var moretext = "Leia mais";
    var lesstext = "Mostrar menos";    

    $('.more').each(function() {
        var content = $(this).html(); 
        if(content.length > showChar) { 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar); 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>'; 
            $(this).html(html);
        } 
    });
 
    $(".morelink").click(function(e){
        e.preventDefault();
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

function clickMinistro(ministro) {
    var imagem = document.getElementById(ministro.id);
    imagem.classList.toggle("cinza");

    qlikSense.getAplicacao(qlikSense.ACERVO).then(function (facadeAcervoQlik) {

        var selecionados = [].slice.call(document.querySelectorAll('.card-imagem-ministros:not(.cinza)'));
        var valores = selecionados.reduce(function (valores, ministro) {
            valores.push(ministro.id);
            return valores;
        }, []);

        facadeAcervoQlik.selecionaCampo(facadeAcervoQlik.CAMPO_NOME_MINISTRO, valores);
    });
};


function clickTodoTribunal() {
    var imagens = [].slice.call(document.querySelectorAll('.card-imagem-ministros'));
    imagens.forEach(function (imagem) {
        imagem.classList.add('cinza');
    });

    qlikSense.getAplicacao(qlikSense.ACERVO).then(function (facadeAcervoQlik) {
        facadeAcervoQlik.limpaSelecoesEFiltros();
    });

    $("#comboClasses").val('');
    $("#comboTipoClasse").val('');
    $("#comboLocalizacao").val('');
};



//GOOGLE ANALYTICS
$('#repgeral-qtd-temas-categoria').on('click', function(){
	ga('send', 'event', 'Repercussão Geral', 'Quantidade de Temas', 'Por Categoria');
});
$('#repgeral-qtd-sobrestados-categoria').on('click', function(){
	ga('send', 'event', 'Repercussão Geral', 'Quantidade de Sobrestados', 'Por Categoria');
});
$('#repgeral-qtd-sobrestados-data').on('click', function(){
	ga('send', 'event', 'Repercussão Geral', 'Quantidade de Sobrestados', 'Por Data');
});
$('#repgeral-qtd-temas-data').on('click', function(){
	ga('send', 'event', 'Repercussão Geral', 'Quantidade de Temas', 'Por Data');
});

