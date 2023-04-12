// steps to conect to database
// import the mongoose package
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URL)
.then(() => {console.log("Connected to databse successfully!")})
.catch((error) => {console.log("Error while connecting to the databse", error)})