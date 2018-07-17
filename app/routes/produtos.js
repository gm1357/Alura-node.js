module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        connection = app.infra.connectionFactory();
        produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results){
            res.format({
                html: function(){
                    res.render("produtos/lista",{lista:results});
                },
                json: function(){
                    res.json(results);
                }
            });
        });

        connection.end();
    });

    app.get("/produtos/form", function(req, res) {
        res.render("produtos/form");
    });

    app.post("/produtos", function(req, res) {
        produto = req.body;

        connection = app.infra.connectionFactory();
        produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(err, results){
            res.redirect('/produtos');
        });

        connection.end();
    });

    app.delete("/produtos", function (req, res) {
        produto_id = req.body.produto_id;

        connection = app.infra.connectionFactory();
        produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.deleta(produto_id, function(err, results){
            res.redirect('/produtos');
        });

        connection.end();
    });
}