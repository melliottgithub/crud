// import express package from node_modules
const express = require('express');

// body parserfrom node_modules
const bodyParser = require('body-parser');


//invoking express to get app instance
const app = express();

//initialize port
const PORT = process.env.PORT || 3000;


//Middleware

// middleware to convert request body to json
app.use(bodyParser.json());


// encodeuri string
app.use(bodyParser.urlencoded({ extended: true }));


// creating end points


app.get('/', (req, res) => res.send("hello world"));

// listen to port

app.listen(PORT, () => {
    console.log("server is runnig on port ", PORT)
})