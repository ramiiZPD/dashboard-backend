//This is the main controller which binds every other sub controllers
const express = require("express");
const router = express.Router();

router.use("/user", require("./user.controller"));

module.exports = router;
