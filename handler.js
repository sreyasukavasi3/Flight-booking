exports.register = function(req,res){
  // console.log("req",req.body);
  var today = new Date();
  var users={
    
    "Email":req.body.Email,
    "password":req.body.password,
    "Repeat password":req.body.Repeatpassword,
    
  }
  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user registered sucessfully"
        });
  }
  });
}

