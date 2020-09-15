var express = require('express');
const app = express();


var mysql = require('mysql');

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: 'userdata'
});


connection.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    var email = "xyz@xyz.com";
    var password = "root";

    var insertcmd = "INSERT INTO login_info (email,password) values (?,?)";
    var values = [email,password];

    connection.query(insertcmd,values,function(err,result){
     if (err) throw err;
     console.log("1 entry recorded.");
    });
});

var server = app.listen(3000,()=>{
console.log("Server running at http://local host:3000");
});