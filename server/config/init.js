var pg = require('pg');
var Sequelize = require('sequelize');
var db = new Sequelize('dinnerParty', null, null, {
  dialect: 'postgres',
  define: {
    underscored: false,
  }
});


var User = db.define('User', {
  name: Sequelize.STRING  
});

var Event = db.define('Event', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  location: Sequelize.STRING,
  date: Sequelize.DATE,
  cost: Sequelize.FLOAT
});

var UserEvent = db.define('UserEvent', {
  status: Sequelize.STRING
});


User.belongsToMany(Event, {through: UserEvent, constraints: false});
Event.belongsToMany(User, {through: UserEvent, constraints: false});

UserEvent.sync();
User.sync();
Event.sync();

module.exports = db;
