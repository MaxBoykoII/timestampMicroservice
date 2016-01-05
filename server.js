var path = process.cwd();
var express = require('express');
var timeObject = require(path + '/app_modules/time-object.js');
var app = express();
app.set('json spaces', 0);

app.get('/', function(req, res) {

  res.sendfile(path + '/client/index.html')
});

app.get('/:string', function(req, res) {

  var string = req.params.string;
  res.send(timeObject(string));
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");

