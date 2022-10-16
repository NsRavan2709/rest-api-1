
// All import statement 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require("./routes/user");

// using app for express 
const app = express();

// Port number 
const port = 5000;

// using bodyParser for json responses
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

// Connect to MongoDB
const db = "mongodb+srv://omkarkokil:osk2709@cluster0.krtrrgy.mongodb.net/api?retryWrites=true&w=majority";
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) =>
    console.log("errror", err)
);


// listen the app server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});