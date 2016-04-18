var pg = require('pg');
var Sequelize = require('sequelize');
var db = new Sequelize('dinner', null, null, {
 dialect: 'postgres',
 define: {
   underscored: false,
 }
});


exports.User = db.define('users', {
 name: Sequelize.STRING,
 googleId: Sequelize.STRING,  
 image: Sequelize.JSON
});

exports.Event = db.define('events', {
 name: Sequelize.STRING,
 description: Sequelize.STRING,
 location: Sequelize.STRING,
 date: Sequelize.STRING,
 cost: Sequelize.FLOAT,
 time: Sequelize.STRING,
 image: Sequelize.TEXT,
});

exports.UserEvent = db.define('userevents', {
 status: Sequelize.STRING
});


exports.User.belongsToMany(exports.Event, {through: exports.UserEvent, constraints: false});
exports.Event.belongsToMany(exports.User, {through: exports.UserEvent, constraints: false});

exports.UserEvent.sync();
exports.User.sync();
exports.Event.sync();
