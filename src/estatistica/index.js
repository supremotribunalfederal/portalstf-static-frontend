import style from '../../assets/scss/secoes/estatistica/estatistica.scss';
import $ from 'jquery';
import moment from 'moment';


var appid = '9e787043-f90c-4781-a48b-c1351ba17379';

//Carrega os objetos do qlik
require(["js/qlik"], function (qlik) {
    var app = qlik.openApp('9e787043-f90c-4781-a48b-c1351ba17379', config);
    popula(app);
});

//Preenche as variáveis globais
function popula(app){
    var classes = app.field('Classe Processo').getData();
    var tipoClasses = app.field('Tipo Classe Processo').getData();
    var localizacoes = app.field('Tipo Órgão Processo').getData();

    classes.OnData.bind(function(){
        classes.rows.forEach(function(element) {
            var select = document.getElementById('comboClasses');
            var opt = document.createElement('option');
            opt.value = element.qText;
            opt.innerHTML = element.qText;
            select.appendChild(opt);
        }, this);
    });

    tipoClasses.OnData.bind(function(){
        tipoClasses.rows.forEach(function(tipoClasse) {
            var select = document.getElementById('comboTipoClasse');
            var opt = document.createElement('option');
            opt.value = tipoClasse.qText;
            opt.innerHTML = tipoClasse.qText;
            select.appendChild(opt);
        }, this);
    });

    localizacoes.OnData.bind(function(){
        localizacoes.rows.forEach(function(localizacao) {
            var select = document.getElementById('comboLocalizacao');
            var opt = document.createElement('option');
            opt.value = localizacao.qText;
            opt.innerHTML = localizacao.qText;
            select.appendChild(opt);
        }, this);
    });
}


function clickMinistro(ministro){
    var imagem = document.getElementById(ministro.id);
    imagem.classList.toggle("cinza")
    var app = qlikApps[appid];
    app.field("Nome Ministro").toggleSelect(ministro.id);
}


function clickTodoTribunal(){
    var imagens = document.getElementById("lista_ministros").getElementsByTagName("img");
    for (var i = imagens.length - 1; i >= 0; i--) {
        var temp = imagens[i];
        $(temp).css("filter","grayscale(100%)");
    }
    var app = qlikApps[appid];
    app.clearAll();
}


$(function(){
    //filtra pela classe
    $("#comboClasses").change(function(){
        var app = qlikApps[appid];
        var valorSelecionado = $("#comboClasses").val();
        app.field("Classe Processo").selectValues([valorSelecionado]);
    });

    //filtra
    $("#comboTipoClasse").change(function(){
        var app = qlikApps[appid];
        var valorSelecionado = $("#comboTipoClasse").val();
        app.field("Tipo Classe Processo").selectValues([valorSelecionado]);
    });

    //filtra
    $("#comboLocalizacao").change(function(){
        var app = qlikApps[appid];
        var valorSelecionado = $("#comboLocalizacao").val();
        app.field("Tipo Órgão Processo").selectValues([valorSelecionado]);
    });
});
