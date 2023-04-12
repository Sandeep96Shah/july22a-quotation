// steps to conect to database
// import the mongoose package
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect("mongodb+srv://july22a:july22a@cluster0.wphqpiz.mongodb.net/?retryWrites=true&w=majority")
.then(() => {console.log("Connected to databse successfully!")})
.catch((error) => {console.log("Error while connecting to the databse", error)})