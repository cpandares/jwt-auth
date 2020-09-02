'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = Schema({
    name:String,
    description:String,
    date:Number,
    priority:String
});

module.exports = mongoose.model('Task', TaskSchema);
