const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  port: 3306,
  user     : 'root',
  password : '',
  database : 'codelibrary'
});

connection.connect();

// connection.end();

module.exports = connection;