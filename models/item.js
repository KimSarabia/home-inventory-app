'use strict';

var db = require('../config/db');
var moment = require('moment');

db.run(`CREATE TABLE IF NOT EXISTS items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          createdAt DATETIME,
          dueDate DATETIME,
          desc TEXT,
          isComplete BOOLEAN DEFAULT 0
        )`);

exports.get = function(cb) {
  db.all('SELECT * FROM items', cb);
};

exports.create = function(item, cb) {
  if(!item.dueDate || !item.desc) {
    return cb('Missing required field.')
  }
  
  var createdAt = moment().unix();
  var dueDate = moment(item.dueDate).unix();

  db.run('INSERT INTO items (createdAt, dueDate, desc) VALUES (?, ?, ?)',
    createdAt,
    dueDate,
    item.desc,
    cb);
};

