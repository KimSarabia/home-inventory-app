'use strict';

var express = require('express');
var router = express.Router();

var moment = require('moment');
var Item = require('../models/item');
var Room = require('../models/room');

//  GET /
router.get('/', (req, res) => {
  Room.get((err, rooms) => {
    if(err) {
      res.render('error', {error: err})
    } else {
      Item.get((err, items) => {
      res.render('home', {rooms: rooms, items: items});
    })
  }
})
})
//  GET /
// router.get('/whatever', (req, res) => {
//   Item.get((err, items) => {
//     if(err) {
//       res.render('error', {error: err})
//     } else {
//       console.log("I TEMS", items);
//       res.render('home', {"items": items});
//     }
//   })
// })

module.exports = router;
