var pg = require('pg');
var Sequelize = require('sequelize');
var db = new Sequelize('dinnerParty', null, null, {
 dialect: 'postgres',
 define: {
   underscored: false,
 }
});


exports.User = db.define('User', {
 name: Sequelize.STRING  
});

exports.Event = db.define('Event', {
 name: Sequelize.STRING,
 description: Sequelize.STRING,
 location: Sequelize.STRING,
 date: Sequelize.DATE,
 cost: Sequelize.FLOAT
});

exports.UserEvent = db.define('UserEvent', {
 status: Sequelize.STRING
});


exports.User.belongsToMany(exports.Event, {through: exports.UserEvent, constraints: false});
exports.Event.belongsToMany(exports.User, {through: exports.UserEvent, constraints: false});

exports.UserEvent.sync();
exports.User.sync();
exports.Event.sync();
