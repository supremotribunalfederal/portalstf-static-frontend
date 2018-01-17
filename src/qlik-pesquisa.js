function PesqQlik(e, app) {

    if (e.value.length<3) return;
    app.searchSuggest(e.value, ["nome","sobrenome"], SearchReturn);

}


function SearchReturn(ret) {

    var str = "";
    reply.qResult.qSuggestions.forEach(function (sugg) {
        str += sugg.qValue + ' ';
    });
    alert(str);

}




function PegaValores(e, app) {

    var dados = app.field(e.value).getData();

    for (var i = 0; i < dados.rows.length; i++) {

        var x = document.getElementById("cboValores");
        var option = document.createElement("option");
        option.text = dados.rows[i].qText;
        x.add(option);

    }

}


function clickMinistro(ministro, appid){
    var imagens = document.getElementById("lista_ministros").getElementsByTagName("img");
    for (var i = imagens.length - 1; i >= 0; i--) {
        var temp = imagens[i];
        if(temp.id != 'tribunal' & temp.id != ministro.id) $(temp).css("filter","grayscale(100%)");
    }
    var app = qlikApps[appid];
    app.field("Relator").selectValues([ministro.id]);
}

function clickTodoTribunal(appid){
    var imagens = document.getElementById("lista_ministros").getElementsByTagName("img");
    for (var i = imagens.length - 1; i >= 0; i--) {
        var temp = imagens[i];
        $(temp).css("filter","grayscale(0%)");
    }
    var app = qlikApps[appid];
    app.clearAll();
}


function MostraCampos() {

    app.getList("FieldList", function (reply) {
        var str = "";
        $.each(reply.qFieldList.qItems, function (key, value) {
            str += value.qName + '\r\n';
        });
        alert(str);
    });
}
