import style from '../../assets/scss/secoes/transparencia/transparencia.scss';

import $ from 'jquery';
//event tracker do Google Analytics

//include de pesquisa
$('#btnPesquisarDadosTransparencia').on('click', function(){
	console.log('ok');
	ga('send', 'event', 'Pagina Transparencia', 'Pesquisa', 'Pesquisa topo');
});

//blocos de estatísticas
$('#estatisticasTransparencia').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Estatisticas', 'Ver mais estatisticas');
});
$('#consulteRemuneracoes').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Estatisticas', 'Consulte as remunerações');
});
$('#baixeEditais').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Estatisticas', 'Baixe Editais e Acompanhe');
});
$('#pesquiseCompras').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Estatisticas', 'Pesquise as Compras');
});
$('#pesquiseDespesas').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Estatisticas', 'Pesquise as Despesas');
});
$('#vejaContratos').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Estatisticas', 'Veja os Contratos');
});

// Concursos e cargos públicos
$('#concursos1999').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Concursos e cargos públicos', 'Concursos a partir de 1999');
});
$('#cargosVagosOcupados').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Concursos e cargos públicos', 'Cargos vagos e ocupados');
});
$('#concursosLegislacao').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Concursos e cargos públicos', 'Legislação');
});

// Conheça mais sobre o STF
$('#listaServicosCidadao').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Conheça mais sobre o STF', 'Quero ver a lista de serviços');
});
$('#conhecerOSTF').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Conheça mais sobre o STF', 'Quero conhecer o STF');
});
$('#planejamento2020').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Conheça mais sobre o STF', 'Planejamento rumo a 2020');
});
$('#atividades2016').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Conheça mais sobre o STF', 'Relatório de atividades 2016');
});
$('#estrategiaMaisIformacoes').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Conheça mais sobre o STF', 'Mais informações');
});

// Gestão de pessoas - Demonstrativo de pessoal
$('#quantitativoServidores').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - Demonstrativo de pessoal', 'Quantitativo de servidores');
});
$('#remuneracaoServidores').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - Demonstrativo de pessoal', 'Remuneração dos servidores');
});
$('#membrosDemonstrativo').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - Demonstrativo de pessoal', 'Membros do Tribunal');
});
$('#servidoresEfetivos').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - Demonstrativo de pessoal', 'Servidores efetivos');
});
$('#outrosQuantitativos').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - Demonstrativo de pessoal', 'Outros quantitativos');
});

// Gestão de pessoas - mais informações
$('#membrosMaisInformacoes').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - mais informações', 'Membros do tribunal');
});
$('#magistradosConvocados').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - mais informações', 'Magistrados convocados');
});
$('#servidoresETerceirizados').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - mais informações', 'Servidores e terceirizados');
});
$('#cargosVagosEOcupados').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - mais informações', 'Cargos vagos e ocupados');
});

// Gestão de pessoas - consulte as indenizações
$('#auxilioMoradia').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - consulte as indenizações', 'Auxílio moradia');
});
$('#ajudaCusto').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - consulte as indenizações', 'Ajuda de custo');
});
$('#passagens').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - consulte as indenizações', 'Passagens');
});
$('#diarias').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão de pessoas - consulte as indenizações', 'Diárias');
});

// Gestão orçamentária e financeira
$('#execucaoDespesas').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão orçamentária e financeira', 'Execução de despesas');
});
$('#execucaoOrcamentaria').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão orçamentária e financeira', 'Execução orçamentária');
});
$('#limitacaoEmpenho').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão orçamentária e financeira', 'Limitação de empenho');
});
$('#descentralizaCreditos').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão orçamentária e financeira', 'Descentralização de créditos');
});
$('#receitas').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão orçamentária e financeira', 'Receitas');
});
$('#recursosTeseouro').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão orçamentária e financeira', 'Recursos do tesouro');
});
$('#relatorioGestaoFiscal').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão orçamentária e financeira', 'Relatório de gestão fiscal');
});
$('#relatorioSimplificado').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão orçamentária e financeira', 'Relatório simplificado');
});
$('#restosAPagar').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Gestão orçamentária e financeira', 'Restos a pagar');
});

// Despesas diversas
$('#consumoAgua').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Despesas diversas', 'Consumo de água');
});
$('#consumoEnergia').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Despesas diversas', 'Consumo de energia elétrica');
});
$('#consumoPapel').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Despesas diversas', 'Consumo de papéis para impressão');
});
$('#veiculos').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Despesas diversas', 'Veículos');
});
$('#imoveisFuncionais').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Despesas diversas', 'Imóveis funcionais');
});
$('#obrasEReformas').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Despesas diversas', 'Obras e reformas');
});

// Controle interno e externo
$('#auditoria').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Controle interno e externo', 'Auditoria');
});
$('#prestacaoContas').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Controle interno e externo', 'Prestação de contas');
});

// Não encontrou o que procurava
$('#centralCidadao').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Não encontrou o que procurava', 'Central do Cidadão');
});
$('#acessoAInformacao').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Não encontrou o que procurava', 'Acesso à informação');
});
$('#linksUteis').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Não encontrou o que procurava', 'Link úteis');
});
$('#contatos').on('click', function(){
	ga('send', 'event', 'Pagina Transparencia', 'Não encontrou o que procurava', 'Contatos');
});
