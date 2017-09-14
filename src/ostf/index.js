import style from '../../assets/scss/secoes/ostf/ostf.scss';
import $ from 'jquery';

//GOOGLE ANALYTICS

//conteudo principal

$('#ostf-institucional').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Menu Lateral', 'Institucional');
});

$('#ostf-historia').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Menu Lateral', 'Histórico');
});

$('#ostf-estatisticas').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Menu Lateral', 'Estatísticas');
});

$('#ostf-telefones-uteis').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Menu Lateral', 'Telefones Úteis');
});

$('#ostf-historico-presidentes').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Menu Lateral', 'Histórico de Presidentes');
});

$('#ostf-historico-composicoes').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Menu Lateral', 'Histórico de Composições');
});

$('#ostf-biblioteca').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Menu Lateral', 'Biblioteca');
});

//menu lateral
$('#ostf-constituicao').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Menu Lateral', 'Constituição Federal');
});

$('#ostf-regimento').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Menu Lateral', 'Regimento Interno');
});

$('#ostf-gestao-equipe').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Menu Lateral', 'Quem é Quem');
});

$('#ostf-gestao-organograma').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Menu Lateral', 'Organograma');
});

$('#ostf-conheca').on('click', function(){
	ga('send', 'event', 'Página Sobre o STF', 'Menu Lateral', 'Conheça o STF');
});

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