import '../qlik/qlik-sense-facade.js';
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
module.exports = (function () {
    /**
     * Expõe a todas as funcionalidades disponíveis na aplicação Qlik
     * de maneira transparente.
     */
    var aplicacao = {
        id: qlikSense.REPERCUSSAOGERAL
    };

    /**
     * Constantes que identificam cada campo disponível na aplicação
     */
    aplicacao.CAMPO_NOME_MINISTRO = 'Relator';
    aplicacao.NUMERO_TEMA = 'Número Tema';
    aplicacao.CAMPO_CLASSE_PROCESSO = 'Classe Processo Paradigma';
    aplicacao.SITUACAO_REPERCUSSAO_GERAL = 'Situação Reconhecimento Repercussão Geral';
    aplicacao.PROCESSO_PARADIGMA = 'Processo Paradigma';
    aplicacao.SITUACAO_MERITO_RG_MINISTRO = 'Situação Julgamento Mérito Repercussão Geral';
    /**
     * Constantes que identificam cada informação fornecida pela aplicação
     */
    aplicacao.QUANTIDADE_SOBRESTADOS = 'pEqp';
    aplicacao.QUANTIDADE_TEMAS_SEM_RG = 'kPzDGe';
    aplicacao.QUANTIDADE_TEMAS_MERITO_NAO_JULGADO = 'RNAB';
    aplicacao.QUANTIDADE_TEMAS_MERITO_JULGADO = 'yeAFV';
    aplicacao.QUANTIDADE_TEMAS = 'MMzaKC';
    aplicacao.QUANTIDADE_REPERCUSSAO_GERAL_RECONHECIDA = 'jCZQdGm';
    aplicacao.QUANTIDADE_REPERCUSSAO_GERAL_NEGADA = 'XLHmpnR';
    aplicacao.QUANTIDADE_REPERCUSSAO_GERAL_TOTAL = 'dLqvJBz';
    aplicacao.QUANTIDADE_REPERCUSSAO_GERAL_EM_ANALISE = 'kbxua';
    aplicacao.TABELA_ACUMULADO_TEMAS = 'kBQWmJ';
    aplicacao.TABELA_SITUACAO_MERITO = `${QLIK.REPERCUSSAOGERAL.TABELA_SITUACAO_MERITO}`;
    aplicacao.TABELA_SITUACAO_RG = `${QLIK.REPERCUSSAOGERAL.TABELA_SITUACAO_RG}`;
    aplicacao.TABELA_SITUACAO_RECONHECIMENTO_RG = 'b60a6338-5e54-4c85-97bf-f8a6b0424eca';
    aplicacao.TABELA_MERITOS_JULGADOS_ANO = `${QLIK.REPERCUSSAOGERAL.TABELA_MERITOS_JULGADOS_ANO}`;;
    /**
     * Referência para a aplicação ACERVO no Qlik Sense.
     */
    var aplicacaoNoQlik = null;
    aplicacao.isInicializada = function () {
        return aplicacaoNoQlik != null;
    };
    aplicacao.inicializa = function (app) {
        if (aplicacao.isInicializada()) {
            return Q(true);
        }
        aplicacaoNoQlik = app;
        aplicacao.campos = {};
        aplicacao.campos[aplicacao.CAMPO_CLASSE_PROCESSO] = aplicacaoNoQlik.field(aplicacao.CAMPO_CLASSE_PROCESSO);
        aplicacao.campos[aplicacao.SITUACAO_REPERCUSSAO_GERAL] = aplicacaoNoQlik.field(aplicacao.SITUACAO_REPERCUSSAO_GERAL);
        aplicacao.campos[aplicacao.PROCESSO_PARADIGMA] = aplicacaoNoQlik.field(aplicacao.PROCESSO_PARADIGMA);
        aplicacao.campos[aplicacao.CAMPO_NOME_MINISTRO] = aplicacaoNoQlik.field(aplicacao.CAMPO_NOME_MINISTRO);
        aplicacao.campos[aplicacao.SITUACAO_MERITO_RG_MINISTRO] = aplicacaoNoQlik.field(aplicacao.SITUACAO_MERITO_RG_MINISTRO);
        aplicacao.valoresCampos = {};
        aplicacao.valoresCampos[aplicacao.CAMPO_CLASSE_PROCESSO] = 'nao-carregado';
        aplicacao.valoresCampos[aplicacao.SITUACAO_REPERCUSSAO_GERAL] = 'nao-carregado';
        aplicacao.valoresCampos[aplicacao.PROCESSO_PARADIGMA] = 'nao-carregado';
        aplicacao.valoresCampos[aplicacao.CAMPO_NOME_MINISTRO] = 'nao-carregado';
        aplicacao.valoresCampos[aplicacao.SITUACAO_MERITO_RG_MINISTRO] = 'nao-carregado';
        return Q(true);
    };
    /**
     * Carrega os dados de um determinado campo e retorna promise(valores) com
     * os valores do campo já devidamente tratados.
     */
    var getValorDoCampo = function (idDoCampo) {
        if (aplicacao.valoresCampos[idDoCampo] == 'nao-carregado') {
            var deferred = Q.defer();
            qlikSense.armazenaValoresDoCampo(aplicacao.campos[idDoCampo], function (valores) {
                aplicacao.valoresCampos[idDoCampo] = valores;
                deferred.resolve(valores);
            });
            return deferred.promise;
        }
        return Q(aplicacao.valoresCampos[idDoCampo]);
    };
    aplicacao.getClasses = function () {
        return getValorDoCampo(aplicacao.CAMPO_CLASSE_PROCESSO);
    };
    aplicacao.getSituacaoRepercussaoGeral = function () {
        return getValorDoCampo(aplicacao.SITUACAO_REPERCUSSAO_GERAL);
    };
    aplicacao.getProcessoParadigma = function () {
        return getValorDoCampo(aplicacao.PROCESSO_PARADIGMA);
    };
    aplicacao.getRelatores = function () {
        return getValorDoCampo(aplicacao.CAMPO_NOME_MINISTRO);
    };
    aplicacao.getSituacaoMeritoRGMinistro = function () {
        return getValorDoCampo(aplicacao.SITUACAO_MERITO_RG_MINISTRO);
    };
    /**
     * Seleciona os valores em um campo para executar um filtro nele.
     */
    aplicacao.selecionaCampo = function (idDoCampo, valores) {
        aplicacaoNoQlik.field(idDoCampo).selectValues(valores);
    };
    aplicacao.limpaSelecoesEFiltros = function () {
        aplicacaoNoQlik.clearAll();
    };
    /**
     * Acopla um objeto do Qlik em um elemento HTML da página.
     */
    aplicacao.acoplaObjeto = function (elemento) {
        var idDoObjetoNaAplicacao = aplicacao[elemento.dataset.qlikObjid];
        aplicacaoNoQlik.getObject(elemento, idDoObjetoNaAplicacao);
    };
    /**
     * Fecha a conexão da aplicação com o Qlik.
     */
    aplicacao.fecha = function () {
        alert('fechando aplicacao JURISPRUDENCIA');
        aplicacaoNoQlik.close();
    };
    qlikSense.registraAplicacao(aplicacao);
})();