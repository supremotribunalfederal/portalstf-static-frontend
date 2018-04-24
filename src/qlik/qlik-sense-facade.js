import $ from 'jquery';
import 'q/q.js';

/**
 * Expõe uma fachada para interagir com o Qlik Sense, simplificando sua API,
 * e facilitar a manutenção.
 * 
 * A API do Qlik é baseada em callbacks. Este módulo, no entanto,
 * converte o modelo de callbacks para trabalhar com Promises por meio
 * da biblioteca Q (https://github.com/kriskowal/q).
 * 
 * # Aplicações disponíveis:
 * |
 * |-- ACERVO
 *
 * 
 * Funcionalidades disponíveis:
 * 
 * # qlikSense.getAplicacao(idDaAplicacao) : @return Promise(aplicacao)
 * |
 * |-- @desc Retorna promise com referência para aplicação do Qlik
 * |-- @param idDaAplicacao Constante com id da aplicação no Qlik
 *
 * # qlikSense.aplicacaoExiste(idDaAplicacao) : @return boolean
 * |
 * |-- @desc Informa se uma determinada aplicação foi registrada no módulo do Qlik
 * |-- @param idDaAplicacao Constante com id da aplicação no Qlik
 *
 * # qlikSense.registraAplicacao(aplicacao) : @return void
 * |
 * |-- @desc Registra aplicação no módulo do Qlik
 * |-- @param aplicacao Aplicação registrada no módulo
 *
 * # qlikSense.getConexaoDiretaComQlik : @return Qlik
 * |
 * |-- @desc Retorna referência direta da conexão com o Qlik
 *
 */
module.exports = (function ($) {
    /**
     * Configuração de conexão com o Qlik Sense
     */
    var config = {
        host: 'transparencia.stf.jus.br',
        prefix: '/',
        port: 80,
        isSecure: false
    };
    /**
     * Configura o RequireJS, AMD utilizado pelo Qlik para carregar
     * o código Javascript sua API de integração.
     */
    window.requirejs.config({
        baseUrl: (config.isSecure ? "https://" : "http://")
            + config.host
            + (config.port ? ":" + config.port : "")
            + config.prefix
            + "resources"
    });
    // variável que guarda a conexão com o servidor do Qlik
    var qlik = null;
    var getConexaoDiretaComQlik = function () {
        return qlik;
    };
    /**
     * Promises armazenadas e resolvidas quando a conexão com
     * o servidor do Qlik for estabelecida.
     */
    var observers = [];
    var onLoad = function () {
        if (qlik) {
            return Q(qlik);
        }
        var deferred = Q.defer();
        observers.push(deferred);
        return deferred.promise;
    };
    var notificaCarregamento = function () {
        var promise = observers.shift();
        while (promise) {
            promise.resolve(qlik);
            promise = observers.shift();
        }
    };
    /**
     * Seleciona os elementos da página com as classes embeddedArea e qlik-autoload
     * e carrega esses objetos automaticamente do qlik.
     */
    var appsAutoload = {};
    var carregaObjetosAutoLoad = function () {
        var elementos = [].slice.call(document.querySelectorAll('.embeddedArea.qlik-autoload'));
        elementos.forEach(function (elemento) {
            var nomeDaAplicacao = elemento.dataset.qlikAppName;
            if (nomeDaAplicacao) {
                getAplicacao(modulo[nomeDaAplicacao]).then(function (app) {
                    app.acoplaObjeto(elemento);
                });
            }
            else {
                var idDaAplicacao = elemento.dataset.qlikAppid;
                var idDoObjetoNaAplicacao = elemento.dataset.qlikObjid;
                var aplicacaoNoQlik = appsAutoload[idDaAplicacao];
                if (!aplicacaoNoQlik) {
                    aplicacaoNoQlik = qlik.openApp(idDaAplicacao, config);
                    appsAutoload[idDaAplicacao] = aplicacaoNoQlik;
                }
                aplicacaoNoQlik.getObject(elemento, idDoObjetoNaAplicacao);
            }
        });
    };
    /**
     * Variável que armazena referências para todas as aplicações
     * do Qlik que se registram no módulo. A chave do objeto é o ID
     * da aplicação do Qlik, e o valor é um FACADE que disponibiliza
     * todas as informações e operações possíveis na aplicação, de forma
     * transparente, sem que o usuário precise saber detalhes internos
     * do Qlik Sense.
     */
    var aplicacoesDoQlik = {};
    var registraAplicacao = function (facade) {
        aplicacoesDoQlik[facade.id] = facade;
    };

    var aplicacaoExiste = function (id) {
        return aplicacoesDoQlik[id] != undefined;
    };
    /**
     * Retorna uma promise que, quando resolvida, fornece uma referência
     * para um facade que abstrai uma aplicação do Qlik Sense.
     */
    var getAplicacao = function (idDaAplicacao) {
        if (!aplicacaoExiste(idDaAplicacao)) {
            return Q.reject('Facade da aplicação ' + idDaAplicacao + ' não registrado no módulo Facade do Qlik!');
        }
        return onLoad().then(function (qlik) {
            var facade = aplicacoesDoQlik[idDaAplicacao];
            if (!facade.isInicializada()) {
                // verifica se app já foi utilizada no autoload de objetos
                var app = appsAutoload[facade.id];
                if (!app) {
                    app = qlik.openApp(facade.id, config);
                }
                else {
                    delete appsAutoload[facade.id];
                }
                return facade.inicializa(app).thenResolve(facade);
            }
            return facade;
        });
    };

    /**
     * Carrega valores de um determinado campo do Qlik
     * 
     * @param campoQlik Campo do Qlik Sense (http://help.qlik.com/en-US/sense-developer/3.0/Subsystems/APIs/Content/FieldAPI/QField.htm)
     * @param callbackComValores
     */
    var armazenaValoresDoCampo = function(campoQlik, callbackComValores) {
        campoQlik.getData();
        campoQlik.OnData.bind(function observer() {
            var valores = campoQlik.rows.map(function(element) {
                return element.qText;
            });
            callbackComValores(valores);

            campoQlik.OnData.unbind(observer);
        });
    };

    /**
     * Pega uma conexão direta com o Qlik Sense por meio do
     * RequireJS e a armazena na variável 'qlik'.
     * Após pegar a conexão, notifica o carregamento do Qlik
     * para resolver todas as Promises que requisitaram aplicações.
     */
    requirejs(["js/qlik"], function (conexaoComQlik) {
        qlik = conexaoComQlik;
        qlik.setOnError(function (error) {
            console.log('erro no qlik', error);
            alert(error.message);
        });
        notificaCarregamento();
        carregaObjetosAutoLoad();
    });
    /**
     * Registra listener para fechar todas as aplicações abertar
     * ao sair da página atual.
     */
    $(window).on('beforeunload', function () {
        var fechaApp = function (aplicacao) {
            aplicacao.fecha();
        };
        Object.values(aplicacoesDoQlik).forEach(fechaApp);
        Object.values(appsAutoload).forEach(fechaApp);
    });
    /**
     * Objeto que expõe a parte pública do FACADE de integração com o Qlik Sense.
     */
    var modulo = {};
    /**
     * Constantes que identificam as aplicações no Qlik.
     */
    modulo.ACERVO = '9e787043-f90c-4781-a48b-c1351ba17379';
    modulo.REPERCUSSAOGERAL = 'b88460cb-8745-4fbc-973b-ddfee50c02aa';
    /**
     * API pública do módulo.
     */
    modulo.getAplicacao = getAplicacao;
    modulo.aplicacaoExiste = aplicacaoExiste;
    modulo.registraAplicacao = registraAplicacao;
    modulo.armazenaValoresDoCampo = armazenaValoresDoCampo;
    modulo.getConexaoDiretaComQlik = getConexaoDiretaComQlik;
    return modulo;
})(jQuery);


// ##################################################
// # Funções utilitárias para trabalhar com o Qlik. #
// ##################################################
