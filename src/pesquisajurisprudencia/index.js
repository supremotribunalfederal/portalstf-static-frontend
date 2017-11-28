import style from '../../assets/scss/secoes/pesquisajurisprudencia/pesquisajurisprudencia.scss';
import $ from 'jquery';
import moment from 'moment';

var divFiltros = document.querySelector("#filtros-aplicados");
var filtros = document.querySelectorAll(".badge");
var itens_pesquisados = document.querySelectorAll(".item_pesquisa");

//excluir filtro aplicado 
divFiltros.addEventListener("click", function(event){
    event.preventDefault();
    event.target.remove();
});

/*
//excluir filtro aplicado
filtros.forEach(function(badge){
  badge.addEventListener("click", function(){
       this.remove();
   });
});*/

//excluir itens de pesquisa 
itens_pesquisados.forEach(function(item_pesquisa){
    item_pesquisa.addEventListener("click", function(){
        this.remove();
    });
});

//excluir todos os filtros aplicados
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
 
});


//adicionar palavras-chaves a pesquisa clicando no botao
var adicionarFiltro = document.querySelector("#btnAddFiltro");
adicionarFiltro.addEventListener("click", function(event){
    event.preventDefault();  

    var formFiltro = document.querySelector("#filtro-palavra-chave");
    var palavraFiltro = document.querySelector(".palavraPesquisa").value;
    var span = document.createElement("span");
    
    //limpar input
    $(".palavraPesquisa").val(" ");
    //criando icone 
    $(icon).addClass('glyphicon glyphicon-remove-sign');
    var icon = document.createElement("i");
    
    //criando span e conteudo dentro dele
    span.classList.add("badge");
    span.textContent = palavraFiltro;
    span.appendChild(icon);
    
    // Adicionando span na div
    divFiltros.appendChild(span);
});

