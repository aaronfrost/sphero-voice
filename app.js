var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var q = require('q');
var _ = require('lodash');
var robot;

require('./ioconfig')(io);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

http.listen(3000, function(){
  console.log('listening on port 3000');
});

