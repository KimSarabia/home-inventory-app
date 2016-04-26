'use strict';

var db = require('../config/db');

db.query(`CREATE TABLE IF NOT EXISTS rooms (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        room_type VARCHAR(255)
      )`);

exports.get = function(cb) {
  db.query('SELECT * FROM rooms', cb);
};

exports.create = function(room, cb) {
  if(!room.room_type) {
    return cb('Missing required field.')
  }

  db.query('INSERT INTO items (room) VALUES (?)',
    room.room_type,
    cb);
};
