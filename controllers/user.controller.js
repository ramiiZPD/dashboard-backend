var express = require('express'),
    router = express.Router()
    Users = require('../models/user.model');

//Get all users
router.get('/', function (req, res) {
    Users.getAllUsers(res);
});

//Add new user
router.post('/', function (req, res) {
    Users.addUser(req.body, res);
});

module.exports = router;
