var mysql = require('mysql');
var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();


var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-04.cleardb.net',
  user     : 'b64de20323f37f',
  password : 'dba56722',
  database : 'heroku_1b6b2a781f1d910'
});


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index.html')
});
