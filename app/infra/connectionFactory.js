require('dotenv').load();
var mysql = require('mysql');

module.exports = function() {
    return connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password : process.env.DB_PASS,
        database: "casadocodigo_nodejs",
    });
}