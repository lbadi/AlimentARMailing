var express = require('express');
var router = express.Router();
var bodyParser  = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;
var mailing = require('./mailing');
var cors_config = require('./cors_config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Enable cors for every endpoint.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", cors_config.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/mailing',mailing);

app.listen(port);

module.exports = this;

console.log('Mailing up and running on port: ' + port);
