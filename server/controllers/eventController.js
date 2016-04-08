var Sequelize = require('sequelize');
var db = require('../config/init.js');

//make a new event by a specific host
exports.createEvent = function(req, res){
  var data = req.body;
  db.Event.findOne({name: 'stuff'})
  .then(function(party){
    console.log(party);
  });
  db.Event.create({
    name: data.name, 
    description: data.description, 
    location: data.location,
    cost: data.cost })
    .then(function(event){
      // console.log('heres the event',event);
      for(var i = 0; i < data.guests.length; i++){
        console.log(data.guests[i]);
      }
      res.sendStatus(200);
    });                                                                                                                                            

}

//get events for users dashboard
exports.getAllEvents = function(req, res){

  // Event.findAll({})


}

//get one event 
exports.getOneEvent = function(req, res){

}


//requests to join tables
exports.addGuest = function(req, res, next){
 //add event to guest/guest to event in join table
 // console.log('ADDGUEST NEXT', next);
 // addGuest(req.body.event, req.body.user, next);

}


exports.getAllGuests = function(req, res){
 //get all guests for specific event

}

var addGuest = function(event, guest, next){
 // console.log('HELPER NEXT', event);  
 // console.log(event);
 // db.User.findOne({name: guest}).then(function(guest){
 //   db.Event.findOne({name: event.name})
 //   .then(function(event){
 //     console.log('EVENT', event);
 //     event.addUser(guest);
 //     next();
 //   });
 // });
};


