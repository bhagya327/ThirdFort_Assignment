var mysql = require('mysql');


// connection configurations
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'thirdfort'
});
// connect to database
connection.connect();

module.exports = connection;
