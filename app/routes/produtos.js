module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        connection = app.infra.connectionFactory();

        connection.query('select * from livros', function(err, results){
            res.render('produtos/lista', {lista: results});
        });

        connection.end();
    });
}