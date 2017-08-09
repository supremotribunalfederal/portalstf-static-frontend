import style from '../../assets/scss/secoes/listagem/listagem.scss';

import $ from 'jquery';
import '!!style-loader!css-loader!jquery-ui/themes/base/core.css';
//import '!!style-loader!css-loader!jquery-ui/themes/base/base.css';
//import '!!style-loader!css-loader!jquery-ui/themes/base/theme.css';
//import '!!style-loader!css-loader!jquery-ui/themes/base/all.css';
import 'jquery-ui/ui/widgets/datepicker';

$('#data-inicial').datepicker({
    dateFormat: "dd/mm/yy"
});
$('#data-final').datepicker({
    dateFormat: "dd/mm/yy"
});


$('#btn-datepicker-inicial').click(function() {
    $('#data-inicial').datepicker('show');
});

$('#btn-datepicker-final').click(function() {
    $('#data-final').datepicker('show');
});