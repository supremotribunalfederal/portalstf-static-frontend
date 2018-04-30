import style from '../../assets/scss/secoes/repercussaogeral/repercussaogeral.scss';
import $ from 'jquery';
import '../qlik/qlik-sense-facade.js';
import '../qlik/aplicacao-repercussaogeral.js';

qlikSense.getAplicacao(qlikSense.REPERCUSSAOGERAL).then(function(facadeRepercussaoGeralQlik) {
    popula(facadeRepercussaoGeralQlik);
});

//Preenche as variáveis globais
function popula(facadeRepercussaoGeralQlik) {
    
    var mapeiaValorEmOption = function(valor) {
        var opt = document.createElement('option');
        opt.value = valor;
        opt.innerHTML = valor;

        return opt;
    };

    var populaComboBox = function(idCombo) {
        return function(valores) {
            var select = document.getElementById(idCombo);

            valores.forEach(function(valor) {
                select.appendChild(mapeiaValorEmOption(valor));
            });
        };
        
    };

    var excluiMinistrosAtuaisParaCombo = function(idCombo) {
        return function(ministros) {
            var ministrosAntigos = ministros.filter(function(nomeMinistro) {
                return document.getElementById(nomeMinistro) == null;
            });

            var populador = populaComboBox(idCombo);
            populador(ministrosAntigos);
        };
    };

    facadeRepercussaoGeralQlik.getRelatores().then(excluiMinistrosAtuaisParaCombo('comboRelatores'));
        
};


window.clickMinistro = function(ministro) {
    var imagem = document.getElementById(ministro.id);
    imagem.classList.toggle("cinza");

    qlikSense.getAplicacao(qlikSense.REPERCUSSAOGERAL).then(function(facadeRepercussaoGeralQlik) {

        var selecionados = [].slice.call(document.querySelectorAll('.card-imagem-ministros:not(.cinza)'));
        var valores = selecionados.reduce(function(valores, ministro) {
            valores.push(ministro.id);
            return valores;
        }, []);

        facadeRepercussaoGeralQlik.selecionaCampo(facadeRepercussaoGeralQlik.CAMPO_NOME_MINISTRO, valores);
    });
};

function pesquisaTema(){
    qlikSense.getAplicacao(qlikSense.REPERCUSSAOGERAL).then(function(facadeRepercussaoGeralQlik) {
        var valorSelecionado = $("#numero_tema").val();
        facadeRepercussaoGeralQlik.selecionaCampo(facadeRepercussaoGeralQlik.NUMERO_TEMA, [valorSelecionado]);
    });
};


window.clickTodoTribunal = function(){
    var imagens = [].slice.call(document.querySelectorAll('.card-imagem-ministros'));
    imagens.forEach(function(imagem) {
        imagem.classList.add('cinza');
    });

    qlikSense.getAplicacao(qlikSense.REPERCUSSAOGERAL).then(function(facadeRepercussaoGeralQlik) {
        facadeRepercussaoGeralQlik.limpaSelecoesEFiltros();
    });

    $("#comboClasses").val('');
    $("#comboRelatores").val('');
    $("#comboSituacaoRepercussaoGeral").val('');
};


$(function(){

    //filtra pelo relator
    $("#comboRelatores").on('change', function(){
        var valorSelecionado = $(this).val();
        qlikSense.getAplicacao(qlikSense.REPERCUSSAOGERAL).then(function(facadeRepercussaoGeralQlik) {
            facadeRepercussaoGeralQlik.selecionaCampo(facadeRepercussaoGeralQlik.CAMPO_NOME_MINISTRO, [valorSelecionado]);
        });
    });
	
	$("#situacaoRGReconhecida").on('click', function () {
        qlikSense.getAplicacao(qlikSense.REPERCUSSAOGERAL).then(function (facadeRepercussaoGeralQlik) {
            var parametro = "RG Reconhecida";
            facadeRepercussaoGeralQlik.selecionaCampo(facadeRepercussaoGeralQlik.SITUACAO_REPERCUSSAO_GERAL, [parametro]);
        });
    });

    $("#situacaoRGNegada").on('click', function () {
        qlikSense.getAplicacao(qlikSense.REPERCUSSAOGERAL).then(function (facadeRepercussaoGeralQlik) {
            var parametro = "RG Negada";
            facadeRepercussaoGeralQlik.selecionaCampo(facadeRepercussaoGeralQlik.SITUACAO_REPERCUSSAO_GERAL, [parametro]);
        });
    });

    $("#situacaoRGEmAnalise").on('click', function () {
        qlikSense.getAplicacao(qlikSense.REPERCUSSAOGERAL).then(function (facadeRepercussaoGeralQlik) {
            var parametro = "Tema em Análise";
            facadeRepercussaoGeralQlik.selecionaCampo(facadeRepercussaoGeralQlik.SITUACAO_REPERCUSSAO_GERAL, [parametro]);
        });
    });
	
	$("#situacaoMeritoJulgado").on('click', function () {
        qlikSense.getAplicacao(qlikSense.REPERCUSSAOGERAL).then(function (facadeRepercussaoGeralQlik) {
            var parametro = "Julgado";
            facadeRepercussaoGeralQlik.selecionaCampo(facadeRepercussaoGeralQlik.SITUACAO_MERITO_RG_MINISTRO, [parametro]);
        });
    });

    $("#situacaoMeritoPendente").on('click', function () {
        qlikSense.getAplicacao(qlikSense.REPERCUSSAOGERAL).then(function (facadeRepercussaoGeralQlik) {
            var parametro = "Pendente";
            facadeRepercussaoGeralQlik.selecionaCampo(facadeRepercussaoGeralQlik.SITUACAO_MERITO_RG_MINISTRO, [parametro]);
        });
    });
});


//GOOGLE ANALYTICS
$('#repgeral-qtd-temas-categoria').on('click', function(){
	ga('send', 'event', 'Repercussão Geral', 'Quantidade de Temas', 'Por Categoria');
});
$('#repgeral-qtd-sobrestados-categoria').on('click', function(){
	ga('send', 'event', 'Repercussão Geral', 'Quantidade de Sobrestados', 'Por Categoria');
});
$('#repgeral-qtd-sobrestados-data').on('click', function(){
	ga('send', 'event', 'Repercussão Geral', 'Quantidade de Sobrestados', 'Por Data');
});
$('#repgeral-qtd-temas-data').on('click', function(){
	ga('send', 'event', 'Repercussão Geral', 'Quantidade de Temas', 'Por Data');
});

