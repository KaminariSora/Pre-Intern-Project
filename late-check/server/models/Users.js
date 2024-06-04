const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name: String,
    LastName: String,
    Position: String,
    time: String,
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel