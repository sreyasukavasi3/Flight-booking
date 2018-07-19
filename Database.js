var mysql      = require('mysql'); 
var connection = mysql.createConnection({ 
  host     : 'localhost', 
  user     : 'root', 
  password : 'honey', 
  database : 'username' 
});
connection.connect(); 
connection.query('SELECT * FROM information', function(err, rows, fields)  
{ 
  if (err) throw err; 
  console.log(rows); 
}); 
connection.end();
