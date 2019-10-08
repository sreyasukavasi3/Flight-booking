var express = require('express');
var app = express();
var mysql = require('mysql');
var server=require("http").createServer(app);

function getMYSQLConnection() {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "honey123",
    database: "username"
  });
server.listen(8080);
}


app.use(express.static('Webpage'));
app.get('/login_pg', function (req, res) {
  res.sendFile( path.join(__dirname+ "/" + "htmlfiles/login_pg.html") );
});
app.post('/verify', function (req, res) {
    var response ={ 
                    username:req.body.username,
                    password:req.body.password,
                    };
    con.query('SELECT username, password FROM username WHERE username = ?;',response.username, function (error, result, fields) {
        if (error) {
                    res.send({
                                "code":400,
                                "failed":"error ocurred"
                            });
                    }
        else{
            if(result.length >0){
                if(result[0].password == response.password){
                console.log("login successful");
                var id = result[0].id;
                res.redirect('/login_pg'+id);
                    }
                else{
                console.log("login failed");
                res.sendFile( path.join(__dirname+ "/" + "htmlfiles/loginfailed.html") );
          }
                            }
            else{
                console.log("login failed");
                 res.sendFile( path.join(__dirname+ "/" + "htmlfiles/loginfailed.html") );
                }           
            }
    });

});
app.get('/new_user', function(req,res){
    res.sendFile(path.join(__dirname+ "/" + "htmlfiles/signup.html") );
});
app.post('/new_user', function(req,res){
    var response ={
                    name:req.body.name,
                    username:req.body.username,
                    password:req.body.password
                    };
    console.log(response.name);
    con.query("INSERT INTO username (username, password, repeat_password) VALUES ('"+response.username+"','"+response.password+"','"+response.repeat_password+"')", function(error,result,fields){
        if(error){
            res.send({
                                "code":400,
                                "failed":"error ocurred"
                            });
                }
        else {
            console.log("Successfully Registered");
             res.redirect('/homepage');
            
            }
    });
});
