var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/dashboard");

var serverError = 500;
var statusSuccess = 200;
var statusAdded = 201;

var userSchema = mongoose.Schema({
    username: String,
    name: String,
    password: String,
    email: String
});

var User = mongoose.model("users", userSchema);

exports.addUser = function (newUser, response) {
    var addingUser = new User(newUser);
    addingUser.save(newUser, function (error, user) {
        if (error) {
            response.status(serverError);
            response.json(error);
        }
        response.status(statusAdded);
        response.json(newUser);
    });
};

exports.getAllUsers = function (response) {
    User.find(function (error, users) {
        if (error) {
            response.status(serverError);
            response.json(error);
        }
        response.status(statusSuccess);
        response.json(users);
    });
};
