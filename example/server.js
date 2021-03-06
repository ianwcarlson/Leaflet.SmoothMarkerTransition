var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname,'..','src')));

http.listen(3698, function(){
  console.log('listening on *:3698');
});	