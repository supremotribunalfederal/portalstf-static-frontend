import style from '../../assets/scss/secoes/pesquisaavancada/pesquisaavancada.scss';
import $ from 'jquery';
import moment from 'moment';





$(function() {
	$(".limpar-filtros").click(function() {
		$(".box-opcoes-filtros").val("");

		var ministros = document.getElementsByClassName("card-imagem-ministros");
		$(ministros).addClass('cinza');
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