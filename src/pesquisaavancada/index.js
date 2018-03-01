import style from '../../assets/scss/secoes/pesquisaavancada/pesquisaavancada.scss';
import $ from 'jquery';
import moment from 'moment';

/**
 * @description Filtra dados dentro algum elemento(tabela, lista, etc).
 * @params {String} dadoDeEntrada string vinda da entrada do usuário.
 * @params {String} elementoASerfiltrado id ou class do elemento que possui dados para filtragem.
 * @params {String} tagParaFiltragem tag principal que se deseja filtrar os dados do elemento.
 */
var filtraDados = function(dadoDeEntrada, elementoASerfiltrado, tagParaFiltragem) {
	$(document).ready(function(){
		$(dadoDeEntrada).on("keyup", function() {
			var valorCapturado = $(this).val().toLowerCase();
			$(elementoASerfiltrado + " " + tagParaFiltragem).filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(valorCapturado) > -1)
			});
		});
	});
}

filtraDados("#busca-tabela-julgados", ".julgados", "tbody tr");
filtraDados("#busca-tabela-pendentes", ".pendentes", "tbody tr");

/**
 * @description Alterna estado das imagens dos ministros
 */
$(function() {
	$("img.card-imagem-ministros").click(function() {
		$(this).hasClass("cinza") ? $(this).removeClass("cinza") : $(this).addClass("cinza");
	})
});

/**
 * @description Mostrar e esconder link pesquisa-avançada
 */
$(function() {
	$('.link-pesquisa-avancada-rg').click(function(e){
		e.preventDefault();
		$(this).hide();
	});
	$('.esconder-filtros').click(function(e){
		e.preventDefault();
		$('.link-pesquisa-avancada-rg').show();
	});
})


/**
 * @description Limpar filtros
 */
$(document).ready(function() {
	$(".limpar-filtros").click(function() {
		$(".box-opcoes-filtros").val("");

		var imagens = document.getElementById("lista_ministros").getElementsByTagName("img");
		$(imagens).addClass('cinza');
	
	});

// abrir modal plenario

$(".progress").click(function(){
	$('#li-detalhes').removeClass('active');
	$('#li-votos').addClass('active');
	$('#tab-detalhes').removeClass('active in');
	$('#tab-votos').addClass('active in');
});

$(".num_tema").click(function(){
	$('#li-detalhes').addClass('active');
	$('#li-votos').removeClass('active');
	$('#tab-detalhes').addClass('active in');
	$('#tab-votos').removeClass('active in');
});

// mudar nome da pesquisa de acordo com o filtro selecionado

	//mostrar e esconder icone descricao do tema
	var mostrar=$('.ver-mais');
	var esconder = $('.ver-menos');

	mostrar.click(function(e){
		e.preventDefault();
		$('.descricao-resumida').hide();
	});

	esconder.click(function(e){
		$('.descricao-resumida').show();
	});

});
