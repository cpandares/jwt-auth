'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


//Configuracion de Rutas
var user_routes = require('./routes/index');

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




//Cors


//Rutas
app.use('/api', user_routes);


module.exports = app;