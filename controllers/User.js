'use strict'

var User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


var controller = {
   
    save: function  (req, res){
      var newUser = new User();

        var params = req.body;
       
          newUser.name = params.name;
          newUser.lastname = params.lastname;
          newUser.email = params.email;
          newUser.password = bcrypt.hashSync(params.password, 10);
          newUser.role = 'USER';
          
          

           newUser.save((err, userStore)=>{
            if(err) return res.status(500).send({message: err});

            if(!userStore) return res.status(404).send({message:'no Hay usuario'});


            const token =  jwt.sign({_id: newUser._id}, 'yourSecretKey');
            return res.status(200).json({newUser:userStore});
          });
    },

    login(req, res){
      let body = req.body;
      User.findOne({email:body.email}, (err, userStore)=>{
        if(err) return res.status(500).send({message:err});

        if(!userStore) return res.status(404).send({message:'No existe el usuario'});

        if(!bcrypt.compareSync(body.password, userStore.password)){
          return res.status(400).json({
            ok: false,
            err: {
              message: "Usuario o contraseña incorrectos"
            }
         });
        }

        const token = jwt.sign({ userStore }, "yourSecretKey", {
          expiresIn: "24h"
        });
    
        res.json({
          userStore,
          token,
          message: "create user successfully"
        });


      });
    },

     

}

module.exports = controller;