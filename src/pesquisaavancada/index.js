import style from '../../assets/scss/secoes/pesquisaavancada/pesquisaavancada.scss';
import $ from 'jquery';
import moment from 'moment';


$(function() {
	$(".card-imagem-ministros").click(function() {
		$(this).toggleClass("cinza");
	})
});


$(function() {
	$(".limpar-filtros").click(function() {
		$(".box-opcoes-filtros").val("");

		var imagens = document.getElementById("lista_ministros").getElementsByTagName("img");
		$(imagens).addClass('cinza');
	});
});


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