var Sequelize = require('sequelize');
var db = require('../config/init.js');


//make a new event by a specific host
exports.createEvent = function(req, res){

  db.Event.create(req.body).then(function(event){
      res.send(event);
    });

};



//get events for users dashboard
exports.getAllEvents = function(req, res){
  console.log('you hit events')

  var PartyDetailsData = [
   {eventName: 'name 1',
    location: 'location 1',
    time: '9am',
    cost: '$5',
    description: 'so much fun so much fun so much fun so much',
    guestList: ['mike', 'steve'],
  },

  {eventName: 'name 2',
   location: 'location 2',
   time: '7am',
   cost: '$10',
   description: 'so much fun so much fun so much fun so much fun so much fun so much',
   guestList: ['roy'],
  },

  {eventName: 'name 3',
  location: 'location 3',
  time: '7pm',
  cost: '$3',
  description: 'so much fun so much fun so much fun so much fun so much fun',
  guestList: [],
  }
  ];

  res.send(PartyDetailsData);




  // db.User.findOne(req.body)
  //   .then(function(user){
  //     user.getEvents().then(function(events){
  //       var eventAttributes=[];
  //       for(var i = 0; events.length > i; i++){
  //         // if(events[i].UserEvent.status === 'invited'){
  //           eventAttributes.push([events[i].id,events[i].UserEvent.status]);
  //         // }
  //
  //       }
  //     });
  //   });
};

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
  console.log('get guest list')
  var GuestListData = [
   {name: 'santaClause'},
   {name: 'jane'},
   {name: 'Lizzie'}
  ];

res.send(GuestListData);
// get all guests for specific event
  // db.Event.findOne(req.body)
  //   .then(function(event){
  //     event.getUsers().then(function(users){
  //       var userAttributes=[];
  //       for(var i = 0; users.length > i; i++) {
  //         if(users[i].UserEvent.status === 'invited'){
  //           userAttributes.push(users[i].id);
  //         }
  //         //do something with userAttributes
  //         // console.log(userAttributes);
  //       }
  //     });
  //   });


};

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
