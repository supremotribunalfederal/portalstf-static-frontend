import style from '../../assets/scss/secoes/pesquisajurisprudencia/pesquisajurisprudencia.scss';
import $ from 'jquery';
import moment from 'moment';

var divFiltros = document.querySelector("#filtros-aplicados");
var filtros = document.querySelectorAll(".badge");
var itens_pesquisados = document.querySelectorAll(".item_pesquisa");
var removeFiltro = document.querySelectorAll(".remover");

//excluir filtro aplicado
$(divFiltros).click(function(event){
    event.preventDefault();
    event.target.closest('.badge').remove();
});

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


$(function  (){
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
});


//função  para adicionar filtro
$(function(){
    $(".btnFiltro").on("click", function (e){
        e.preventDefault();

        var idDoCampo = $(this).data('add-filtro');
        var valorFiltro = $('#'+idDoCampo).val();
    
        if($('#'+idDoCampo).val().length != 0){
            var span = document.createElement("span");
            var icon = document.createElement("i");
            $(icon).addClass('glyphicon glyphicon-remove-sign');
            //criando span e conteudo dentro dele
            span.textContent = valorFiltro;
            span.appendChild(icon);
            span.classList.add("badge");
            
            // Adicionando span na div
            divFiltros.appendChild(span);  
            //limpar input
            $('#'+idDoCampo).val("");  
        } 
    });
});





    


