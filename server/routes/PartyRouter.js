var express = require('express');
var partyRouter = express.Router();
var userController = require('../controllers/userController.js');
var eventController = require('../controllers/eventController.js')


//signup
partyRouter('/signup')
  .post(userController.addUser);

//login in
//please adapt when making auth
partyRouter('/login')
  .post(userController.getUser);

//handles request that wants to make a new event by a specific host
partyRouter('/event')
  .post(eventController.createEvent);

//handles request that wants all guest on specific event
partyRouter('/guestlist')
  .get(eventController.getAllGuests);

//handles request that wants all events on specific user
partyRouter('/eventlist')
  .get(eventController.getAllEvents);

//handles request that wants one specific event
partyRouter('/eventDetails')
  .get(eventController.getOneEvent);




module.exports = partyRouter;