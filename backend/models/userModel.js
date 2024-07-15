const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: String,
    name: String,
    username: String,
    email : String,
    password: String
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel; 