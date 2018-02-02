import style from '../../assets/scss/secoes/jurisprudencia/jurisprudencia.scss';
import $ from 'jquery';
import validation from 'jquery-validation';

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
	//ga('send', 'event', 'Jurisprudencia', 'Pesquisa Inteiro Teor', 'Clique no botão');
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
    window.open('//stf.jus.br/portal/inteiroTeor/pesquisarInteiroTeor.asp?tipoPesquisa=pesquisarNumero&argumento=' + txtNumeroProcesso.value, '_blank');
}

//Pesquisa de inteiro teor de acordão.
$('#pesquisa-processo').submit(function(e){
    
    //JQUERY validation
    $('#pesquisa-processo').validate({
        //escolher onde posicionar a mensagem de erro
        errorPlacement: function(label, element) {
            label.addClass('alert alert-danger col-md-12 m-t-8 m-b-0');
            label.insertAfter('#btnPesquisaInteiroTeor');
        },
        
        wrapper: 'span',
        
        rules: {
            pesquisa: {
                required: true,
                digits: true,
            }
        },
        messages: {
            pesquisa: {
                required: "Informe o número do processo",
                digits: "Utilize apenas números na busca"
            }
        }
    });
    
    if( $('#pesquisa-processo').valid()){
        pesquisarInteiroTeorProcesso();        
    }
});

//Pesquisa de informativo semanal
$('#pesquisa-informativo-semanal').submit(function(e){
    var form = $('#pesquisa-informativo-semanal');
    form.validate({
        errorPlacement: function(label, element) {
            label.addClass('alert alert-danger col-md-10 m-t-8 m-b-0');
            label.insertAfter('#btn-pesquisa-informativo');
        },        
        rules: {
            pesquisa: {
                required: true,
            }
        },
        messages: {
            pesquisa: {
                required: "Informe o termo para a busca",
            }
        }
    });
    
    if(form.valid()){
       pesquisarTermoInformativoSTF($("#txt-pesquisa-informativo").val());    
    }
});

function pesquisarTermoInformativoSTF(termo) {
    var url = "http://www.stf.jus.br/portal/informativo/pesquisarInformativo.asp?s1=" + termo;
    window.open(url, "_blank");
}



//--------------------------
//Pesquisas prontas
$('#pesquisas-prontas').submit(function(e){
    var form = $('#pesquisas-prontas');
    form.validate({
        errorPlacement: function(label, element) {
            label.addClass('alert alert-danger col-md-10 m-t-8 m-b-0');
            label.insertAfter('#btn-pesquisas-prontas');
        },        
        rules: {
            pesquisa: {
                required: true,
            }
        },
        messages: {
            pesquisa: {
                required: "Informe o termo para a busca",
            }
        }
    });
    
    if(form.valid()){
       pesquisaPronta($("#txtTermoPesquisaPronta").val());    
    }
});


 function pesquisaPronta(termo) {
    var url = "http://www.stf.jus.br/portal/jurisprudencia/listarResultadoPesquisaJurisprudenciaFavorita.asp?palavraChaveJurisprudenciaFavorita=" + escape(termo);
    window.open(url, "_blank");
}


//-----------------------------------------------------
//pesquisa de súmulas vinculantes
	
//$('#txtNumero').on('focus', function() {
//        $('#txtPesquisaLivre').val('');
//});
//
//$('#txtPesquisaLivre').on('focus', function() {
//        $('#txtNumero').val('');
//});

//$.validator.addMethod( "require_from_group", function( value, element, options ) {
//	var $fields = $( options[ 1 ], element.form ),
//		$fieldsFirst = $fields.eq( 0 ),
//		validator = $fieldsFirst.data( "valid_req_grp" ) ? $fieldsFirst.data( "valid_req_grp" ) : $.extend( {}, this ),
//		isValid = $fields.filter( function() {
//			return validator.elementValue( this );
//		} ).length >= options[ 0 ];
//
//	// Store the cloned validator for future validation
//	$fieldsFirst.data( "valid_req_grp", validator );
//
//	// If element isn't being validated, run each require_from_group field's validation rules
//	if ( !$( element ).data( "being_validated" ) ) {
//		$fields.data( "being_validated", true );
//		$fields.each( function() {
//			validator.element( this );
//		} );
//		$fields.data( "being_validated", false );
//	}
//	return isValid;
//}, $.validator.format( "Please fill at least {0} of these fields." ) );
//
//$('#frmPesquisa').submit(function(event){
//    var form = $('#frmPesquisa');
//    form.validate({
//        errorPlacement: function(label, element) {
//            label.addClass('alert alert-danger col-md-10 m-t-8 m-b-0');
//            label.insertAfter('#btnPesquisarSumula');
//        },        
//        rules: {
//            
//            txtPesquisaLivre: {
//                require_from_group: [1, ".campos-sumula"]
////                required: function(element) {
////                    return !($("#txtNumero").is(':filled'));
////                    return (!$("#Phone").hasClass('valid'));
//            },
//            txtNumero: {
//                require_from_group: [1, ".campos-sumula"]
////                required: function(element) {
////                    return !($("#txtPesquisaLivre").is(':filled'));
////                }
//            },
////            txtRamoDireito: {
////                required: function(element) {
////                    $("#txtNumero").is(':empty');
////                }
////            }
//        },
//        messages: {
//            txtPesquisaLivre: {
//                required: "Informe o termo para a busca - txtPesquisaLivre",
//            },
//            txtNumero: {
//                required: "Informe o termo para a busca - txtNumero",
//            }
//        }
//        
//        
//    });
//    if ($(form).valid()){
//        $(form).submit();
//    } else {
//        event.preventDefault();
//    }
//});