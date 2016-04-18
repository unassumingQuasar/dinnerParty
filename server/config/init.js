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
 image: Sequelize.TEXT
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

exports.Recipe = db.define('recipes', {
  name: Sequelize.STRING,
  ingredient: Sequelize.STRING,
  recipeUrl: Sequelize.STRING,
  index: Sequelize.INTEGER
});

exports.UserEvent = db.define('userevents', {
  status: Sequelize.STRING
});

exports.EventRecipe = db.define('eventrecipes', {
  status: Sequelize.STRING
});

exports.User.belongsToMany(exports.Event, {through: exports.UserEvent, constraints: false});
exports.Event.belongsToMany(exports.User, {through: exports.UserEvent, constraints: false});
exports.Event.belongsToMany(exports.Recipe, {through: exports.EventRecipe, constraints: false});
exports.Recipe.belongsToMany(exports.Event, {through: exports.EventRecipe, constraints: false});

exports.UserEvent.sync();
exports.EventRecipe.sync();
exports.User.sync();
exports.Event.sync();
exports.Recipe.sync();
