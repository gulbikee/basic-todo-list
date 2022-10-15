var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.set('view engine','ejs');
var moongose=require('mongoose');
const { resolveSoa } = require('dns');
moongose.connect('mongodb://localhost');
var i1=[];
app.post('/',function(req,res){

});
app.get('/',function(req,res){
    res.render('list',{newListItem:i1});
})