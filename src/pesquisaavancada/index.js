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

/**
 * @description 
 */
var pesquisa = function(input, fonte, tipo) {
	$(document).ready(function(){
		$(input).on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$(fonte + " " + tipo).filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		});
	});
}

pesquisa("#input-pesquisa-livre", "#tabela-RG", "tr");
pesquisa("#input-busca-ministro", ".dropdown-menu-ministros", "li");

$('.selectpicker').selectpicker({
  style: 'btn-info',
  size: 4
});
