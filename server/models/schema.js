var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/db';

var db = new pg.Client(connectionString);
db.connect();

exports.createTables = function() {

  db.query('CREATE TABLE IF NOT EXISTS users'+
      '(id SERIAL PRIMARY KEY, name VARCHAR(30) not null, password VARCHAR(40))');

  db.query('CREATE TABLE IF NOT EXISTS events'+
      '(id SERIAL PRIMARY KEY, name VARCHAR(30) not null, host_id SERIAL REFERENCES users(id))');

  db.query('CREATE TABLE IF NOT EXISTS user_events'+
      '(user_id SERIAL REFERENCES users(id),'+
      'product_id SERIAL REFERENCES events(id),'+
      'status VARCHAR(30))');
  
};




// CREATE TABLE user_events(
// user_id SERIAL REFERENCES users(id),
// product_id SERIAL REFERENCES events(id),
// status VARCHAR(30));