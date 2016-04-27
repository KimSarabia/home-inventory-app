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


module.exports = router;
