
const dotenv = require("dotenv");
const mongoose = require('mongoose');
// const url = 'mongodb://localhost:27017/IssueTracker';

dotenv.config();

const url = process.env.DB_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   

db.once('open',()=>{
    console.log("Connected to Database ")
});

module.exports=db;