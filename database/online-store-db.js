const mysql = require('mysql');

const connection = mysql.createConnection({
    debug: false,
    host: '127.0.0.1',
    port: 3306,
    database: 'sarraffe_cs355sp21',
    user: 'sarraffe_cs355sp21',
    password: 'sa7176501'
});

module.exports = connection;

