var express = require('express');
var router = express.Router();
var bodyParser  = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;
var mailing = require('./mailing');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/mailing',mailing);

app.listen(port);

module.exports = this;

console.log('Mailing up and running on port: ' + port);
