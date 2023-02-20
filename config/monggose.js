// steps to conect to database
// import the mongoose package
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect("mongodb://localhost/Quotation-July")
.then(() => {console.log("Connected to databse successfully!")})
.catch((error) => {console.log("Error while connecting to the databse", error)})