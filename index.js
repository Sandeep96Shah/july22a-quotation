const express = require('express');
const cors = require("cors");
const port = 8000;
const app = express();
// import the database
const database = require('./config/monggose');
const passportJWT = require('./config/passport_jwt');

// middleware
app.use(cors());
app.use(express.urlencoded());
app.use('/', require('./routes/index'));

app.set("view engine", "ejs");
app.set("views", "views");

app.get('/', (req, res) => {
    return res.send("Hello July22A")
});

app.listen(port, (error) => {
    if(error){
        console.log(`Error while running the server at port: ${port}`);
        return;
    }
    console.log(`Server is up and running on port ${port}`);
})