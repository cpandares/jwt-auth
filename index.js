'use strict'

//cargamos la conexion a la base de datos

var mongoose = require('mongoose');

//cargar archivos del app para el servidor de express
var app = require('./app');
var port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/notas')
        .then(()=>{
            
            console.log("Conexion establecida");

            //Servidor de express
            app.listen(port, ()=>{
                console.log("Server on port 3000");
            })
        })
        .catch(err=>console.log(err));


        process.env.CADUCIDAD_TOKEN = '48h';

        process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION ||  'este-es-el-seed-desarrollo';