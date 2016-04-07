//Serve it up!
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = 3000;


//body parse json
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());


//server up all static files
app.use(express.static(path.join(__dirname + '/../client')))


//connect db?


//add routing
var partyRouter = require('/../routes/PartyRouter.js');
//add in optional url and additional routes if neccessary
app.use(partyRouter);



//app is listening on port 3000
app.listen( port, function(err){
  if(err) {
    return console.log('error listening on port 3000', err);
  }
  console.log('App is listening on port 3000!');
});