'use strict';

var db = require('../config/db');
var moment = require('moment');

db.query(`CREATE TABLE IF NOT EXISTS items (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100),
        value DECIMAL(10, 2),
        room VARCHAR(100)
      )`);

exports.get = function(cb) {
  db.query('SELECT * FROM items', cb);
};

exports.create = function(item, cb) {
  if(!item.name || !item.value) {
    return cb('Missing required field.')
  }

  db.query('INSERT INTO items (name, value, room) VALUES (?, ?, ?)',
    item.name,
    item.value,
    item.room,
    cb);
};
