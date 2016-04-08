//Serve it up!
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./config/init.js')
var app = express();
var port = 3000;


   
  passport.use(new GoogleStrategy({
      clientID:     google.GOOGLE_CLIENT_ID,
      clientSecret: google.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/googlecallback",
      passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
      console.log('GOOGLY LOGIN', profile);
      
      db.User.findOrCreate({where: { googleId: profile.id.toString()}, defaults: { name: profile.displayName}}).then(function (user, created) {
        console.log("PSQL USER", user, 'created', created);
        return done(user, created);
      });
    }
  ));

  app.get('/auth/google', passport.authenticate('google', { scope: [
       'https://www.googleapis.com/auth/plus.login',
       'https://www.googleapis.com/auth/plus.profile.emails.read'] 
  }));

  app.get( '/googlecallback', 
      passport.authenticate( 'google', { 
        successRedirect: 'http://localhost:3000/eventDetails',
        // failureRedirect: '/googleLogin'
  }));




//body parse json
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

//server up all static files
app.use(express.static(path.join(__dirname + '/../client')));

app.get('/', function(req, res, next){
  res.send(404);
  // res.render('index.html');
})

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