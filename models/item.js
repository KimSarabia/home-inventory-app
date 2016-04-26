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

exports.getOneById = function(id,cb) {
  db.query(`SELECT * FROM items WHERE (id) = (
      ${item.id})`,
    id,
    cb);
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

exports.delete = function(item, cb) {
console.log("ITEM", item);
  db.query(`DELETE FROM items WHERE (id) = (
      ${item.id})`,
    cb);
};

exports.toggle = function(id, cb) {

  this.getOneById(id, (err, items) => {
    if(err) return cb(err);
    var newValue = item.isSelected ? 0 : 1;

    db.query("UPDATE items SET is SELECTED = ? WHERE id = ?", newValue, id, (err) => {
      if(err) return cb(err);
      cb(null, newValue);
    })
  });

}

// router.delete('/:id',function(req,res,next){
//   db.query('DELETE FROM questions WHERE ?', {id:req.params.id}, function(err,result){
//     if(err){
//       res.status(400).send(err);
//       return;
//     }
//     res.send(result);
//   });
// });
