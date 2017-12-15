import style from '../../assets/scss/secoes/pesquisajurisprudencia/pesquisajurisprudencia.scss';
import $ from 'jquery';
import moment from 'moment';

var divFiltros = document.querySelector("#filtros-aplicados");
var filtros = document.querySelectorAll(".badge");
var itens_pesquisados = document.querySelectorAll(".item_pesquisa");

$(document).ready(function(){
    padraoPesquisa();
});
//excluir filtro aplicado
$(divFiltros).click(removerFiltro);
    
function removerFiltro(){
    event.preventDefault();
    event.target.closest('.badge').remove();
}

//excluir itens de pesquisa 
itens_pesquisados.forEach(function(item_pesquisa){
    item_pesquisa.addEventListener("click", function(){
        this.remove();
    });
});

//botão excluir todos os filtros aplicados na div
$("#apagar_filtro").click(function(){
    $(".badge").empty();
});

function botoesExibir(){
    $(".exibir-mais").on("click", function (e) {
        e.preventDefault();
        var blocoParaEsconder = $(this).data('resultado-pesquisa');            
       $("#"+blocoParaEsconder).hide();   
    });

    //exibir menos
    $(".exibir-menos").on("click", function (e) {
        e.preventDefault();
        var blocoParaEsconder = $(this).data('resultado-pesquisa'); 
        $("#"+blocoParaEsconder).show(); 
    });

    $(".outras-infos").on("click", function(e){
        e.preventDefault();
    });
}

function criarBadge(valorFiltro, classe){
    //criando span e conteudo dentro do span
    var span = document.createElement("span");
    var icon = document.createElement("i");
    var texto = document.createElement("text");  
    span.appendChild(texto);
    texto.textContent = valorFiltro;
    span.appendChild(icon);
    span.classList.add(classe, "badge");
    $(texto).addClass('ajuste');
    $(icon).addClass('glyphicon glyphicon-remove-sign').addClass("remover");
    divFiltros.appendChild(span);  
};

//função  para adicionar filtro
$(function(){
    $(".btnFiltro").on("click", function (e){
        e.preventDefault();

        var idDoCampo = $(this).data('add-filtro');
        var classe = $(this).data('classe-campo');
        var valorFiltro = $(this).data('formata-data') ? [moment($('#'+idDoCampo).val()).format("DD/MM/YYYY")] : $('#'+idDoCampo).val().split(";");

        valorFiltro.forEach(function(valor){
            var tirarEspaco = $.trim(valor);

            if( tirarEspaco != ""){
                criarBadge(tirarEspaco, classe);
            }  

        });
        $('#'+idDoCampo).val(""); 
    });
});

//trazer lista de pesquisas completa ou resumida
var pesquisaCompleta = $("#pesquisaCompleta");
var pesquisaResumida = $("#pesquisaResumida");
var infoCompleta = $(".informacao-completa");

function padraoPesquisa(){
    if($(pesquisaCompleta).attr("checked") == "checked"){
        $(".bloco-right").hide();
        $(".exibir-menos").hide();
        $(".outras-infos").removeClass('collapse');
        $(".exibirMaisInformacoes").hide();                
    }
}; 

$(pesquisaResumida).on("click", function(){ 
    pesquisaCompleta.attr("checked", false);
    pesquisaResumida.attr("checked", true);
    $(infoCompleta).addClass('collapse');
    $(".outras-infos").addClass('collapse');
    $(".bloco-right").show();
    $(".exibirMaisInformacoes").show();
    $(".exibir-menos").show();
    botoesExibir();    
});

$(pesquisaCompleta).on("click",function(){
    $(infoCompleta).removeClass('collapse'); 
    pesquisaCompleta.attr("checked", true);
    pesquisaResumida.attr("checked",false); 
    padraoPesquisa();
});


 














    


