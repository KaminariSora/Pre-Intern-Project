const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    time: String,
    name: String,
    email: String,
    age: Number
})

const UserModel_2 = mongoose.model("users", UserSchema)
module.exports = UserModel_2