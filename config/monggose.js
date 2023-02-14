// steps to conect to database
// import the mongoose package
const mongoose = require('mongoose');
require('dotenv').config();

// const url = "mongodb://0.0.0.0/DATBASE_NAME";

mongoose.connect("mongodb://localhost/Quotation-July")
.then(() => {console.log("Connected to databse successfully!")})
.catch((error) => {console.log("Error while connecting to the databse", error)})