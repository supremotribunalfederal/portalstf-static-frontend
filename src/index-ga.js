import $ from 'jquery';
//event tracker do Google Analytics


//contato
$('#contato-topo').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Contato', 'Fale conosco topo acessível');
});

//menu acessibilidade
$('#conteudo-acessibilidade').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Acessibilidade', 'Clicou - 1 - Conteúdo');
});
$('#menu-acessibilidade').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Acessibilidade', 'Clicou - 2 - Menu');
});
$('#busca-acessibilidade').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Acessibilidade', 'Clicou - 3 - Busca');
});
$('#rodape-acessibilidade').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Acessibilidade', 'Clicou - 4 - Rodapé');
});


//link para sistemas
$('#sistemas-peticionamento').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Link para Sistemas', 'Painel do Peticionador');
});


//links internacionais
$('#internacional-ingles').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Links internacionais', 'Inglês');
});
$('#internacional-espanhol').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Links internacionais', 'Espanhol');
});
$('#internacional-portugues').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Links internacionais', 'Português');
});


//links para servidores
$('#servidor-contracheque').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Links para servidores', 'Contracheque');
});
$('#servidor-margem').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Links para servidores', 'Margem Consignável');
});
$('#servidor-plano-saude').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Links para servidores', 'Plano de Saúde');
});
$('#servidor-ead').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Links para servidores', 'Educação a distância');
});
$('#servidor-gabinete-virtual').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Links para servidores', 'Gabinete Virtual');
});
$('#servidor-correio-eletronico').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Links para servidores', 'Correio Eletrônico');
});
$('#servidor-imprensa').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Links para servidores', 'Destaques do STF na imprensa');
});


//caixa de jurisprudência
$('#jurisprudencia-pp-ramo-direito').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Pesquisa pronta - Por Ramo do Direito');
});
$('#jurisprudencia-pp-casos-notorios').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Pesquisa pronta - Casos notórios');
});
$('#jurisprudencia-js-temas-relevantes').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Jurisprudência selecionada - Temas relevantes');
});
$('#jurisprudencia-js-indicada-ministros').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Jurisprudência selecionada - Indicada por Ministros');
});
$('#jurisprudencia-acordaos-inteiro-teor').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Acórdãos - Inteiro teor de acórdãos');
});
$('#jurisprudencia-sumulas').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Súmulas - Súmulas');
});
$('#jurisprudencia-sumulas-vinculantes').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Súmulas - Súmulas vinculantes');
});
$('#jurisprudencia-sumulas-propostas').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Súmulas - Propostas de súmulas vinculantes');
});
$('#jurisprudencia-sumulas-aplicacao').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Súmulas - Aplicação de súmulas no STF');
});
$('#jurisprudencia-informativos-semanal').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Informativos - Informativo Semanal');
});
$('#jurisprudencia-informativos-temas').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Informativos - Informativo por Temas');
});
$('#jurisprudencia-maisinfo-repositorios').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Mais Informações - Repositório de jurisprudência');
});
$('#jurisprudencia-maisinfo-teses').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Mais Informações - Teses Jurídicas');
});
$('#jurisprudencia-maisinfo-omissao').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Mais Informações - Omissão inconstitucional');
});
$('#jurisprudencia-maisinfo-glossario').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Mais Informações - Glossário jurídico');
});


//operadores/links da pesquisa jurisprudencia
$('#tesauro').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Pesquisa', 'Jurisprudencia - Tesauro');
});
$('#pesquisa-jurisprudencia-dicas').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Pesquisa', 'Jurisprudencia - Dicas');
});
$('#operador-adj').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Pesquisa', 'Jurisprudencia - Operador ADJ');
});
$('#operador-mesmo').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Pesquisa', 'Jurisprudencia - Operador MESMO');
});
$('#operadorcifrao').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Pesquisa', 'Jurisprudencia - Operador $');
});
$('#operadorcifrao').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Pesquisa', 'Jurisprudencia - Operador $');
});
$('#operadorcifrao').on('click', function(){
	ga('send', 'event', 'Pagina Geral', 'Pesquisa', 'Jurisprudencia - Operador $');
});


//card da transparência
$('#transparencia-gestao-pessoas').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Transparência', 'Gestão de Pessoas');
});
$('#transparencia-licitacoes').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Transparência', 'Licitações');
});
$('#transparencia-orcamento').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Transparência', 'Orçamento e Finanças');
});
$('#transparencia-sobrestf').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Transparência', 'Conheça mais sobre o STF');
});
$('#transparencia-vermais').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Transparência', 'Ver o Portal da Transparência');
});

//Supremo em Números
$('#supremo-em-numeros').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Supremo em Números', 'Quero conhecer');
});

//Notícias
$('#noticia-informacao-util-sim').on('click', function(){
	ga('send', 'event', 'Notícia', 'Classificação de utilidade', 'Sim');
});

$('#noticia-informacao-util-nao').on('click', function(){
	ga('send', 'event', 'Notícia', 'Classificação de utilidade', 'Não');
});

$('#noticia-interno-imprimir-inferior').on('click', function() {
	ga('send', 'event', 'Notícia', 'Impressão', 'Imprimir');
});

$('#noticia-interno-imprimir-superior').on('click', function() {
	ga('send', 'event', 'Notícia', 'Impressão', 'Imprimir');
});

//Textos
$('#texto-informacao-util-sim').on('click', function(){
	ga('send', 'event', 'Texto', 'Classificação de utilidade', 'Sim');
});

$('#texto-informacao-util-nao').on('click', function(){
	ga('send', 'event', 'Texto', 'Classificação de utilidade', 'Não');
});

$('#texto-interno-imprimir-inferior').on('click', function() {
	ga('send', 'event', 'Texto', 'Impressão', 'Imprimir');
});

$('#texto-interno-imprimir-superior').on('click', function() {
	ga('send', 'event', 'Texto', 'Impressão', 'Imprimir');
});