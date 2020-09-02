'use strict'

var express = require('express');
var UserController = require('../controllers/User');
const { withJWTAuthMiddleware } = require("express-kun");
var TaskController = require('../controllers/Task');
var router = express.Router();


var protectedRouter = withJWTAuthMiddleware(router, "yourSecretKey");

router.post('/register', UserController.save);
router.post('/login', UserController.login);
protectedRouter.get('/home', TaskController.home);


protectedRouter.get("/:private-tasks", TaskController.task);



module.exports = router;