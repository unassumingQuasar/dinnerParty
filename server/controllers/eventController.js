var Sequelize = require('sequelize');
var db = require('../config/init.js');
var each = require('async-each');

//make a new event by a specific host
exports.createEvent = function(req, res, next){
  db.Event.create({name: req.body.eventName, location: req.body.location, description: req.body.description, date: req.body.date, cost: req.body.cost })
    .then(function(event){
      //add event to host
      db.User.findOne({googleId: req.user.googleId})
        .then(function(user){
          user.addEvent(event)
            .then(function(user){
              //send back  the event we just created so that it can be displayed in the user's event feed
              res.json(event.dataValues);
            })
        })
    });
  };

exports.updateEvent = function(req, res, next){
  //get the users event first
  //then find the matching event so that 
  //users who named the events the same name 
  //only update their own events
  db.User.findOne({googleId: req.user.googleId})    
    .then(function(user){
      
      user.getEvents().then(function(events){
        for(var i = 0; i < events.length; i++){
          if(event.name === req.body.eventName){
            
            db.Event.findOne({ id: event.id })
              .then(function(event){   
                //req.body needs to be in format {propertyToBeUpdated: updatedValue}
                event.updateAttributes(req.body)
                  .then(function(event){
                    //send back updated event so that it can be updated in user's event feed.
                    res.json(event.dataValues);
                  })     
    
              })
            }
          }
      });
    })
};



//and get associated guestlist for each event and send back on each event object
// we want to send back [{name: , date: , etc: , guestlist: [ {user}, {user} , {user}]}, {}, ]
exports.getAllEvents = function(req, res, next){

  var allEvents = [];
  db.User.findOne({googleId: req.user.googleId})
    .then(function(user){   
      user.getEvents().then(function(events){


        each(events, function(event, next){
          
          if(event.dataValues){
            
            event.getUsers().then(function(users){
              var data = event.dataValues;
              currentEvent = {id: data.id, eventName: data.name, description: data.description, location: data.location, date: data.date, cost: data.cost, guestlist: []};
              for(var i = 0; i < users.length; i++){
                if(users[i].dataValues){
                  currentEvent.guestlist.push({name: users[i].dataValues.name, id: users[i].dataValues.id});      
                }
              }

              allEvents.push(currentEvent);
              next();
            });

          }
        }, function(){
          res.json(allEvents);
        });

      });
    });

};




exports.getAllGuests = function(req, res){

// get all guests for specific event
//get all users events first then find in the db 
//the event that matches the specific event searched for
//then get the users on that event
// to allow users to be able to make events the same name as other users

  db.User.findOne({googleId: req.user.googleId})
    .then(function(user){
      if(!user){
        return console.log('there is no user logged in!')
      }
      user.getEvents().then(function(events){
        for(var i = 0; i < events.length; i++){
          if(events[i].name === req.eventName){
            db.Event.findOne({id: events[i].id})
              .then(function(event){
                event.getUsers().then(function(users){
                  res.json(users);
                })
              })
          }
        }
      })
  });

};



exports.addGuest = function(req, res){
 //refractor to make sure that we are getting the users event
 // not some other user's event with the same name like (21st bday);
 db.User.findOne({name: req.body.guestName}).then(function(guest){
   db.Event.findOne({name: req.body.event})
   .then(function(event){
     event.addUser(guest, function(){
       res.json(guest.dataValues);
     });
   });
 });
};



