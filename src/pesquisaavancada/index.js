import style from '../../assets/scss/secoes/pesquisaavancada/pesquisaavancada.scss';
import $ from 'jquery';
import moment from 'moment';

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