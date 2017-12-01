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
        var classe = $(this).data('classe-campo');
        var valorFiltro = $('#'+idDoCampo).val();
        var span = document.createElement("span");
        var icon = document.createElement("i");
        var text = document.createElement("text");
      
        //criando span e conteudo dentro do span
        span.appendChild(text);
        text.textContent = valorFiltro;
        span.appendChild(icon);
        span.classList.add(classe, "badge");
        $(icon).addClass('glyphicon glyphicon-remove-sign');
        console.log(span);
        
        // efetua ação apenas se houver conteudo no input
        if($('#'+idDoCampo).val().length != 0){
            // Adicionando span na div
            divFiltros.appendChild(span);  
            //limpar input
            $('#'+idDoCampo).val("");    
        } 
    });
});





    


