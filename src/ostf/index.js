import style from '../../assets/scss/secoes/ostf/ostf.scss';
import $ from 'jquery';

//GOOGLE ANALYTICS

//card lateral transparencia
$('#ostf-gestao-pessoas').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Transparência', 'Gestão de Pessoas');
});
$('#ostf-licitacoes').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Transparência', 'Licitações');
});
$('#ostf-orcamento').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Transparência', 'Orçamento e Finanças');
});
$('#ostf-sobrestf').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Transparência', 'Conheça mais sobre o STF');
});
$('#ostf-vermais-transparencia').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Transparência', 'Acessar portal transparência');
});