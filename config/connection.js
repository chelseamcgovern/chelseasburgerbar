/* Setup the MySQL connection
*/
var mysql = require('mysql');
var connection;

if(process.env.JAWDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
	port: '3306',
	host: 'localhost',
	user: 'root',
	password: 'Deltav_01',
	database: 'burgers_db',
});

/* Make that connection!
*/
connection.connect(function(err) {
  if (err) {
    console.error('Oh no - error connecting to database: ' + err.stack);
    return;
  };
  console.log('Ah yes - connected as id ' + connection.threadId);
});
/* Export the connection for the ORM to use.
*/
module.exports = connection;