const express = require("express");
const router = express.Router();
const Users = require("../models/user.model");

//Get all users
router.get("/", async (req, res) => {
    let payload = await Users.getAllUsers();
    console.log(payload)
    res.send(payload)
});

//Add new user
router.post("/", async (req, res) => {
    let payload = Users.addUser(req.body);
    res.send(payload)
});

router.post("/login", async(req, res) =>{
    let userEmail = req.body.email;
    let userPassword = req.body.password;

    let payload = await Users.authenticateUser(userEmail, userPassword);
    console.log(payload)
})

module.exports = router;
