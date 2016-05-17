/**
 * Created by abc on 17/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/a',function(req,res) {
    res.send("Wellcome Sunil.");
});

app.post('/b',function(req,res) {
    res.send(req.body);
});

app.post('/a/b',function(req,res) {
    var name=req.body.name;
    res.send(name);
});

app.post('/c',function(req,res) {
    var email=req.body;
    res.send(email);
});

app.listen(3001,function () {
    console.log("Servar 3001 is started.");
});