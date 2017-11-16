import style from '../../assets/scss/secoes/pesquisajurisprudencia/pesquisajurisprudencia.scss';
import $ from 'jquery';
import moment from 'moment';

//excluir filtro aplicado

var filtros = document.querySelectorAll(".badge");

filtros.forEach(function(badge){
    badge.addEventListener("click", function(){
        this.remove();
    });
});

//excluir todos os filtros aplicados
$("#apagar_filtro").click(function(){
    $(".badge").empty();
});

// mostrar/esconder informações completas de pesquisas
$(function () {
    
        $(".informacao-completa").hide();
        $(".exibir-menos").hide();

        //clicar em exibir mais
        $(".exibir-mais").bind("click", function (e) {
            e.preventDefault();                 //não recarregar página ao clicar
    
         $(".bloco-right").hide();          
          if ($(this).attr("class") == "exibir-mais")
          {
            $(".informacao-completa").show();
            $(".exibir-menos").show();
          }
          else 
          { 
            $(".resumo").show();
          }

        });

        //clicar em exibir menos
        $(".exibir-menos").bind("click", function(e){
            e.preventDefault();     

          $(".informacao-completa").hide();              

          if ($(this).attr("class") == "exibir-menos")
          {
            $(".bloco-right").show();
            $(".exibir-mais").show();
          }
          else 
          { 
            $(".informacao-completa").show();
          }
        });
    
    });