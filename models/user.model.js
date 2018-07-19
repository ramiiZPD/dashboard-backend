const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/dashboard");

let serverError = 500;
let statusSuccess = 200;
let statusAdded = 201;

let userSchema = mongoose.Schema({
    username: String,
    name: String,
    password: String,
    email: String
});

let User = mongoose.model("users", userSchema);

const addUser = (newUser) => {
    return new Promise((resolve ,reject) => {
        let addingUser = new User(newUser);
        addingUser.save(newUser, function (error, user) {
            if (error) {
                reject(new Error("Error"))
            }
            resolve(user);
        });
    });
};

const getAllUsers = () => {
    return new Promise((resolve ,reject) => {
        User.find(function (error, users) {
            if (error) {
                reject(new Error("Error"))
            }
            resolve(users);
        });
    });
};

const authenticateUser = (userEmail, userPassword) => {
    return new Promise((resolve ,reject) => {
    let errorObj = {
        Message : "User does not exist or invalid credentials"
    }
    User.find({email: userEmail, password: userPassword}, function (error, result) {
        if (error) {
            reject(new Error("Error"))
        } else {
            if(result.length > 0 && result!= 'undefined') {
                resolve(result);
            } else {
                resolve(errorObj)
            }
        }
    })
 });
}



module.exports = {authenticateUser, getAllUsers, addUser};