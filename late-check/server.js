const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const UserModel = require("./server/models/Users.js");
const DataModel = require('./server/models/Data.js');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

// Get users
app.get('/getUsers', async (req, res) => {
    try {
        const users = await DataModel.find();
        console.log("Users found:", users);
        res.json(users);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json(err);
    }
});

// Get data (same as getUsers, consider combining)
app.get('/getData', async (req, res) => {
    try {
        const data = await DataModel.find();
        console.log("Data found:", data);
        res.json(data);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json(err);
    }
});

// Upload CSV and insert data
app.post('/uploadCSV', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    const filePath = req.file.path;
    const results = [];

    fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
        try {
            const mappedResults = results.map(item => ({
                Name: item.Name || item.name,
                LastName: item.LastName,
                Position: item.Position,
                // time: item.time,
                Day1: item.Day1,
                Day2: item.Day2
            }));

            await DataModel.insertMany(mappedResults);
            fs.unlinkSync(filePath); // Delete the file after processing
            res.send('File uploaded and data inserted');
        } catch (error) {
            console.error('Error inserting data:', error);
            res.status(500).send('Error inserting data');
        }
    });
});

// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
