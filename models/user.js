'use strict'

let rolesValidos = {
    values: ["ADMIN", "USER"],
    message: '{VALUE} no es un role válido'
}

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es necesario'],
    },
    lastname:{
        type:String,
        required:[true, 'El Apellido es necessario...']
    },
    email:{
        type:String,
        unique: true,
        required: [true, "El correo es necesario"],
    },
    password:{
        type:String,
        required: [true, "Contraseña obligatoria"]
    },
    role: {
        type: String,
        default: 'USER',
        enum: rolesValidos,
    },
   
});

UserSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
 }

 UserSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
})
module.exports = mongoose.model('User', UserSchema)