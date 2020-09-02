'use strict'

var Task = require('../models/task');


const bodyParser = require('body-parser');


var controller = {

    home(req, res){
        res.status(200).send({message:'Es la home de las tareas'})
    },

    task(req, res) {
       

            res.json([
                {
                  _id: '1',
                  name: "task one",
                  description: 'asdadasd',
                  date: "2019-11-06T15:50:18.921Z"
              },
              {
                  _id: '2',
                  name: "task two",
                  description: 'asdadasd',
                  date: "2019-11-06T15:50:18.921Z"
              },
              {
                  _id: '3',
                  name: "task three",
                  description: 'asdadasd',
                  date: "2019-11-06T15:50:18.921Z"
              },
            ]);
    
       
    }

}

module.exports = controller;
