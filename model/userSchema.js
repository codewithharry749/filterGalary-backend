const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        default: 'Harikesh6723@gmail.com'
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
});

const User = new mongoose.model("User", userSchema);

module.exports = User 