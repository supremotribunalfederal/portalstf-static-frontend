import style from '../../assets/scss/secoes/pesquisaavancada/pesquisaavancada.scss';
import $ from 'jquery';
import moment from 'moment';

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

filtraDados("#input-pesquisa-livre", "#tabela-RG", "tr");
filtraDados("#input-busca-ministro", ".dropdown-menu-ministros", "li");

/**
 * @description Alterna os estados de ativo de cada aba da tab de navegação dos filtros
*/
$(document).ready(function() {
    $("div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});
