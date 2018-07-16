require('dotenv').load();
var mysql = require('mysql');

function createDBConnection() {
    return connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password : process.env.DB_PASS,
        database: "casadocodigo_nodejs",
    });
}

module.exports = function() {
    return createDBConnection;
}