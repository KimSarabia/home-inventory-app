'use strict';

var db = require('../config/db');

db.query(`CREATE TABLE IF NOT EXISTS items (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        item_name VARCHAR(100),
        item_value DECIMAL(10, 2),
        item_room VARCHAR(100)
      )`);

exports.get = function(cb) {
  db.query('SELECT * FROM items', cb);
};

exports.create = function(item, cb) {
  if(!item.item_name || !item.item_value) {
    return cb('Missing required field.')
  }

  db.query(`INSERT INTO items (item_name, item_value, item_room) VALUES ('${item.item_name}',
      '${item.item_value}',
      '${item.item_room}')`,
    cb);
};
