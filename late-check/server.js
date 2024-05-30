const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require("./server/models/Users.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then(users => {
        console.log("Users found:", users);
        res.json(users);
    })
    .catch(err => {
        console.log("Error fetching users:", err);
        res.json(err);
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
