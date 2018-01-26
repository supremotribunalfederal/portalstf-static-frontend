import style from '../../assets/scss/secoes/pesquisaavancada/pesquisaavancada.scss';
import $ from 'jquery';
import moment from 'moment';

/* Método para tabs dos filtros */
$(document).ready(function() {
	$("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
			e.preventDefault();
			$(this).siblings('a.active').removeClass("active");
			$(this).addClass("active");
			var index = $(this).index();
			$("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
			$("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
	});
});


//mostrar e esconder icone descricao do tema
var mostrar=$('.more');
var esconder = $('.less');

mostrar.click(function(e){
	e.preventDefault();
	mostrar.hide();
	esconder.show();
});

esconder.click(function(e){
	e.preventDefault();
	esconder.hide();
	mostrar.show();
});