const mongoose = require('mongoose');


const UserAccount_Model = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "User name missing"]
    },
    email: {
        type: String,
        required: [true, "Email missing"],
    },
    password: {
        type: String,
        required: [true, "Password missing"],
    },
    profileIMG: {
        type: String,
        required: [false]
    }
});

module.exports = mongoose.model("UserAccount", UserAccount_Model);