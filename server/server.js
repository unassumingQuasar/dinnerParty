//Serve it up!
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var database = require('./models/schema.js')
//paypal authorization stuff
var passport = require('passport');
var paypal = require('./paypal.js');
var util = require('util');
var PayPalStrategy = require('passport-paypal-oauth').Strategy;

passport.use(passport.initialize());


//session setup
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });



//configuration
// passport.use(new PayPalStrategy({
//     clientID: paypal.PAYPAL_APP_ID,
//     clientSecret: paypal.PAYPAL_APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/paypal/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     console.log('AUTHING');
//     User.findOrCreate({ paypalId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));



var app = express();
var port = 3000;

database.createTables();


// app.get('/auth/paypal', 
//   passport.authenticate('paypal', { failureRedirect: '/signup' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     console.log('AUTHINGEVEN MORE');
//     res.send(200);
//     res.redirect('/');
//   });

// app.get('/auth/paypal/callback', 
//   passport.authenticate('paypal', { failureRedirect: '/' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     console.log('AUTHINGEVEN MORE');
//     res.send(200);
//     res.redirect('/');
//   });


//body parse json
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());


//server up all static files
app.use(express.static(path.join(__dirname + '/../client')));

//serve up test 


//connect db?


//add routing
var partyRouter = require(path.join(__dirname + '/routes/PartyRouter.js'));
//add in optional url and additional routes if neccessary
app.use(partyRouter);



//app is listening on port 3000
app.listen( port, function(err){
  if(err) {
    return console.log('error listening on port 3000', err);
  }
  console.log('App is listening on port 3000!');
});