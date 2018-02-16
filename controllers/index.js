//This is the main controller which binds every other sub controllers
var express = require('express'),
    router = express.Router();

router.use('/user', require('./user.controller'));

module.exports = router;
