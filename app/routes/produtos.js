module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        connection = app.infra.connectionFactory();
        produtosBanco = new app.infra.ProdutosDAO(connection);

        produtosBanco.lista(function(err, results){
            res.render('produtos/lista', {lista: results});
        });

        connection.end();
    });
}