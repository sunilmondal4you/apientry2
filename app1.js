/**
 * Created by abc on 17/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',function(req,res) {
    res.send("Hello.");
});

app.get('/a/b',function(req,res) {
    var name=req.query.name;
    var email=req.query.email;
    res.send("Hello "+name+" your email id is "+email);
});

app.get('/a/b/c',function(req,res) {
    var user={"name":req.query.name,
            "email":req.query.email};
    res.send(user);
});

app.listen(3000,function() {
    console.log("Server 3000 is started.");
});