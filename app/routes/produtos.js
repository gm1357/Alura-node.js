module.exports = function(app) {
    app.get("/produtos",function(req, res, next) {
        connection = app.infra.connectionFactory();
        produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results){

            if(err){
                return next(err);
            }

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
        res.render("produtos/form", {validationErrors: '', produto: ''});
    });

    app.post("/produtos", function(req, res) {
        produto = req.body;

        req.assert('titulo', 'Titulo deve ser preenchido').notEmpty();
        req.assert('preco','Preco deve ser um número').isFloat();

        var errors = req.validationErrors();
        if(errors){
            res.status(400);
            res.format({
                html: function(){
                    res.render("produtos/form",{validationErrors:errors,produto:produto});
                },
                json: function(){
                    res.send(errors);
                }
            });
            return;
        }

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