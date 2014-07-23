var http = require("http");
var port = 8888;
var express = require('express');
	http = require('http');

var app = express();

var engines = require('consolidate');
app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use("/", express.static(__dirname + "/public"));
app.get('/hello', function(req, res){
  res.send('Hello World');
});

app.get('/goodbye', function (req, res) {
  res.send('Goodbye, cruel world');
});

app.get('/*', function (req, res) {
  res.render('index.html');
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
