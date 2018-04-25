/**
 * Registra a aplicação ACERVO no módulo de integração com o Qlik Sense.
 *
 * A API do Qlik é baseada em callbacks. Esta aplicação, no entanto,
 * converte o modelo de callbacks para trabalhar com Promises por meio
 * da biblioteca Q (https://github.com/kriskowal/q).
 *
 *
 * # Informações disponíveis:
 * |-- GRAFICO_DE_PRODUTIVDADE
 * |-- GRAFICO_ACERVO_ACUMULADO
 * |-- GRAFICO_ACERVO_POR_CLASSE
 * |-- GRAFICO_ACERVO_POR_ESTADO
 * |-- QUANTIDADE_LOCALIZACAO
 * |-- QUANTIDADE_ACERVO_ATUAL
 * |-- QUANTIDADE_ACERVO_ANTERIOR
 * |-- QUANTIDADE_ACERVO_ATUAL_BAIXADOS
 * |-- QUANTIDADE_ACERVO_ATUAL_RECEBIDOS
 *
 *
 * # Campos disponíveis:
 * |-- CAMPO_NOME_MINISTRO
 * |-- CAMPO_CLASSE_PROCESSO
 * |-- CAMPO_TIPO_ORGAO_PROCESSO
 * |-- CAMPO_TIPO_CLASSE_PROCESSO
 *
 *
 * # Funcionalidades diponíveis:
 * | 
 * +--# aplicacao.isInicializada() : @return boolean
 *    |
 *    |-- @desc Informa se a aplicação foi inicializada
  *  
 * +--# aplicacao.inicializa(app) : @return Promise(boolean)
 *    |
 *    |-- @desc Inicializa a FACADE com uma referência direta para a aplicação do Qlik
 *    |         e retorna uma promise resolvida quando a inicialização for concluída
 *    |-- @param app Conexão para a aplicação real no Qlik Sense
 *
 * +--# aplicacao.getClasses() : @return Promise(array de strings)
 *    |
 *    |-- @desc Recupera todas as classes processuais registradas no qlik numa promise
 *              para serem utilizadas em filtros na tela
 *
 * +--# aplicacao.getTiposClasse() : @return Promise(array de strings)
 *    |
 *    |-- @desc Recupera todos os tipos de classes processuais registrados no qlik numa promise
 *              para serem utilizados em filtros na tela
 *
 * +--# aplicacao.getTiposOrgao() : @return Promise(array de strings)
 *    |
 *    |-- @desc Recupera todos os tipos de órgãos detentores de processos registrados no qlik numa promise
 *              para serem utilizados em filtros na tela
 *
 * +--# aplicacao.selecionaCampo(idDoCampo, valores) : @return void
 *    |
 *    |-- @desc Filtra determinado campo com os valores selecionados
 *    |-- @param idDoCampo Identificador do campo filtrado (Uma das constantes da aplicação)
 *    |-- @param valores Array com os valores para filtrar
 *
 * +--# aplicacao.limpaSelecoesEFiltros() : @return void
 *    |
 *    |-- @desc Limpa todos os filtros aplicados
 *
 * +--# aplicacao.acoplaObjeto(elemento) : @return void
 *    |
 *    |-- @desc Acopla a visualização de um objeto do Qlik em um elemento HTML
 *    |-- @param elemento Elemento html que renderizará uma informação provida pela aplicação
 */
module.exports = (function(qlikSense) {
    
    /**
     * Expõe a todas as funcionalidades disponíveis na aplicação Qlik
     * de maneira transparente.
     */
    var aplicacao = {
        id: qlikSense.ACERVO
    };

    /**
     * Constantes que identificam cada campo disponível na aplicação
     */
    aplicacao.CAMPO_NOME_MINISTRO = 'Nome Ministro';
    aplicacao.CAMPO_CLASSE_PROCESSO = 'Classe Processo';
    aplicacao.CAMPO_TIPO_ORGAO_PROCESSO = 'Tipo Órgão Processo';
    aplicacao.CAMPO_TIPO_CLASSE_PROCESSO = 'Tipo Classe Processo';
    
    /**
     * Constantes que identificam cada informação fornecida pela aplicação
     */
    aplicacao.GRAFICO_DE_PRODUTIVDADE = 'JtzRJp';
    aplicacao.GRAFICO_ACERVO_ACUMULADO = 'VSBmTY';
    aplicacao.GRAFICO_ACERVO_POR_CLASSE = 'SrkTj';
    aplicacao.GRAFICO_ACERVO_POR_ESTADO = 'TMpXp';

    aplicacao.QUANTIDADE_LOCALIZACAO = 'wTZPaVB';
    aplicacao.QUANTIDADE_POR_PROCEDENCIA = 'TMpXp';
    aplicacao.QUANTIDADE_ACERVO_ATUAL = 'LUjaAP';
    aplicacao.QUANTIDADE_ACERVO_ANTERIOR = 'BnFJhF';
    aplicacao.QUANTIDADE_ACERVO_ATUAL_BAIXADOS = 'PmpVAm';
    aplicacao.QUANTIDADE_ACERVO_ATUAL_RECEBIDOS = 'fqJpp';

    
    /**
     * Referência para a aplicação ACERVO no Qlik Sense.
     */
    var aplicacaoNoQlik = null;

    aplicacao.isInicializada = function() {
        return aplicacaoNoQlik != null;
    };

    aplicacao.inicializa = function(app) {
        if (aplicacao.isInicializada()) {
            return Q(true);
        }

        aplicacaoNoQlik = app;

        aplicacao.campos = {};
        aplicacao.campos[aplicacao.CAMPO_CLASSE_PROCESSO] = aplicacaoNoQlik.field(aplicacao.CAMPO_CLASSE_PROCESSO);
        aplicacao.campos[aplicacao.CAMPO_TIPO_ORGAO_PROCESSO] = aplicacaoNoQlik.field(aplicacao.CAMPO_TIPO_ORGAO_PROCESSO);
        aplicacao.campos[aplicacao.CAMPO_TIPO_CLASSE_PROCESSO] = aplicacaoNoQlik.field(aplicacao.CAMPO_TIPO_CLASSE_PROCESSO);

        aplicacao.valoresCampos = {};
        aplicacao.valoresCampos[aplicacao.CAMPO_CLASSE_PROCESSO] = 'nao-carregado';
        aplicacao.valoresCampos[aplicacao.CAMPO_TIPO_ORGAO_PROCESSO] = 'nao-carregado';
        aplicacao.valoresCampos[aplicacao.CAMPO_TIPO_CLASSE_PROCESSO] = 'nao-carregado';

        return Q(true);
    };

    /**
     * Carrega os dados de um determinado campo e retorna promise(valores) com 
     * os valores do campo já devidamente tratados.
     */
    var getValorDoCampo = function(idDoCampo) {
        if (aplicacao.valoresCampos[idDoCampo] == 'nao-carregado') {
            var deferred = Q.defer();
            
            qlikSense.armazenaValoresDoCampo(aplicacao.campos[idDoCampo], function(valores) {
                aplicacao.valoresCampos[idDoCampo] = valores;
                deferred.resolve(valores);
            });

            return deferred.promise;
        }
        
        return Q(aplicacao.valoresCampos[idDoCampo]);
    };

    aplicacao.getClasses = function() {
        return getValorDoCampo(aplicacao.CAMPO_CLASSE_PROCESSO);
    };

    aplicacao.getTiposClasse = function() {
        return getValorDoCampo(aplicacao.CAMPO_TIPO_CLASSE_PROCESSO);
    };

    aplicacao.getTiposOrgao = function() {
        return getValorDoCampo(aplicacao.CAMPO_TIPO_ORGAO_PROCESSO);
    };

    /**
     * Seleciona os valores em um campo para executar um filtro nele.
     */
    aplicacao.selecionaCampo = function(idDoCampo, valores) {
        aplicacaoNoQlik.field(idDoCampo).selectValues(valores);
    };

    aplicacao.limpaSelecoesEFiltros = function() {
        aplicacaoNoQlik.clearAll();
    };

    /**
     * Acopla um objeto do Qlik em um elemento HTML da página.
     */
    aplicacao.acoplaObjeto = function(elemento) {
        var idDoObjetoNaAplicacao = aplicacao[elemento.dataset.qlikObjid];
        aplicacaoNoQlik.getObject(elemento, idDoObjetoNaAplicacao);
    };

    /**
     * Fecha a conexão da aplicação com o Qlik.
     */
    aplicacao.fecha = function() {
        aplicacaoNoQlik.close();
    };

    qlikSense.registraAplicacao(aplicacao);

})(qlikSense);