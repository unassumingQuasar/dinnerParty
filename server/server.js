//Serve it up!
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var database = require('./models/schema.js')

var app = express();

var port = 3000;
var passport = require('passport');
var google = require(path.join(__dirname + '/google.js'));
var util = require('util');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
// database.createTables();

//google oAUTH
  passport.use(passport.initialize());

  //for sessions
  // passport.serializeUser(function(user, done) {
  //   done(null, user);
  // });

  // passport.deserializeUser(function(obj, done) {
  //   done(null, obj);
  // });

   
  passport.use(new GoogleStrategy({
      clientID:     google.GOOGLE_CLIENT_ID,
      clientSecret: google.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/googlecallback",
      passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
      console.log('GOOGLY LOGIN', profile);
      
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });
    }
  ));

  app.get('/auth/google', passport.authenticate('google', { scope: [
       'https://www.googleapis.com/auth/plus.login',
       'https://www.googleapis.com/auth/plus.profile.emails.read'] 
  }));

  app.get( '/googlecallback', 
      passport.authenticate( 'google', { 
        successRedirect: '/',
        failureRedirect: '/googleLogin'
  }));



//body parse json
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());


//server up all static files
app.use(express.static(path.join(__dirname + '/../client')));


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