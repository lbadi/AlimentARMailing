var express = require('express');
var router = express.Router();
var config = require('./config');
var mailgun = require('mailgun-js')({apiKey: config.api_key, domain: config.domain});

/**
** Endpoint that send contact information to the configured email.
** Receive name,email,user_type, comment(optional).
**/
router.post('/', function(req,res){
  if(!req.body.name || !req.body.email || !req.body.user_type){
    res.status(400).send();
    return;
  }
  var data = {
    from: req.body.name + '<no-reply@notifications.proyectoalimentar.org>',
    to: config.email,
    subject: 'Contacto de: ' + req.body.name,
    text: 'Email : ' + req.body.email + '\nTipo de Usuario: ' + req.body.user_type + '\nComentario: ' + req.body.comment,
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if(error){
      res.status(error.statusCode).send(error.message);
    }else{
      res.status(200).send();
    }
  });
});


module.exports = router;
