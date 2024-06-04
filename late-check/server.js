const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
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

const upload = multer({ dest: 'uploads/' });

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

app.get('/getData', (req, res) => {
    UserModel.find()
    .then(data => {
        console.log("Data found:", data);
        res.json(data);
    })
    .catch(err => {
        console.log("Error fetching data:", err);
        res.json(err);
    });
});

app.post('/uploadCSV', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    const filePath = req.file.path;
    const results = [];

    fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
        console.log('Parsed data:', data); 
        results.push(data);
    })
    .on('end', async () => {
        try {
            //When you need to change data please check this.
            const mappedResults = results.map(item => ({
                Name: item.Name || item.name, 
                LastName: item.LastName,
                Position: item.Position,
                time: item.time, 
            }));

            await UserModel.insertMany(mappedResults);
            fs.unlinkSync(filePath); // Delete the file after processing
            res.send('File uploaded and data inserted');
        } catch (error) {
            console.error('Error inserting data', error);
            res.status(500).send('Error inserting data');
        }
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
