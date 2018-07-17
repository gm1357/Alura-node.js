process.env.NODE_ENV='test';

var app = require('../config/express')();
var request = require('supertest')(app);


describe('#ProdutosController', function() {
    beforeEach(function(done) {
        var connection = app.infra.connectionFactory();            
        connection.query("truncate livros;", function(ex,result){
            if(!ex){
                done();
            }
        });
    });

    it('#listagem de produtos json', function (done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)

    });

    it('#cadastro de um novo produto com dados invalidos', function (done) {
        request.post('/produtos')
            .send({titulo:"", descricao:"livro de teste"})
            .expect(400, done)

    });

    it('#cadastro de um novo produto com tudo preenchido', function (done) {
        request.post('/produtos')
            .send({titulo:"novo livro", descricao:"livro de teste", preco:20.50})
            .expect(302, done)
    });
});