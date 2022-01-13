const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const path = require('path')


const app = express();
mongoose.connect('mongodb://localhost:27017/notes-app', {
    useUnifiedTopology : true,
    useNewUrlParser: true
});

const db = mongoose.connection; 

// let the db knows when to establish the connection 
db.once("open", ()=> console.log("Connected to MongoDB"));

// "on" is used for continuous listening/checking for erros in this case.
db.on("error", console.error.bind(console,'Connection Error'));

// set up my public folder. 

app.use(express.static(path.join(__dirname + 'public')));
console.log(__dirname);

app.use(bodyParser.json()); 
app.use(cors());

app.use(function (req, res, next) {
    //Set the “Access-Control-Allow-Origin” for the Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    //Set the “Access-Control-Allow-Methods” for the Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    //Set the  "Access-Control-Allow-Headers“ for the Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "content-type, X-Requested-With"
    );
    //Set "Access-Control-Allow-Credentials“ to true if you need the website to include cookies in the requests sent to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
    //Pass to next layer of middleware
    next();
  });


// set the routes here for the backend;
const notes = require('./backend-routes/notes');

app.use('/notes', notes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });