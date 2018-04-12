const express = require("express");
const router = express.Router();
const Users = require("../models/user.model");

//Get all users
router.get("/", function (req, res) {
    Users.getAllUsers(res);
});

//Add new user
router.post("/", function (req, res) {
    Users.addUser(req.body, res);
});

router.post("/login", function(req, res){
    let userEmail = req.body.email;
    let userPassword = req.body.password;
    Users.authenticateUser(userEmail, userPassword, function(status, result) {
        console.log(result);
        if(status){
            res.status(201).json(result);
            console.log(result);
        } else {
            res.status(500).end();
        }
    })
})

module.exports = router;
