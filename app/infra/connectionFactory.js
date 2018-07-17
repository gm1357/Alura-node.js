require('dotenv').load();
var mysql = require('mysql');

function createDBConnection() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password : process.env.DB_PASS,
            database: "casadocodigo_nodejs",
        });
    }

    if (process.env.NODE_ENV === 'test') {
        return connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password : process.env.DB_PASS,
            database: "casadocodigo_nodejs_test",
        });
    }
}

module.exports = function() {
    return createDBConnection;
}