var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var noteController = require('./api/controllers/note-controller');

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));


 // set port
 app.listen(3000, function () {
     console.log('Node app is running on port 3000');
 });

 app.use('/notes',noteController);
 module.exports = app;