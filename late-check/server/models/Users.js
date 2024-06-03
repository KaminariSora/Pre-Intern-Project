const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    time: String,
    name: String,
    LastName: String,
    Position: String,
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel