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
