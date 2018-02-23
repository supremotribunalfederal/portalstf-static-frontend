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

filtraDados(".pesquisa-livre", "#tabela-RG", "tr");
filtraDados("#busca-relator", "#lista-relatores", ".list-group-item");
filtraDados("#busca-tabela-julgados", ".julgados", "tbody tr");
filtraDados("#busca-tabela-pendentes", ".pendentes", "tbody tr");

/**
 * @description Alterna os estados de ativo de cada aba da tab de navegação dos filtros
*/
$(document).ready(function() {
    $("div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.conteudo-tab-filtros>div.conteudo-sessao-filtros").removeClass("active");
        $("div.conteudo-tab-filtros>div.conteudo-sessao-filtros").eq(index).addClass("active");
    });
});

/**
 * @description Alterna os icones que mostram e escondem os filtros da parte de pesquisa livre
*/
$(document).ready(function() {
	$("#icone-add-filtros").click(function() {
		var valorIcone = $("#icone-add-filtros").text();
		if(valorIcone == "add_circle_outline") {
			$("#icone-add-filtros").text("remove");
		} else {	
			$("#icone-add-filtros").text("add_circle_outline");
		}
	});
});

/**
 * @description Alterna estado dos relatores no dropdown de busca
 */
$(document).ready(function() {
	$("img.card-imagem-ministros").click(function() {
		if($(this).hasClass("cinza")) {
			$(this).removeClass("cinza");
		} else {
			$(this).addClass("cinza");
		}
	})
});

/**
 * @description Limpar filtros
 */
$(document).ready(function() {
	$(".limpar-filtros").click(function() {
		$(".box-opcoes-filtros").val("");

		var imagens = document.getElementById("lista_ministros").getElementsByTagName("img");
		$(imagens).addClass('cinza');
	
	});


// esconder link pesquisa-avançada 
	$('.link-pesquisa-avancada-rg').click(function(e){
		e.preventDefault();
		$(this).hide();
	});
	$('.esconder-filtros').click(function(e){
		e.preventDefault();
		$('.link-pesquisa-avancada-rg').show();
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

	// $('.btn-fav').click(function(){
	// 	var texto = $(this).data('titulo-pesquisa');
	// 	$('#titulo-filtro').text(texto);
	// });

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
