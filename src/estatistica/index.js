import style from '../../assets/scss/secoes/estatistica/estatistica.scss';
import $ from 'jquery';
import moment from 'moment';
import '../qlik/qlik-sense-facade.js';
import '../qlik/aplicacao-acervo.js';

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
    }
    
};

qlikSense.getAplicacao(qlikSense.ACERVO).then(function(facadeAcervoQlik) {

    facadeAcervoQlik.getClasses().then(populaComboBox('comboClasses'));
    facadeAcervoQlik.getTiposOrgao().then(populaComboBox('comboLocalizacao'));
    facadeAcervoQlik.getTiposClasse().then(populaComboBox('comboTipoClasse'));

});

window.clickMinistro = function(ministro) {
    var imagem = document.getElementById(ministro.id);
    imagem.classList.toggle("cinza");

    qlikSense.getAplicacao(qlikSense.ACERVO).then(function(facadeAcervoQlik) {

        var selecionados = [].slice.call(document.querySelectorAll('.card-imagem-ministros:not(.cinza)'));
        var valores = selecionados.reduce(function(valores, ministro) {
            valores.push(ministro.id);
            return valores;
        }, []);

        facadeAcervoQlik.selecionaCampo(facadeAcervoQlik.CAMPO_NOME_MINISTRO, valores);
    });
};


window.clickTodoTribunal = function() {
    var imagens = [].slice.call(document.querySelectorAll('.card-imagem-ministros'));
    imagens.forEach(function(imagem) {
        imagem.classList.add('cinza');
    });

    qlikSense.getAplicacao(qlikSense.ACERVO).then(function(facadeAcervoQlik) {
        facadeAcervoQlik.limpaSelecoesEFiltros();
    });

    $("#comboClasses").val('');
    $("#comboTipoClasse").val('');
    $("#comboLocalizacao").val('');
};


$(function(){
    //filtra pela classe
    $("#comboClasses").change(function(){
        qlikSense.getAplicacao(qlikSense.ACERVO).then(function(facadeAcervoQlik) {
            var valorSelecionado = $("#comboClasses").val();
            facadeAcervoQlik.selecionaCampo(facadeAcervoQlik.CAMPO_CLASSE_PROCESSO, [valorSelecionado]);
        });
    });

    //filtra 
    $("#comboTipoClasse").change(function() {
        qlikSense.getAplicacao(qlikSense.ACERVO).then(function(facadeAcervoQlik) {
            var valorSelecionado = $("#comboTipoClasse").val();
            facadeAcervoQlik.selecionaCampo(facadeAcervoQlik.CAMPO_TIPO_CLASSE_PROCESSO, [valorSelecionado]);
        });
    });

    //filtra 
    $("#comboLocalizacao").change(function(){
        qlikSense.getAplicacao(qlikSense.ACERVO).then(function(facadeAcervoQlik) {
            var valorSelecionado = $("#comboLocalizacao").val();
            facadeAcervoQlik.selecionaCampo(facadeAcervoQlik.CAMPO_TIPO_ORGAO_PROCESSO, [valorSelecionado]);
        });
    });
});