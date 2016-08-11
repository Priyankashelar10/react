var express = require('express');
var path = require('path');
var app = express();

// configure app
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/src'));
app.use('/dist', express.static(__dirname + '/../dist'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.set('views', path.join(__dirname, '/'));
app.set('view engine', 'ejs');

// routes
app.get('/*', function(req, res) {
  res.render('src/index.html');
});

// start
var port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});