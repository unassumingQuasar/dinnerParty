var express = require('express');
var partyRouter = express.Router();
var userController = require('../controllers/userController.js');
var eventController = require('../controllers/eventController.js')


//signup
partyRouter.route('/signup')
  .post(userController.addUser);

//login in
//please adapt when making auth
partyRouter.route('/login')
  .post(userController.getUser);

//handles request that wants to make a new event by a specific host
partyRouter.route('/event')
  .post(eventController.createEvent);

//handles request that wants all guest on specific event
partyRouter.route('/guestlist')
  .get(eventController.getAllGuests);

//handles request that wants all events on specific user
partyRouter.route('/eventlist')
  .get(eventController.getAllEvents);

//handles request that wants one specific event
partyRouter.route('/eventDetails')
  .get(eventController.getOneEvent);




module.exports = partyRouter;