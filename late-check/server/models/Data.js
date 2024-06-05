const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    id: String,
    Name: String,
    LastName: String,
    Position: String,
    Day1: String,
    Day2: String
})

const DataModel = mongoose.model("Data", DataSchema)
module.exports = DataModel