import style from '../../assets/scss/secoes/pesquisaavancada/pesquisaavancada.scss';
import $ from 'jquery';
import moment from 'moment';

function CustomSelect() {
	var container = ".custom_select",
		selected_selector = ".custom_select_selected",
		obj = $(container);
	
	if (obj.length) {
		var selected = obj.find(selected_selector);
		var options = obj.find("ul").children();

		$(this).css("z-index", parseInt(999));

		$(selected).click(function() {
			options.parent().toggle();
		});

		$.each(options, function(k1, v1) {
			$(this).click(function() {
				selected.html($(this).html());
				options.parent().toggle();
			});
		});
	}
}

$().ready(function() {
	CustomSelect();
});