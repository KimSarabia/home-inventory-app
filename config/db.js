'use strict';

var mysql = require("mysql");

var connection = mysql.createConnection(process.env.JAWSDB_URL || {
    host: "localhost",
    user: "root",
    password: "test",
    database: "home_inventory"
});

db.query(`CREATE TABLE IF NOT EXISTS items (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        item_name VARCHAR(100),
        item_value DECIMAL(10, 2),
        item_room VARCHAR(100)
      )`);
      
db.query(`CREATE TABLE IF NOT EXISTS rooms (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        room_type VARCHAR(255)
      )`);

connection.connect(function(err){
if(err){
  console.log('Error:', err);
}
else{
  console.log('Connection success!');
}
});


module.exports = connection;
