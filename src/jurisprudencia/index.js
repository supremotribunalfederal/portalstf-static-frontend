import style from '../../assets/scss/secoes/jurisprudencia/jurisprudencia.scss';
import $ from 'jquery';

//GOOGLE ANALYTICS

//jurisprudencia internacional
$('#internacional-cjcplp').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Internacional', 'CJCPLP');
});

$('#internacional-codices').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Internacional', 'Codices');
});

$('#internacional-glin').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Internacional', 'Glin');
});

$('#internacional-mercosul').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Internacional', 'Mercosul');
});

$('#btnPesquisaInteiroTeor').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Pesquisa Inteiro Teor', 'Clique no botão');
});

//informativo STF
$('#informativo-semanal').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Informativo STF', 'Informativo semanal');
});
$('#informativo-temas').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Informativo STF', 'Informativo por temas');
});
$('#informativo-pesquisa').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Informativo STF', 'Pesquisa de Informativo');
});

//legislacao anotada
$('#leg-anotada-constituicao').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Legislação Anotada', 'A constituicao e o Supremo');
});
$('#leg-anotada-infraconst').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Legislação Anotada', 'Leis infraconstitucionais');
});

//ultimas alteracoes sumulas
$('#juris-ver-todas-sumulas').on('click', function(){
	ga('send', 'event', 'Jurisprudencia', 'Ultimas alterações Súmulas', 'Ver todas as Súmulas');
});

function pesquisarInteiroTeorProcesso(){
	var txtNumeroProcesso = document.getElementById('txtNumeroProcesso');
    var regra = /\d{1,6}/;

    if (!regra.test(txtNumeroProcesso.value)) {
        alert('Informe apenas o número do processo.');
    } else {
		window.open('//hstf.stf.jus.br/portal/inteiroTeor/pesquisarInteiroTeor.asp?tipoPesquisa=pesquisarNumero&argumento=' + txtNumeroProcesso.value, '_blank');
	}
}

//Pesquisa de inteiro teor de acordão.
$('#btnPesquisaInteiroTeor').click(function(){
	pesquisarInteiroTeorProcesso();
});

$('#txtNumeroProcesso').keyup(function(e){
	if (e.keyCode == 13){
		pesquisarInteiroTeorProcesso();
		ga('send', 'event', 'Jurisprudencia', 'Pesquisa Inteiro Teor', 'Enter pressionado');
	}
});