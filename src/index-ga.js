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
$('#jurisprudencia-sumulas-aplicacao').on('click', function(){
	ga('send', 'event', 'Pagina Home', 'Jurisprudência', 'Súmulas - Aplicação de súmulas no STF');
});