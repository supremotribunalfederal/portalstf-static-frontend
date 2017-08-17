import style from '../../assets/scss/secoes/quemequem/quemequem.scss';
import $ from 'jquery';
import moment from 'moment';

var dataAtualizacao = $(".data-atualizacao").text();
var dataMoment = moment(dataAtualizacao);
$(".data-atualizacao").text(dataMoment.format("dddd, DD") + " de " + dataMoment.format("MMMM").toLowerCase() + " de " + dataMoment.format("YYYY"));